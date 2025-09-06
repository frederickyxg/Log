# <font color = blue>第一章 Hello ZYNQ</font>

## <font color = red>1.1 实验目的</font>

1:掌握基于vitis-vivado创建SOC工程
2:掌握基于图形化BlockDesign的设计方法
3:掌握ZYNQIP核的调用
4:掌握ZYNQIP核的参数配置方法
5:掌握生成一个基于ZYNQIP核的最小系统方法
6:导出硬件参数xsa文件
7:使用vitis-sdk创建sdkbase工程
8:使用vitis-sdk创建自带sdkhelloworldAPP工程
9:使用vitis-sdk创建以太网测试程序

## <font color = red>1.2 实验步骤</font>

#### VITIS-VIVADO创建工程

1. 在需要创建的路径下新建三个文件夹

- soc_hw
- soc_prj
- soc_sdk

3. 将例程中的uisrc文件复制到2步创建的soc_prj中
4. 打开vivado，在上面的路径下创建工程(路径选择到prj)，点击next

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250826163225431.png" alt="image-20250826163225431" style="zoom: 50%;" />

> 注意，这里的文件名相当于创建一个子路径，我们不需要，所以直接取名为soc_prj就行

5. 如图所示配置文件类型，点击next

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250826162443096.png" alt="image-20250826162443096" style="zoom: 67%;" />

6. 选择芯片类型(我的是米联客的7020，型号如下)，点击Next

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250826162950375.png" alt="image-20250826162950375" style="zoom: 50%;" />

7. 点击finish结束



#### VITIS-VIVADO创建BD添加配置ZYNQ-IP

1. 在IP INTEGRATOR中点击Create Block Design

2. 将BD命名为system，ok

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250826163456672.png" alt="image-20250826163456672" style="zoom: 67%;" />

3. 在Diagram中单击加号，搜索需要的IP核，创建

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250826163647043.png" alt="image-20250826163647043" style="zoom: 50%;" />

4. 双击IP核，打开参数配置界面
5. 点击Presets，apply config，在弹出的界面中选中之前复制的uisrc中的doc,.tcl文件

> 如果是自己绘制的板卡，可以根据原理图的物理连接配置zynq核的连接方式，可以通过save configuration进行配置保存。
>
> 可以通过检查MIO configuration等等配置来确定是否完成。

6. 回到BD，可以看到有些已经打钩，说明已经配置成功，点击OK

![image-20250826170210231](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250826170210231.png)









#### VITIS-VIVADO添加system_wrapper.v

1. 回到BD设计界面，可以看到有一个Run Block Automation，点击以后点OK

| <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250826170450431.png" alt="image-20250826170450431" style="zoom:50%;" /> | <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250827123100178.png" alt="image-20250827123100178" style="zoom:50%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

2. 创建顶层调用ip核的verilog代码，在design上右键，选择Create HDL Wrapper，生成v代码

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250827123301433.png" alt="image-20250827123301433"  />

![image-20250827123425298](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250827123425298.png)



#### VITIS-VIVADO如何编译工程

1. 压缩bit文件，添加约束

| <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250827123712321.png" alt="image-20250827123712321" style="zoom: 67%;" /> | <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250827123744179.png" alt="image-20250827123744179" style="zoom:67%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250827123954220.png" alt="image-20250827123954220" style="zoom:50%;" />

点击xdc文件，可以看到只有一句话，压缩bit文件

```verilog
set_property BITSTREAM.GENERAL.COMPRESS true [current_design]
```

2. 编译生成二进制文件

![image-20250827124202197](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250827124202197.png)

> 跳出的对话框都点next就行，等待时间一般是若干分钟，有点久了，哭辽~

3. 编译完成，跳出提示框，点击cancel

![image-20250827124604907](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250827124604907.png)

> 如果点击ok，会有编译后的device分布，暂时还不知道怎么用
>
> <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250827124824979.png" alt="image-20250827124824979" style="zoom:50%;" />

#### 如何导出xsa文件

1. File->export->export hardware,选择include bitstream/binary(include bitstream)

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250905225939174.png" alt="image-20250905225939174" style="zoom:50%;" />

