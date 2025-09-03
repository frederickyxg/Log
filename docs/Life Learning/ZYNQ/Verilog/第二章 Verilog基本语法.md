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

!!! note
	后面的两个线网类型可以用于让一个标识符可以同时被多个激励驱动，但事实上使用的频率会少一点。

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

???+ note
	此例中，integer 信号 j 作为辅助信号，将 data1 的数据依次赋值给数组 byte1。综合后**实际电路里并没有 j 这个信号**，j 只是辅助生成相应的硬件电路。

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

### 一、操作数、操作符与表达式

**操作数**

​	操作数可以是任意的数据类型，只是有些特定的语法结构要求使用特定类型的操作数。

```verilog
module test;

//实数
real a, b, c;
c = a + b ;

//寄存器
reg  [3:0]       cprmu_1, cprmu_2 ;
always @(posedge clk) begin
        cprmu_2 = cprmu_1 ^ cprmu_2 ;
end
         
//函数
reg  flag1 ;
flag = calculate_result(A, B);
 
//非法操作数
reg [3:0]         res;
wire [3:0]        temp;
always@ （*）begin
    res    = cprmu_2 – cprmu_1 ;
    //temp = cprmu_2 – cprmu_1 ; //不合法，always块里赋值对象不能是wire型
end

endmodule
```



**操作符**

Verilog 中提供了大约 9 种操作符，分别是算术、关系、等价、逻辑、按位、归约、移位、拼接、条件操作符。

大部分操作符与 C 语言中类似。同类型操作符之间，除条件操作符从右往左关联，其余操作符都是自左向右关联。圆括号内表达式优先执行。例如下面每组的 2 种写法都是等价的。

```verilog
//自右向左关联，两种写法等价
A+B-C ;
(A+B）-C ;

//自右向左关联，两种写法等价，结果为 B、D 或 F
A ? B : C ? D : F ;
A ? B : (C ? D : F) ;

//自右向左关联，两种写法不等价
(A ? B : C) ? D : F ;  //结果 D 或 F
A ? B : C ? D : F ; //结果为 B、D 或 F

```

不同操作符之间，优先级是不同的。下表列出了操作符优先级从高至低的排列顺序。当没有圆括号时，Verilog 会根据操作符优先级对表达式进行计算。为了避免由操作符优先级导致的计算混乱，在不确定优先级时，建议用圆括号将表达式区分开来。

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250903143129945.png" alt="image-20250903143129945" style="zoom:67%;" />

???+ 关于操作符的一些说明
	1.如果操作数的某一位为X，则计算结果会全部出现X，例如`b = 4‘b100x; c = a + b;//结果为c=4’bxxxx`<br>
	2.对于加法，寄存器位宽至少为较宽加数+1，无符号乘法时，结果变量位宽应该为2个操作数位宽之和，否则可能出现高位截断丢失的情况。<br>
	3.当`±`用于表征数值的符号的时候，操作符的优先级最高。<br>	4.负数表示时，可以直接在十进制数字前面增加一个减号 **-**，也可以指定位宽。因为负数使用二进制补码来表示，不指定位宽来表示负数，编译器在转换时，会自动分配位宽，从而导致意想不到的结果。例如：`mula = -4'd4 ;mulb = 2 ;res = mula * mulb ;      //计算结果为res=-6'd8, 即res=6'h38，正常res = mula * (-'d4) ;    //(4的32次幂-4) * 2, 结果异常`<br>
	5.对于等价操作符，逻辑相等/不等操作符不能比较 x 或 z，当操作数包含一个 x 或 z，则结果为不确定值。全等比较时，如果按位比较有相同的 x 或 z，返回结果也可以为 1，即全等比较可比较 x 或 z。所以，全等比较的结果一定不包含 x。举例如下：`A = 4 ;B = 8'h04 ;C = 4'bxxxx ;D = 4'hx ;A == B        //为真A == (B + 1)  //为假A == C        //为X，不确定A === C       //为假，返回值为0C === D       //为真，返回值为1`<br>
	6.归约操作符包括：归约与（&），归约与非（~&），归约或（|），归约或非（~|），归约异或（^），归约同或（~^）。归约操作符只有一个操作数，它对这个向量操作数逐位进行操作，最终产生一个 1bit 结果。逻辑操作符、按位操作符和归约操作符都使用相同的符号表示，因此有时候容易混淆。区分这些操作符的关键是分清操作数的数目，和计算结果的规则。<br>
	7.移位操作符包括左移（<<），右移（>>），算术左移（<<<），算术右移（>>>）。移位操作符是双目操作符，两个操作数分别表示要进行移位的向量信号（操作符左侧）与移动的位数（操作符右侧）。算术左移和逻辑左移时，右边低位会补 0。逻辑右移时，左边高位会补 0；而算术右移时，左边高位会补充符号位，以保证数据缩小后值的正确性。`A = 4'b1100 ;B = 4'b0010 ;A = A >> 2 ;       //结果为 4'b0011A = A << 1;         //结果为 4'b1000A = A <<< 1 ;       //结果为 4'b1000C = B + (A>>>2);    //结果为 2 + (-4/4) = 1, 4'b0001`<br>
	8.条件操作符`condition_expression ? true_expression : false_expression`可以通过嵌套，实现多次选择的逻辑。

