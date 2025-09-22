# <font color = blue>第五章 Verilog DEMO设计</font>

## <font color = red >5.1 FPGA流水灯实验</font>

### 一、实验目的

利用Xilinx的zynq的PL端实现FPGA的流水灯实验。

1. 熟悉vivado软件的使用，包括创建FPGA工程、编写Verilog代码、添加管脚约束等等

### 二、实验原理

#### 1.发光二极管

​	发光二极管， 简称为 LED， 是一种常用的发光器件， 通过电子与空穴复合释放能量发光， 它在照明领域应用广泛。 相比其它灯光源，LED效率高、 寿命较长、 功耗小、 低碳环保、 材料不易受到环境影响而相对稳定。发光二极管与普通二极管一样具有单向导电性， 在LED 当中只有正极接入正极， 负极接入负极它才会有电流流通进去。 电流从 LED 阳极流向阴极时， 半导体晶体就发出从紫外到红外不同颜色的光线， 光的强弱与电流有关。常用的是发红光、 绿光或黄光的二极管。 发光二极管的反向击穿电压大于 5伏， 使用时必须串联限流电阻以控制通过二极管的电流。

#### 2.硬件电路分析

​	本实验使用的米联客F3P_CZ02_7020共五路LED,其中一路为PS端的LED，四路为PL端的LED。当FPGA管脚输出位高电平的时候，LED点亮；输出为低电平的时候，LED灯熄灭。

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913220516414.png" alt="image-20250913220516414" style="zoom:50%;" />



#### 3.程序设计

​	本次实验目的为 4 个 LED 实现流水灯的效果，LED 变换间隔时间需要基于系统时钟来计数， 实现间隔时间的计时， 除此之外， 添加系统复位使程序恢复至默认状态，输出结果由4个LED灯亮灭显示。 命名模块名为 run_led，  此模块需要两个输入的端口， 分别为系统时钟和系统复位，输出为4位的LED端口。

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913220924573.png" alt="image-20250913220924573" style="zoom: 67%;" />

#### 4.工程管理

​	在对应的FPGA工程路径下创建uisrc路径，并且创建以下文件夹

| 文件夹名称 | 作用                                      |
| ---------- | ----------------------------------------- |
| 01_rtl     | 用于存放用户编写的rtl代码                 |
| 02_sim     | 用于存放仿真文件或者工程                  |
| 03_ip      | 用于存放用到的ip文件                      |
| 04_pin     | 用于存放FPGA的pin脚约束文件和时序约束文件 |
| 05_boot    | 用于放编译好的bit或者bin文件              |
| 06_doc     | 用于放一些相关文档或者使用说明            |

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913221329922.png" alt="image-20250913221329922" style="zoom:67%;" />

### 三、实验步骤

1. 点击新建工程，重命名，并将工程路径设置在之前建好的文件夹下，点击next

![image-20250913233557371](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913233557371.png)

2. RTL project，点击next

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913221851895.png" alt="image-20250913221851895" style="zoom:50%;" />

3. 选择自己的设备，我的是xq7z020cl400-2l，点击Next和finish

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913222005608.png" alt="image-20250913222005608" style="zoom: 67%;" />

4. 添加代码文件

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913222227968.png" alt="image-20250913222227968" style="zoom:67%;" />

![image-20250913222841325](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913222841325.png)

5. 点击ok后，可以看到Design Sourse中已经有了.v文件，这个文件是我们可以编写Verilog程序的文件。

![image-20250913223845953](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913223845953.png)

接下来，就可以在vivado中编写代码啦，为了方便起见和统一起见，我使用vscode作为我的编译器。

6. 编写代码，具体代码及代码思路件第四块
7. 添加管脚约束文件

- 新建XDC PIN脚约束文件，点击Add Sources 然后选择Add Or create constraints，点击Next

![image-20250913232614186](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913232614186.png)

- 点击Create File，新建一个.xdc文件，将文件放到pin文件夹下，以更好地管理

![image-20250913232740003](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913232740003.png)

8. 综合并添加管脚约束

- 运行RTL分析，点击Run Linter
- 点击SYNTHESIS，点击Run Synthesis

- 点击Open Elaborated Design中的Schematic

![image-20250913235124233](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913235124233.png)

- 可以得到原理图

![image-20250913235209987](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913235209987.png)

- 点击6 I/O Ports，然后可以根据开发板使用手册，分配管脚

![image-20250913235542633](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913235542633.png)