2. 保存到之前建好的hw文件夹中，Next-> Finish

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250905230115497.png" alt="image-20250905230115497" style="zoom:50%;" />

#### SDK创建helloworldAPP，并且编译调试

1. vivado Tools->Launch Vitis IDE

2. 选择工程路径，选择之前创建的soc_sdk路径

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250905230737809.png" alt="image-20250905230737809" style="zoom:50%;" />



3. 单击Create Platform Component

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250905230927212.png" alt="image-20250905230927212" style="zoom:50%;" />

4. 命名为soc_base，点击Next

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250905231136767.png" alt="image-20250905231136767" style="zoom:67%;" />

5. 选择刚才导出的xsa文件，点击Next

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250905231305471.png" alt="image-20250905231305471" style="zoom: 67%;" />

6. 操作系统和处理器选择默认的，点击Next

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250905231500710.png" alt="image-20250905231500710" style="zoom: 67%;" />

7. 按照顺序操作，选择lwip库<font color = red>注意：在vitis2025中，需要手动勾选xiltimer！！图片中没勾！！</font>

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250905232047546.png" alt="image-20250905232047546" style="zoom:50%;" />

8. 对lwip库进行调整

![image-20250905234015085](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250905234015085.png)

9. 在工作流中对工程编译，选中soc_base，点击Build

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250905235334747.png" alt="image-20250905235334747" style="zoom:67%;" />

10. 新建helloworld，因为我们要使用模板，点击New Example

![image-20250906010112233](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250906010112233.png)

11. 选择helloworld后面的+，进入配置界面

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250906012553222.png" alt="image-20250906012553222" style="zoom:67%;" />

12. 选择我们刚刚编译的平台，Next,Next,Finish

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250906012633238.png" alt="image-20250906012633238" style="zoom:67%;" />

13. 建好啦，在source中可以看到主程序，点击flow中的build编译，产生elf文件。

| ![image-20250906012807276](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250906012807276.png) | ![image-20250906012928266](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250906012928266.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

> elf:裸机的SDK口指引程序

14. 点击debug进入debug模式

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250906112905098.png" alt="image-20250906112905098" style="zoom:67%;" />

15. 可以使用putty或者vitis自带的串口工具进行验证

| <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250906114027887.png" alt="image-20250906114027887" style="zoom: 25%;" /> | 自带串口工具用法<br>view->command palette->open serial |
| ------------------------------------------------------------ | ------------------------------------------------------ |



#### SDK创建Iwip_tcp_echo_server测试APP，并且编译调试

> 在实验之前，需要在vivado中启用timer 0,重新综合，生成bit文件，导出xsa文件(注意导出的文件夹不要搞错)，并在vitis里面在平台更新xsa文件

1. 按照顺序点击

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250906120624855.png" alt="image-20250906120624855" style="zoom:67%;" />

2. 重新配置BSP:lwip220，包括启用dhcp\dhcp_does_acd_check,修改pbuf_pool_size=2048，xiltimer ,启动间隔定时器(en_interval_timer)

3. 重新build平台

4. 新建tcp_echo_server 的example
5. 编译build

> 如果出现编译错误，诸如下面的例子，可以尝试：
>
> 1. 重新配置导入BSP，注意，xiltimer一定要包括进ps7_cortexa9_0的裸板程序中
> 2. 重新Build，注意，要先清理build后再重新Build。

???+ 举例
	```markdown
	D:/ZYNQ/LearningDemo/01_start_soc/soc_sdk/soc_base/zynq_fsbl/
	zynq_fsbl_bsp/libsrc/xiltimer/src/xiltimer.c:120:	(.text.startup+0x10): undefined reference to `XilSleepTimer_Init'
	[ERROR] collect2.exe: error: ld returned 1 exit status
	 ninja: build stopped: subcommand failed.
	[ERROR]: Command 'cmake --build . --parallel 22 --verbose' returned non-zero exit status 1.
	[ERROR]: Application Building Failed
	[ERROR] Error in generating platform.Error in generating Baremetal 		Application. FAILED: fsbl.elf [ERROR]: Command 'cmake --build . 
	--parallel 22 --verbose' returned non-zero exit status 1.[ERROR]: 	Application Building Failed
	```