**表达式**

表达式由操作符和操作数构成，其目的是根据操作符的意义得到一个计算结果。表达式可以在出现数值的任何地方使用。

```verilog
a^b ;          //a与b进行异或操作
address[9:0] + 10'b1 ;  //地址累加
flag1 && flag2 ;  //逻辑与操作
```

### 二、编译指令

以反引号`开始的某些标识符是Verilog系统的编译指令。下面给出8种编译指令，其中前四种使用的频率较高。

**````define,`undef```**

类似C语言中的`#define`，用于文本替换。一旦被编译，则在整个编译过程中都会有效(可以跨文件生效)。而``undef`用于取消定义。例如：

```verilog
`define    DATA_DW     32
`define    S     $stop;   
//用`S来代替系统函数$stop; (包括分号)
`define    WORD_DEF   reg [31:0]       
//可以用`WORD_DEF来声明32bit寄存器变量
`undef DATA_DW

```

> 条件定义：
>
> 例如下面的例子中，如果定义了 MCU51，则使用第一种参数说明；如果没有定义 MCU、定义了 WINDOW，则使用第二种参数说明；如果 2 个都没有定义，则使用第三种参数说明。
>
> ```verilog
> `ifdef       MCU51
>     parameter DATA_DW = 8   ;
> `elsif       WINDOW
>     parameter DATA_DW = 64  ;
> `else
>     parameter DATA_DW = 32  ;
> `endif
> ```
>
> 或者使用``ifndef`来表示“如果没有相关的宏定义，那么……”

**``include`**

​	在编译的时候可以将一个Verilog文件内嵌到另一个Verilog文件中，作用类似于C语言中的`#include`结构，通常用于将全局的或者公用的头文件包含在设计文件里。文件可以使用相对路径或者绝对路径。

```verilog
`include         "../../param.v"
`include         "header.v"
```

**``timescale`**

​	在Verilog模型中，时延有具体的单位时间表述，并用``timescale`编译指令将时间单位与实际时间相关联。该指令用于定义时延、仿真的单位和精度，格式为：

```verilog
`timescale      time_unit / time_precision
```

​	time_unit 表示时间单位，time_precision 表示时间精度，它们均是由数字以及单位 s（秒），ms（毫秒），us（微妙），ns（纳秒），ps（皮秒）和 fs（飞秒）组成。时间精度可以和时间单位一样，但是时间精度大小不能超过时间单位大小，例如下面例子中，输出端 Z 会延迟 5.2ns (~~原网站写的是5.21ns，然而按照精度为100ps，应该是延迟5.2ns后输出结果~~)输出 A&B 的结果。

```verilog
`timescale 1ns/100ps    //时间单位为1ns，精度为100ps，合法
//`timescale 100ps/1ns  //不合法
module AndFunc(Z, A, B);
    output Z;
    input A, B ;
    assign #5.207 Z = A & B;
