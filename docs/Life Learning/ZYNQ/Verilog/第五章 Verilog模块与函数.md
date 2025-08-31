# <font color = blue>第五章 Verilog模块与函数</font>

> 参考链接：
>
> 1. [TestBench基本写法与语法详解_testbench怎么写-CSDN博客](https://blog.csdn.net/weixin_39269366/article/details/120742707)
> 2. [6.1 Verilog 函数 | 菜鸟教程](https://www.runoob.com/w3cnote/verilog-function.html)

## <font color = red>5.6 Verilog激励</font>

### 一、TestBench简介

编写 TESTBENCH 的目的是为了对使用硬件描述语言设计的电路进行仿真验证，测试设计电路的功能、性能与设计的预期是否相符。通常，编写测试文件的过程如下：

• 产生模拟激励（波形）；
• 将产生的激励加入到被测试模块中并观察其响应；
• 将输出响应与期望值相比较。

### 二、完整的TestBench的文件结构

通常而言，一个完整的TestBench文件的结构为

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250901000049664.png" alt="image-20250901000049664" style="zoom: 67%;" />

其实 testbench 最基本的结构包括信号声明、激励和模块例化。

根据设计的复杂度，需要引入时钟和复位部分。当然更为复杂的设计，激励部分也会更加复杂。根据自己的验证需求，选择是否需要自校验和停止仿真部分。

当然，复位和时钟产生部分，也可以看做激励，所以它们都可以在一个语句块中实现。也可以拿自校验的结果，作为结束仿真的条件。

实际仿真时，可以根据自己的个人习惯来编写 testbench，这里只是做一份个人的总结。

基本的框架见下：

```verilog
`timescale 仿真单位/仿真精度

module Test_bench();//通常无输入无输出

信号或变量声明定义
逻辑设计中输入对应 reg 型
逻辑设计中输出对应 wire 型
使用 initial 或 always 语句产生激励
例化待测试模块
监控和比较输出响应

endmodule

```