在这里，我将reset键分配给KEY1，led分配等等见下表，注意，要将IO口的标准改为CMOS的3.3V。

![image-20250913235701441](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913235701441.png)

- 保存更改后的管脚选择<font color = red>在这里，我选择直接更新之前的xdc文件</font>
- 可以在.xdc文件中增加以下代码，以压缩bit文件大小

```verilog
set_property BITSTREAM.GENERAL.COMPRESS true [current_design]
```

8. RTL仿真

​	在这一步中，通常需要编写testbench，以对使用的硬件描述语言设计的电路进行仿真验证，验证设计的电路的功能、部分性能能否与预期的目标相符合。一般编写的测试文件应该包括以下内容(也可以参考第四章的相关部分)：

```verilog
`timescale //仿真单位/仿真精度
module Test_bench(); //通常 testbench 没有输入与输出端口
信号或变量声明定义
逻辑设计中输入对应 reg 型
逻辑设计中输出对应 wire 型
使用 initial 或 always 语句产生激励 语句产生激励
例化设计模块
endmodule
```

- 添加仿真测试源码

点击Add Source键，选择第三个，并注意文件保存路径。与添加源码大同小异，这里省略，最后可以在sim文件夹中找到生成的.v文件。

![image-20250914000722217](https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250914000722217.png)



### 四、实验代码

FPGA的工作基本都需要时钟，可以设计一个always块实现计数(或者说是计时)，每当计数器计时到1s后，切换一次LED的状态。

例如LED流水灯的间隔时间设置为1s， 系统时钟I_sysclk的晶振频率为 100Mhz， 时钟周期 = 1/频率(hz) = 10ns，计数器计时到 1s 需要 1s/10ns = 100 000 000 个时钟周期， 由于计数器从 0 开始计时， 所以计数器 t_cnt 最大计数为99 999 999。 由计算器可以看到计数 t_cnt 对应的二进制共需要 28 位的位宽， 因此 32'd99_999_999 的位宽足够了。  

除此之外， 系统复位在 FPGA 系统中必不可少， 当程序出现跑飞等异常情况时， 可以使程序恢复至默认状态。  

下面是verilog主代码

```verilog
//run_led.v
`timescale 1ns / 1ps

module run_led
    (
    input I_sysclk,
    input I_rst,
    output [3:0] O_led
    );
    reg [3:0]led_r;
    reg [32:0]t_cnt;

    parameter T_INR_CNT_SET = 32'd99_999_999;

    always @(posedge I_sysclk or negedge I_rst) begin
        if(I_rst==0)begin
            t_cnt<=0;
        end else if (t_cnt == T_INR_CNT_SET) begin
            t_cnt<=0;
        end else begin
            t_cnt<=t_cnt+1;
        end
    end


    always @(posedge I_sysclk or negedge I_rst) begin
        if (I_rst==0) begin
            led_r<=4'b0111;    
        end else if(t_cnt==0)begin
            led_r<={led_r[0],led_r[3:1]};
        end
    end    


endmodule

```

下面是管脚约束文件

```python
# fpga_pin.xdc
#系统时钟周期约束
create_clock -period 10.000 -name I_sysclk [get_ports I_sysclk]
#时钟管脚物理，物理约束为具体的芯片管脚号约束
set_property PACKAGE_PIN H16 [get_ports I_sysclk]
#电平属性为LVCMOS33,代表了3V3的IO BANK,电平约束不会改版实际的IO BANK电平，如果电平约束和实际的BANK电平不匹配，可能会导致工作异常
set_property IOSTANDARD LVCMOS33 [get_ports I_sysclk]
#复位管脚约束，这里绑定到按键输入
set_property PACKAGE_PIN K14 [get_ports I_rstn]
#绑定led输出管脚到FPGA IO上
set_property PACKAGE_PIN M20 [get_ports {O_led[3]}]
set_property PACKAGE_PIN J15 [get_ports {O_led[2]}]
set_property PACKAGE_PIN R19 [get_ports {O_led[1]}]
set_property PACKAGE_PIN T19 [get_ports {O_led[0]}]
#复位输入的电平约束为3V3的IO BANK电平
set_property IOSTANDARD LVCMOS33 [get_ports I_rstn]
set_property IOSTANDARD LVCMOS33 [get_ports {O_led[*]}]
#对bit大小进行压缩，可以节省程序存储空间
set_property CFGBVS VCCO [current_design] 
set_property CONFIG_VOLTAGE 3.3 [current_design] 
set_property BITSTREAM.GENERAL.COMPRESS true [current_design]

```