endmodule
```

​	在编译过程中，timescale指令会影响后面所有模块中的时延值，直至遇到另一个 timescale 指令或 resetall指令。

​	由于在 Verilog 中没有默认的 timescale，如果没有指定 timescale，Verilog 模块就有会继承前面编译模块的 timescale 参数。有可能导致设计出错。

!!! important "延时时间的计算与仿真器的执行精度"
	**延迟时间的计算**<br>由编译器在读代码的时候完成的，完全本地化，只由在它之前定义的``timescale`指令决定，计算过程独立，不会影响到另一个模块延迟的计算<br><font color = red>简单说：计算延迟的时候，各模块“各管各的”，完全无视其他模块的设置</font><br>**仿真器的执行精度**<br>在仿真器进行运行的时候，会先扫描所有用到timescale的指令，并找到最小精度，这个最小值就是仿真的最小步长<br><font color = red>简单说：在仿真器运行的时候，使用最小的步长作为全局的精度</font>

???+ note
    ```verilog
    // ===============================================================
    // 模块 1: 一个慢速的与门 (AND gate)
    // timescale 设置为 10ns / 1ns
    // ===============================================================
    `timescale 10ns / 1ns

    module Slow_AND (
        output out,
        input a, b
    );
        // 延迟 #1.55 的计算:
        // 1. 原始时间: 1.55 * 10ns = 15.5ns
        // 2. 根据精度 1ns 舍入 -> 16ns
        assign #1.55 out = a & b;
    endmodule


    // ===============================================================
    // 模块 2: 一个快速的或门 (OR gate)
    // timescale 设置为 1ns / 100ps
    // ===============================================================
    `timescale 1ns / 100ps
    
    module Fast_OR (
        output out,
        input a, b
    );
        // 延迟 #5.27 的计算:
        // 1. 原始时间: 5.27 * 1ns = 5.27ns
        // 2. 根据精度 100ps (0.1ns) 舍入 -> 5.3ns
        assign #5.27 out = a | b;
    endmodule


    // ===============================================================
    // 测试模块
    // 实例化了上面两个模块
    // ===============================================================
    module test;
        reg in_a, in_b;
        wire and_out, or_out;
    
        // 实例化慢速与门
        Slow_AND u_and (and_out, in_a, in_b);
    
        // 实例化快速或门
        Fast_OR  u_or  (or_out, in_a, in_b);
    
        // 简单激励
        initial begin
            in_a = 0; in_b = 1;
            #100; // 运行一段时间后停止
        end
    endmodule
    ```



**``default_nettype`**

该命令用于将隐式的线网变量指定为线网类型，即没有声明的连线定义为线网类型

```verilog
`default_nettype wand //定义为线与类型
`default_nettype none //该实例定义后，将不在自动产生wire类型变量

//Z1 无定义就使用，系统默认Z1为wire型变量，有 Warning 无 Error
module test_and(
        input      A,
        input      B,
        output     Z);
    assign Z1 = A & B ;  
endmodule

//Z1无定义就使用，由于编译指令的存在，系统会报Error，从而检查出书写错误
`default_nettype none
module test_and(
        input      A,
        input      B,
        output     Z);
    assign Z1 = A & B ;  
endmodule
```

**``resetall`**

该编译器命令将所有的编译指令重新设置为缺省值。可以避免类似timescale的错误继承。

**````celldefine,`endcelldefine```**

这两个程序指令用于将模块标记为单元模块，他们包含模块的定义。例如一些与、或、非门，一些 PLL 单元，PAD 模型，以及一些 Analog IP 等。

```verilog
`celldefine
module (
    input      clk,
    input      rst,
    output     clk_pll,
    output     flag);
        ……
endmodule
`endcelldefine
```

**````unconnected_drive, `nounconnected_drive```**

在模块实例化中，出现在这两个编译指令间的任何未连接的输入端口，为正偏电路状态或者为反偏电路状态。






















hocks:

1. [实例化赋值参数hock2]





















