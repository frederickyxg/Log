# <font color = blue>第二章 Verilog基本语法</font>

## <font color = red>2.1 语法基础</font>

### 一、格式与注释

Verilog语言区分大小写；

每个语句必须以分号为结束符，空白符都没有实际的意义，在编译阶段可忽略。

Verilog语言可以使用`//`进行 行注释或者使用`/*  */`进行跨行段落注释。

### 二、标识符与关键字

​	标识符（identifier）可以是任意一组字母、数字、`$`符号和 **_**(下划线)符号的合，但标识符的第一个字符必须是字母或者下划线，不能以数字或者美元符开始。另外，标识符是**区分大小写**的。

​	关键字是 Verilog 中预留的用于定义语言结构的特殊标识符。Verilog 中关键字全部为小写。

例如

```verilog
reg [3:0] counter ; //reg 为关键字， counter 为标识符
input clk; //input 为关键字，clk 为标识符
input CLK; //CLK 与 clk是 2 个不同的标识符
```

### 三、数值表示

**数值种类**

Verilog HDL 有下列四种基本的值来表示硬件电路中的电平逻辑：

- 0：逻辑 0 或 "假"
- 1：逻辑 1 或 "真"
- x 或 X：未知
- z 或 Z：高阻

**x** 意味着信号数值的不确定，即在实际电路里，信号可能为 1，也可能为 0。

**z** 意味着信号处于高阻状态，常见于信号（input, reg）没有驱动时的逻辑结果。例如一个 pad 的 input 呈现高阻状态时，其逻辑值和上下拉的状态有关系。上拉则逻辑值为 1，下拉则为 0 。

**整数数值的表示方法**

​	数字声明时，合法的基数格式有 4 中，包括：十进制('d 或 'D)，十六进制('h 或 'H)，二进制（'b 或 'B），八进制（'o 或 'O）。数值可指明位宽，也可不指明位宽。在数值之间可以通过增加下划线来提高可读性。

```verilog
4'b1011         // 4bit 数值
32'h3022_c0de   // 32bit 的数值
-4'b1011         // 4bit 数值
//实数的表示方法
30.123
6.0
3.0
0.001
//科学计数法
1.2e4         //大小为12000
1_0001e4      //大小为100010000
1E-3          //大小为0.001
```

​	当不指明数据基数的时候，默认10进制，不指明位宽一般默认分配32bit。表示负数的时候，通常在最前面加上负号。

**字符串表示方法**

​	字符串由双引号引起来的字符队列，不能多行书写，编译的时候，编译器将字符串当成一系列的单字节ASCII字符队列。例如，为存储字符串 "www.runoob.com", 需要 14*8bit 的存储单元。

```verilog
reg [0: 14*8-1]       str ;
initial begin
    str = "www.runoob.com";
end
```



## <font color = red>2.2 数据类型</font>

### 一、线网(net type)类型

- **wire** 类型表示硬件单元之间的物理连线，由其连接的器件输出端连续驱动。如果没有驱动元件连接到 wire 型变量，缺省值一般为 "Z"。

```verilog
wire   interrupt ;
wire   flag1, flag2 ;
wire   gnd = 1'b0 ;
```

- **wand**（wire AND）：表示“线与”连接，多个驱动源的输出在物理上以“与”逻辑连接。只有当所有驱动端都为 `1` 时，`wand` 线网才为 `1`；只要有一个为 `0`，结果即为 `0`。未驱动时缺省值为 `Z`。常用于开漏（open-drain）总线建模。

```verilog
wand bus_line;
assign bus_line = (enable1) ? 1'b0 : 1'bz;  // 开漏驱动，低有效
assign bus_line = (enable2) ? 1'b0 : 1'bz;
// 当 enable1 或 enable2 有效时，bus_line 被拉低（0），否则为 Z（高阻）
```

- **wor**（wire OR）：表示“线或”连接，多个驱动源的输出以“或”逻辑连接。只要有一个驱动为 `1`，结果即为 `1`；全为 `0` 或高阻时才为 `0`。适用于“线或”中断总线等场景。

```verilog
wor interrupt_line;
assign interrupt_line = irq1 ? 1'b1 : 1'bz;
assign interrupt_line = irq2 ? 1'b1 : 1'bz;
// 任意一个中断请求有效，interrupt_line 即为 1
```

