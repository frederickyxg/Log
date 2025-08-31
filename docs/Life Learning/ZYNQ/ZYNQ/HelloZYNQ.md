# <font color = blue>Vitis Soc 开发入门</font>

## <font color = red>1.1 Hello ZYNQ</font>

### 一、实验目的

1:掌握基于vitis-vivado创建SOC工程
2:掌握基于图形化BlockDesign的设计方法
3:掌握ZYNQIP核的调用
4:掌握ZYNQIP核的参数配置方法
5:掌握生成一个基于ZYNQIP核的最小系统方法
6:导出硬件参数xsa文件
7:使用vitis-sdk创建sdkbase工程
8:使用vitis-sdk创建自带sdkhelloworldAPP工程
9:使用vitis-sdk创建以太网测试程序

### 二、实验步骤

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



#### SDK创建soc_base，并且对以太网LWIP库的修改



#### SDK创建helloworldAPP，并且编译调试



#### SDK创建Iwip_tcp_echo_server测试APP，并且编译调试



#### SDK创建Iwip_tcP_Perf_client测试APP，并且编译调试