> 后面的两个线网类型可以用于让一个标识符可以同时被多个激励驱动，但事实上使用的频率会少一点。

### 二、寄存器(reg type)类型

​	寄存器（reg）用来表示存储单元，它会保持数据原有的值，直到被改写。声明举例如下：

```verilog
reg    clk_temp;
reg    shiftreg;
reg    flag1, flag2 ;
```

​	例如在 always 块中，寄存器可能被综合成边沿触发器，在组合逻辑中可能被综合成 wire 型变量。寄存器不需要驱动源，也不一定需要时钟信号。在仿真时，寄存器的值可在任意时刻通过赋值操作进行改写。例如：

```verilog
reg rstn ;
initial begin
    rstn = 1'b0 ;
    #100 ;
    rstn = 1'b1 ;
end
```

> 在上面的例子中，并没有规定在时钟上升沿或者时钟下降沿进行赋值。

### 三、向量类型

​	事实上，向量类型并不是严格意义上的数据类型，而是对上述两个类型的补充，用于将一个数据声明为多位宽的变量，例如：

```verilog
reg [3:0]      counter ;    //声明4bit位宽的寄存器counter
wire [32-1:0]  gpio_data;   //声明32bit位宽的线型变量gpio_data
wire [8:2]     addr ;       //声明7bit位宽的线型变量addr，位宽范围为8:2
reg [0:31]     data ;       //声明32bit位宽的寄存器变量data, 最高有效位为0
```

​	对于向量，可以指定某一位或者若干相邻位，**作为其他逻辑使用**。例如：

```verilog
reg [0:31]     data ;       //声明32bit位宽的寄存器变量data, 最高有效位为0
wire [9:0]     data_low = data[0:9] ;
addr_temp[3:2] = addr[8:7] + 1'b1 ;
```

​	Verilog支持可变的向量域选择。例如：

```verilog
reg [31:0]     data1 ;
reg [7:0]      byte1 [3:0];
integer j ;
always@* begin
    for (j=0; j<=3;j=j+1) begin
        byte1[j] = data1[(j+1)*8-1 : j*8]; 
        //把data1[7:0]…data1[31:24]依次赋值给byte1[0][7:0]…byte[3][7:0]
    end
end
```

> 数据类型 [n:0] data[m:0];是将数据声明为n位宽的m大小的一维数组。

​	Verilog还支持指定bit位后固定位宽的向量域选择访问。

```verilog
//下面 2 种赋值是等效的
A = data1[31-: 8] ;
A = data1[31:24] ;

//下面 2 种赋值是等效的
B = data1[0+ : 8] ;
B = data1[0:7] ;
```

对信号**重新进行组合**，形成新的变量或者给变量赋值的时候，可以使用大括号：

```verilog
wire [31:0]    temp1, temp2 ;
assign temp1 = {byte1[0][7:0], data1[31:8]};  //数据拼接
assign temp2 = {32{1'b0}};  //赋值32位的数值0
```

### 四、整数、实数和时间寄存器变量

> 事实上，整数、实数和时间等数据类型也属于寄存器类型。

**整数**

​	整数类型用关键字 integer 来声明。声明时不用指明位宽，位宽和编译器有关，一般为32 bit。reg 型变量为无符号数，而 integer 型变量为有符号数。例如：

```verilog
reg [31:0]      data1 ;
reg [7:0]       byte1 [3:0]; 
integer j ;  //整型变量，用来辅助生成数字电路
always@* begin
    for (j=0; j<=3;j=j+1) begin
        byte1[j] = data1[(j+1)*8-1 : j*8]; 
        //把data1[7:0]…data1[31:24]依次赋值给byte1[0][7:0]…byte[3][7:0]
        end
end
```

​	此例中，integer 信号 j 作为辅助信号，将 data1 的数据依次赋值给数组 byte1。综合后**实际电路里并没有 j 这个信号**，j 只是辅助生成相应的硬件电路。

**实数**

​	实数用关键字 real 来声明，可用十进制或科学计数法来表示。实数声明不能带有范围，默认值为 0。如果将一个实数赋值给一个整数，则只有**实数的整数部分会赋值给整数**。例如：

```verilog
real        data1 ;
integer     temp ;
initial begin
    data1 = 2e3 ;
    data1 = 3.75 ;
end
 
initial begin
    temp = data1 ; //temp 值的大小为3
end
```

**时间**

​	Verilog 使用特殊的时间寄存器 time 型变量，对仿真时间进行保存。其宽度一般为 64 bit，通过调用系统函数 $time 获取当前仿真时间。例如：

```verilog
time       current_time ;
initial begin
       #100 ;
       current_time = $time ; //current_time 的大小为 100
end
```

### 五、数组

​	在 Verilog 中允许声明 reg, wire, integer, time, real 及其向量类型的数组。

​	数组维数没有限制。线网数组也可以用于连接实例模块的端口。数组中的每个元素都可以作为一个标量或者向量，以同样的方式来使用，形如：**<数组名>[<下标>]**。对于多维数组来讲，用户需要说明其每一维的索引。例如：

```verilog
integer          flag [7:0] ; //8个整数组成的数组
reg  [3:0]       counter [3:0] ; //由4个4bit计数器组成的数组
wire [7:0]       addr_bus [3:0] ; //由4个8bit wire型变量组成的数组
wire             data_bit[7:0][5:0] ; //声明1bit wire型变量的二维数组
reg [31:0]       data_4d[11:0][3:0][3:0][255:0] ; //声明4维的32bit数据变量数组
```

​	下面是对数组元素的赋值操作：

```verilog
flag [1]   = 32'd0 ; //将flag数组中第二个元素赋值为32bit的0值
counter[3] = 4'hF ;  //将数组counter中第4个元素的值赋值为4bit 十六进制数F，等效于counter[3][3:0] = 4'hF，即可省略宽度; 
assign addr_bus[0]        = 8'b0 ; //将数组addr_bus中第一个元素的值赋值为0
assign data_bit[0][1]     = 1'b1;  //将数组data_bit的第1行第2列的元素赋值为1，这里不能省略第二个访问标号，即 assign data_bit[0] = 1'b1; 是非法的。
data_4d[0][0][0][0][15:0] = 15'd3 ;  //将数组data_4d中标号为[0][0][0][0]的寄存器单元的15~0bit赋值为3
```

虽然数组与向量的访问方式在一定程度上类似，但不要将向量和数组混淆。向量是一个单独的元件，位宽为 n；数组由多个元件组成，其中每个元件的位宽为 n 或 1。它们在结构的定义上就有所区别。

### 六、参数

​	参数用来表示常量，用关键字 parameter 声明，只能赋值一次。例如：

```verilog
parameter      data_width = 10'd32 ;
parameter      i=1, j=2, k=3 ;
parameter      mem_size = data_width * 10 ;
```

​	但是，通过实例化的方式，可以更改参数在模块中的值。此部分以后会介绍[实例化赋值参数hock1]。

​	局部参数用 localparam 来声明，其作用和用法与 parameter 相同，区别在于它的值不能被改变。所以当参数只在本模块中调用时，可用 localparam 来说明。

### 七、字符串

​	字符串保存在 reg 类型的变量中，每个字符占用一个字节（8bit）。因此寄存器变量的宽度应该足够大，以保证不会溢出。

​	字符串不能多行书写，即字符串中不能包含回车符。如果寄存器变量的宽度大于字符串的大小，则使用 0 来填充左边的空余位；如果寄存器变量的宽度小于字符串大小，则会截去字符串左边多余的数据。例如，为存储字符串 "run.runoob.com", 需要 14*8bit 的存储单元：

```verilog
reg [0: 14*8-1]       str ;
initial begin
    str = "run.runoob.com"; 
end
```

有一些特殊字符在显示字符串中有特殊意义，例如换行符，制表符等。如果需要在字符串中显示这些特殊的字符，则需要在前面加前缀转义字符 `\` 。例如下表所示：

| 转义字符 | 显示字符            |
| -------- | ------------------- |
| \n       | 换行                |
| \t       | 制表符              |
| %%       | %                   |
| \        | \                   |
| `\"`     | ''                  |
| \ooo     | 1到3个8进制数字字符 |

> 其实，在 SystemVerilog（主要用于 Verilog 仿真的编程语言）语言中，已经可以直接用关键字 string 来表示字符串变量类型，这为 Verilog 的仿真带来了极大的便利。有兴趣的学者可以简单学习下 SystemVerilog。

## <font color = red>2.3 Verilog表达式</font>

### 一、表达式与操作数



hocks:

1. [实例化赋值参数hock2]





















