# Python学习

## Python3基本语法

-----

### 编码

默认情况下，Python3源码文件以UTF-8编码，所有字符串都是unicode字符串。当然，也可以为源码文件制定不同的编码：

```python
# -*- coding:cp-1252 -*-
```

---

### 标识符

- 标识符必须以字母或者下划线开头
- 标识符(变量)在使用前必须先定义
- 标识符的其他部分由字母、数字和下划线组成
- 标识符对大小写敏感
- 标识符对长度无硬性限制
- 不能使用保留关键字，如if\for\class等

> 让人惊讶的是，python可能是第一个主流编程语言支持中文变量名的(至少据我所知是这样的)
>
> <center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104165728834.png" alt="image-20251104165728834" style="zoom:50%;" /></center>

---

### 保留字

```python
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

---

### 注释

Python中的单行注释以`#`开头，多行注释可以用多个`#`或者使用` ''' `或`"""`将注释段落包围起来，下面是例子

```python
#!/usr/bin/python3
# 第一个注释
# 第二个注释
'''
第三注释
第四注释
'''
"""
第五注释
第六注释
"""
print ("Hello, Python!")
```

注意，Python3不支持嵌套注释，例如下面你的示例是不合法的，但是单行注释是可以嵌套在多行注释里面的。

```python
'''
这是外部的多行注释
可以包含一些描述性的内容

    '''
    这是尝试嵌套的多行注释
    会导致语法错误
    '''
'''
```



---

### 行与缩进

python最具特色就是使用缩进来表示代码块，不需要使用大括号`{}`

缩进的空格数是可以改变的，但是同一个代码块的语句必须由相同的空格数。下面是实例：

```python
if True:
    print ("True")
else:
    print ("False")
```

下面的代码最后一行语句缩进数的空格数不一致，会导致错误：

```python
if True:
    print ("Answer")
    print ("True")
else:
    print ("Answer")
  print ("False")    # 缩进不一致，会导致运行错误
```

另外，python通常是一行写完一句语句，如果语句很长，可以使用反斜杠`\`来实现多行语句，例如：

```python
total = item_one + \
        item_two + \
        item_three
```

而在`[],{},()`等中的多行语句，不需要使用反斜杠`\`，例如

```python
total = ['item_one', 'item_two', 'item_three',
        'item_four', 'item_five']
```

**空行**

函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用一行空行分隔，以突出函数入口的开始。

空行与代码缩进不同，空行并不是 Python 语法的一部分。书写时不插入空行，Python 解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。

**记住：**空行也是程序代码的一部分。

**同一行显示多条语句**

python支持在同一行中使用多条语句，语句之间使用分号分隔。

---

### 数字类型

python中有四种数字类型：整数、布尔型、浮点数和复数

| 数字类型      | 说明                                                         | 例子                              |
| ------------- | ------------------------------------------------------------ | --------------------------------- |
| int(整数)     | 只有一种整数类型int，表示为长整数型，没有python2中的Long类型 | 1 2 3                             |
| bool(布尔)    | 只有两种类型                                                 | True False                        |
| float(浮点数) | 小数，可以使用科学计数法表示                                 | 1.23 3e-2($3\times 10^{-2} 0.03$) |
| complex(复数) | 由实部和虚部组成，形式为$a+bj$                               | 1.1+3.2j                          |

---

### 字符串(String)

- python中单引号和双引号的使用完全相同
- 使用三引号可以指定一个多行字符串
- 转义符为`\`，如果在字符前使用`r`可以让字符串不进行转义，如**r"this is a line with \n"** 则 **\n** 会显示，并不是换行。
- 按字面意义级联的字符串，如 **"this " "is " "string"** 会被自动转换为 **this is string**。
- 字符串可以用`+`运算符连接在一起，用`*`运算符表示重复。
- Python中的字符串由两种索引方式，从左往右以`0`开始，从右往左以`-1`开始
- Python中的字符串不能改变
- Python没有单独的字符类型，一个字符就是长度为1的字符串
- 字符串切片`str[start:end]`，其中start(包含)是切片开始的所以，end(不包含)是切片结束的索引
- 字符串的切片可以加上步长参数step,语法格式如下：`srt[start:end:step]`

???example
    ```python
    #!/usr/bin/python3

    str='123456789'
    
    print(str)                 # 输出字符串
    print(str[0:-1])           # 输出第一个到倒数第二个的所有字符
    print(str[0])              # 输出字符串第一个字符
    print(str[2:5])            # 输出从第三个开始到第六个的字符（不包含）
    print(str[2:])             # 输出从第三个开始后的所有字符
    print(str[1:5:2])          # 输出从第二个开始到第五个且每隔一个的字符（步长为2）
    print(str * 2)             # 输出字符串两次
    print(str + '你好')         # 连接字符串
    
    print('------------------------------')
    
    print('hello\nrunoob')      # 使用反斜杠(\)+n转义特殊字符
    print(r'hello\nrunoob')     # 在字符串前面添加一个 r，表示原始字符串，不会发生转义
    ```
    <center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104173847720.png" alt="image-20251104173847720" style="zoom:67%;" /></center>






---

### 等待用户输入

执行下面你的程序在按回车键后会等待用户输入

```python
#!/usr/bin/python3
 
input("\n\n按下 enter 键后退出。")
```

以上代码中 ，**\n\n** 在结果输出前会输出两个新的空行。一旦用户按下 **enter** 键时，程序将退出。

---

### 多个语句构成代码组

缩进相同的一组语句构成一个代码块，成为代码组

像if,while,def和class这样的符合语句，首行以关键字开始，以冒号结束，改行之后的一行或者多行代码构成代码组。

将首行及后面的代码组称为一个子句，如下

```python
if expression:
	suite
elif expression:
	suite
else:
	suite
```

---

### print输出

print输出默认是换行的，如果不需要实现换行需要再变量末尾加上`end=""`

???example
	<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104174717660.png" alt="image-20251104174717660" /></center>



---

### import与from...import

在 python 用 **import** 或者 **from...import** 来导入相应的模块。

将整个模块(somemodule)导入，格式为： **import somemodule**

从某个模块中导入某个函数,格式为： **from somemodule import somefunction**

从某个模块中导入多个函数,格式为： **from somemodule import firstfunc, secondfunc, thirdfunc**

将某个模块中的全部函数导入，格式为： **from somemodule import **

???example
    ```python
    import sys
    print('================Python import mode==========================')
    print ('命令行参数为:')
    for i in sys.argv:
        print (i)
    print ('\n python 路径为',sys.path)
    ```
    <center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104175059259.png" alt="image-20251104175059259" style="zoom:80%;" /></center>

---

### 命令行参数

很多程序可以执行一些操作来查看一些基本信息，Python可以使用-h参数查看各参数帮助信息：

```python
$ python -h
usage: python [option] ... [-c cmd | -m mod | file | -] [arg] ...
Options and arguments (and corresponding environment variables):
-c cmd : program passed in as string (terminates option list)
-d     : debug output from parser (also PYTHONDEBUG=x)
-E     : ignore environment variables (such as PYTHONPATH)
-h     : print this help message and exit
[ etc. ]
```

---

## Python3基本数据类型

Python 中的变量不需要声明。**每个变量在使用前都必须赋值**，变量赋值以后该变量才会被创建。

在 Python 中，变量就是变量，它没有类型，我们所说的"类型"是变量所指的内存中对象的类型。

等号（=）用来给变量赋值。

等号（=）运算符左边是一个变量名,等号（=）运算符右边是存储在变量中的值。

---

### 多个变量赋值

python允许同时为多个变量赋值。例如

```python
a = b = c = 1
```

或者为多个对象指定多个变量

```python
a,b,c = 1,2,"runoob"
```

可以通过`type()`函数查看变量的类型

???example
	<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251105200357877.png" alt="image-20251105200357877" /></center>



---

### 标准数据类型

Python3中常见的数据类型为

- Number（数字）
- String（字符串）
- bool（布尔类型）
- List（列表）
- Tuple（元组）
- Set（集合）
- Dictionary（字典）

Python3 的六个标准数据类型中：

- **不可变数据（3 个）：**Number（数字）、String（字符串）、Tuple（元组）；
- **可变数据（3 个）：**List（列表）、Dictionary（字典）、Set（集合）。

此外还有一些高级的数据类型，如: 字节数组类型(bytes)。

---

### Number数字

Python3 支持 **int、float、bool、complex（复数）**

除了使用`type()`函数以外，还可以使用`isinstance([变量],[类型])`，该函数会返回输入的变量是否为输入的类型。两者之间的差别在于`isinstance()`会认为子类时一种父类类型。

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251105201039036.png" alt="image-20251105201039036" style="zoom:50%;" /></center>

上面的代码是先声明类A，再声明一个子类B，即B继承自A，也就是说，B是A的一种类型。

??? example
	在Python3中，bool是int的子类，True和False可以和数字相加如果使用`==`，则会返回True，可以通过`is`来判断是否是bool类型。例如

    ```python
    >>> issubclass(bool, int) 
    True
    >>> True==1
    True
    >>> False==0
    True
    >>> True+1
    2
    >>> False+1
    1
    >>> 1 is True
    <python-input-12>:1: SyntaxWarning: "is" with 'int' literal. Did you mean "=="?
      1 is True
    False
    >>> 0 is False
    <python-input-13>:1: SyntaxWarning: "is" with 'int' literal. Did you mean "=="?
      0 is False
    False
    ```
​    **什么会出现 SyntaxWarning？**<br>Python 检测到你在用 is 比较一个字面量整数（如 1）和 True，这通常是代码错误（因为 is 比较的是身份，而不是值）。Python 建议你使用 == 来比较值是否相等，除非你确实想检查是否是同一个对象。在 Python2 中是没有布尔型的，它用数字 0 表示 False，用 1 表示 True。

---

#### 数值运算

```python
>>> 5 + 4  # 加法
9
>>> 4.3 - 2 # 减法
2.3
>>> 3 * 7  # 乘法
21
>>> 2 / 4  # 除法，得到一个浮点数
0.5
>>> 2 // 4 # 除法，得到一个整数，类似于\
0
>>> 17 % 3 # 取余 
2
>>> 2 ** 5 # 乘方
32
```

- 一个变量可以通过赋值指向不同类型的对象。
- 在混合计算的时候，Python会将整型转换成浮点数。
- Python的复数可以由实部和虚部构成，`a+bj`或者`complex(a,b)`

!!!note
	python是一种动态类型语言，类型是绑定在对象上，而非变量上。即对象拥有类型，如数字10永远是int类型，而变量没有类型，他只储存一个引用地址，指向它当前关联的对象。当python在程序运行的时候会检查对象的类型。这一特征的优点在于代码更加简介灵活，益于开发，代价在于错误的类型对象不会再编译器刚开始运行的时候检查出来，只有程序运行到存在错误的一行会抛出`typeError`。当一个运行了很久的代码在中途抛出`typeError`就老实了~~~(笑)~~~

#### 数学函数

| 函数                                                         | 返回值 ( 描述 )                                              |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [abs(x)](https://www.runoob.com/python3/python3-func-number-abs.html) | 返回数字的绝对值，如abs(-10) 返回 10                         |
| [ceil(x)](https://www.runoob.com/python3/python3-func-number-ceil.html) | 返回数字的向上取整，如math.ceil(4.1) 返回 5                  |
| cmp(x, y)                                                    | 如果 x < y 返回 -1, 如果 x == y 返回 0, 如果 x > y 返回 1。 **Python 3 已废弃，使用 (x>y)-(x<y) 替换**。 |
| [exp(x)](https://www.runoob.com/python3/python3-func-number-exp.html) | 返回e的x次幂(ex),如math.exp(1) 返回2.718281828459045         |
| [fabs(x)](https://www.runoob.com/python3/python3-func-number-fabs.html) | 以浮点数形式返回数字的绝对值，如math.fabs(-10) 返回10.0      |
| [floor(x)](https://www.runoob.com/python3/python3-func-number-floor.html) | 返回数字的向下取整，如math.floor(4.9)返回 4                  |
| [log(x)](https://www.runoob.com/python3/python3-func-number-log.html) | 如math.log(math.e)返回1.0,math.log(100,10)返回2.0            |
| [log10(x)](https://www.runoob.com/python3/python3-func-number-log10.html) | 返回以10为基数的x的对数，如math.log10(100)返回 2.0           |
| [max(x1, x2,...)](https://www.runoob.com/python3/python3-func-number-max.html) | 返回给定参数的最大值，参数可以为序列。                       |
| [min(x1, x2,...)](https://www.runoob.com/python3/python3-func-number-min.html) | 返回给定参数的最小值，参数可以为序列。                       |
| [modf(x)](https://www.runoob.com/python3/python3-func-number-modf.html) | 返回x的整数部分与小数部分，两部分的数值符号与x相同，整数部分以浮点型表示。 |
| [pow(x, y)](https://www.runoob.com/python3/python3-func-number-pow.html) | x**y 运算后的值。                                            |
| [round(x [,n\])](https://www.runoob.com/python3/python3-func-number-round.html) | 返回浮点数 x 的四舍五入值，如给出 n 值，则代表舍入到小数点后的位数。**其实准确的说是保留值将保留到离上一位更近的一端。** |
| [sqrt(x)](https://www.runoob.com/python3/python3-func-number-sqrt.html) | 返回数字x的平方根。                                          |

#### 随机数函数

随机数可以用于数学，游戏，安全等领域中，还经常被嵌入到算法中，用以提高算法效率，并提高程序的安全性。

Python包含以下常用随机数函数：

| 函数                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [choice(seq)](https://www.runoob.com/python3/python3-func-number-choice.html) | 从序列的元素中随机挑选一个元素，比如random.choice(range(10))，从0到9中随机挑选一个整数。 |
| [randrange ([start,\] stop [,step])](https://www.runoob.com/python3/python3-func-number-randrange.html) | 从指定范围内，按指定基数递增的集合中获取一个随机数，基数默认值为 1 |
| [random()](https://www.runoob.com/python3/python3-func-number-random.html) | 随机生成下一个实数，它在[0,1)范围内。                        |
| seed([x\)](https://www.runoob.com/python3/python3-func-number-seed.html) | 改变随机数生成器的种子seed。如果你不了解其原理，你不必特别去设定seed，Python会帮你选择seed。 |
| [shuffle(lst)](https://www.runoob.com/python3/python3-func-number-shuffle.html) | 将序列的所有元素随机排序                                     |
| [uniform(x, y)](https://www.runoob.com/python3/python3-func-number-uniform.html) | 随机生成下一个实数，它在[x,y]范围内。                        |

#### 三角函数

| 函数                                                         | 描述                                              |
| :----------------------------------------------------------- | :------------------------------------------------ |
| [acos(x)](https://www.runoob.com/python3/python3-func-number-acos.html) | 返回x的反余弦弧度值。                             |
| [asin(x)](https://www.runoob.com/python3/python3-func-number-asin.html) | 返回x的反正弦弧度值。                             |
| [atan(x)](https://www.runoob.com/python3/python3-func-number-atan.html) | 返回x的反正切弧度值。                             |
| [atan2(y, x)](https://www.runoob.com/python3/python3-func-number-atan2.html) | 返回给定的 X 及 Y 坐标值的反正切值。              |
| [cos(x)](https://www.runoob.com/python3/python3-func-number-cos.html) | 返回x的弧度的余弦值。                             |
| [hypot(x, y)](https://www.runoob.com/python3/python3-func-number-hypot.html) | 返回欧几里德范数 sqrt(x*x + y*y)。                |
| [sin(x)](https://www.runoob.com/python3/python3-func-number-sin.html) | 返回的x弧度的正弦值。                             |
| [tan(x)](https://www.runoob.com/python3/python3-func-number-tan.html) | 返回x弧度的正切值。                               |
| [degrees(x)](https://www.runoob.com/python3/python3-func-number-degrees.html) | 将弧度转换为角度,如degrees(math.pi/2) ， 返回90.0 |
| [radians(x)](https://www.runoob.com/python3/python3-func-number-radians.html) | 将角度转换为弧度                                  |

#### 数学常量

| 常量 | 描述                                  |
| :--- | :------------------------------------ |
| pi   | 数学常量 pi（圆周率，一般以π来表示）  |
| e    | 数学常量 e，e即自然常数（自然常数）。 |

#### 其他说明

1. Python数字数据类型用于存储数值，不允许改变，如果要改变数字数据类型的值，将重新分配内存空间。

可以使用del语句删除一些数字对象的引用

```python
del var1[,var2,[...,varN]]
del var_a,var_b
```

2. 可以使用十六进制或者八进制来表示整数

```python
>>> number = 0xA0F # 十六进制
>>> number
2575

>>> number=0o37 # 八进制
>>> number
31

```

3. 数字类型转换

- **int(x)** 将x转换为一个整数。
- **float(x)** 将x转换到一个浮点数。
- **complex(x)** 将x转换到一个复数，实数部分为 x，虚数部分为 0。
- **complex(x, y)** 将 x 和 y 转换到一个复数，实数部分为 x，虚数部分为 y。x 和 y 是数字表达式。



---

### String(字符串)

#### 基本语法

Python中的字符串用双引号或者单引号括起来，用反斜杠表示转义特殊字符。

字符串的截取的语法格式如下：

```python
变量[头下标:尾下标]
```

索引值以0开始，-1为末尾的开始位置

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/123456-20200923-1.svg" alt="img" style="zoom:50%;" /></center>

> 图片来源于：https://www.runoob.com/python3/python3-data-type.html

加号`+`表示字符串的链接，星号`*n`表示当前字符串复制n遍

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251106130032356.png" alt="image-20251106130032356" style="zoom:80%;" /></center>

Python 使用反斜杠 `\`转义特殊字符，如果你不想让反斜杠发生转义，可以在字符串前面添加一个 `r`，表示原始字符串：

```python
>>> print('Ru\noob')
Ru
oob
>>> print(r'Ru\noob')
Ru\noob
>>>
```

另外，反斜杠(\)可以作为续行符，表示下一行是上一行的延续。也可以使用 **"""..."""** 或者 **'''...'''** 跨越多行。

```python
total = item_one + \
        item_two + \
        item_three
```

!!!note
	与 C 字符串不同的是，Python 字符串不能被改变。向一个索引位置赋值，比如 `word[0] = 'm'` 会导致错误。



#### 转义字符

在需要在字符中使用特殊字符时，python 用反斜杠 `\` 转义字符。如下表：

| 转义字符    | 描述                                                         | 实例                                                         |
| :---------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| \(在行尾时) | 续行符                                                       | `>>> print("line1 \ `<br />`... line2 \ `<br />`... line3")`<br />` line1 line2 line3 `<br />`>>> ` |
| \\          | 反斜杠符号                                                   | `>>> print("\\") `<br />`\`                                  |
| \'          | 单引号                                                       | `>>> print('\'') `<br />`'`                                  |
| \"          | 双引号                                                       | `>>> print("\"")`<br />` "`                                  |
| \a          | 响铃                                                         | `>>> print("\a")`<br />执行后电脑有响声。                    |
| \b          | 退格(Backspace)                                              | `>>> print("Hello \b World!") `<br />`Hello World!`          |
| \000        | 空                                                           | `>>> print("\000") `<br />`>>> `                             |
| \n          | 换行                                                         | `>>> print("\n")`<br />`  `<br />`>>>`                       |
| \v          | 纵向制表符                                                   | `>>> print("Hello \v World!") `<br />`Hello`<br />`        World! `<br />`>>>` |
| \t          | 横向制表符                                                   | `>>> print("Hello \t World!") `<br />`Hello    World! `<br />`>>>` |
| \r          | 回车，将 **\r** 后面的内容移到字符串开头，并逐一替换开头部分的字符，直至将 **\r** 后面的内容完全替换完成。 | `>>> print("Hello\rWorld!") `<br />`World!`<br />` >>> print('google runoob taobao\r123456')`<br />` 123456 runoob taobao` |
| \f          | 换页                                                         | `>>> print("Hello \f World!") `<br />`Hello        `<br />`World!`<br />` >>> ` |
| \yyy        | 八进制数，y 代表 0~7 的字符，例如：\012 代表换行。           | `>>> print("\110\145\154\154\157\40\127\157\162\154\144\41")`<br />` Hello World!` |
| \xyy        | 十六进制数，以 \x 开头，y 代表的字符，例如：\x0a 代表换行    | `>>> print("\x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64\x21")`<br />` Hello World!` |
| \other      | 其它的字符以普通格式输出                                     |                                                              |

???example
    使用`\r`实现百分比进度条：
    ```python
    import time
    for i in range(101): # 添加进度条图形和百分比
        bar = '[' + '=' * (i // 2) + ' ' * (50 - i // 2) + ']'
        print(f"\r{bar} {i:3}%", end='', flush=True)
        time.sleep(0.05)
    print()
    ```



---

### bool(布尔类型)

布尔类型即 True 或 False。

在 Python 中，True 和 False 都是关键字，表示布尔值。

布尔类型可以用来控制程序的流程，比如判断某个条件是否成立，或者在某个条件满足时执行某段代码。

布尔类型特点：

- 布尔类型只有两个值：True 和 False。
- bool 是 int 的子类，因此布尔值可以被看作整数来使用，其中 True 等价于 1。
- 布尔类型可以和其他数据类型进行比较，比如数字、字符串等。在比较时，Python 会将 True 视为 1，False 视为 0。
- 布尔类型可以和逻辑运算符一起使用，包括 and、or 和 not。这些运算符可以用来组合多个布尔表达式，生成一个新的布尔值。
- 布尔类型也可以被转换成其他数据类型，比如整数、浮点数和字符串。在转换时，True 会被转换成 1，False 会被转换成 0。
- 可以使用 `bool()` 函数将其他类型的值转换为布尔值。以下值在转换为布尔值时为 `False`：`None`、`False`、零 (`0`、`0.0`、`0j`)、空序列（如 `''`、`()`、`[]`）和空映射（如 `{}`）。其他所有值转换为布尔值时均为 `True`。

!!!note
	在 Python 中，所有非零的数字和非空的字符串、列表、元组等数据类型都被视为 True，只有 **0、空字符串、空列表、空元组**等被视为 False。因此，在进行布尔类型转换时，需要注意数据类型的真假性。

---

### List(列表)

列表可以完成大多数集合类的数据结构实现。列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表（所谓嵌套）。

列表是写在方括号 **[]** 之间、用逗号分隔开的元素列表。

和字符串一样，列表同样可以被索引和截取，列表被截取后返回一个包含所需元素的新列表。

列表截取的语法格式如下：

```python
变量[头下标:尾下标]
```

列表的索引与字符串的索引类似，见下图

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/list_slicing1_new1.png" alt="img" style="zoom:80%;" /></center>

加号`+`是列表连接运算符，星号`*`是重复操作，这里与字符串类似。

???example
    ```python
    #!/usr/bin/python3
    ```

    list = [ 'abcd', 786 , 2.23, 'runoob', 70.2 ]  # 定义一个列表
    tinylist = [123, 'runoob']
    
    print (list)            # 打印整个列表
    print (list[0])         # 打印列表的第一个元素
    print (list[1:3])       # 打印列表第二到第四个元素（不包含第四个元素）
    print (list[2:])        # 打印列表从第三个元素开始到末尾
    print (tinylist * 2)    # 打印tinylist列表两次
    print (list + tinylist)  # 打印两个列表拼接在一起的结果
    ```
    `output`
    ```python
    ['abcd', 786, 2.23, 'runoob', 70.2]
    abcd
    [786, 2.23]
    [2.23, 'runoob', 70.2]
    [123, 'runoob', 123, 'runoob']
    ['abcd', 786, 2.23, 'runoob', 70.2, 123, 'runoob']
    ```

与字符串不一样的是，列表中的元素是可以改变的。

List还内置了很多方法，例如append(),pop()等等，这在后面还会提到

!!!note
	1.列表写在方括号之间，元素用逗号隔开
	2.和字符串一样，列表可以被索引和切片
	3.列表可以使用`+`操作符进行连接
	4.列表中的元素是可以改变的

Python 列表截取可以接收第三个参数，参数作用是截取的步长，以下实例在索引 1 到索引 4 的位置并设置为步长为 2（间隔一个位置）来截取字符串：

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/py-dict-1.png" alt="img" style="zoom:80%;" /></center>

如果第三个参数为负数表示逆向读取，以下实例用于翻转字符串

???example
    ```python
    def reverseWords(input): 

        # 通过空格将字符串分隔符，把各个单词分隔为列表
        inputWords = input.split(" ") 
    
        # 翻转字符串
        # 假设列表 list = [1,2,3,4],  
        # list[0]=1, list[1]=2 ，而 -1 表示最后一个元素 list[-1]=4 ( 与 list[3]=4 一样) 
        # inputWords[-1::-1] 有三个参数
        # 第一个参数 -1 表示最后一个元素
        # 第二个参数为空，表示移动到列表末尾
        # 第三个参数为步长，-1 表示逆向
        inputWords=inputWords[-1::-1] 
    
        # 重新组合字符串
        output = ' '.join(inputWords) 
    
        return output 
    
    if __name__ == "__main__": 
        input = 'I like runoob'
        rw = reverseWords(input) 
        print(rw)
    ```
    `output`
    ```python
    runoob like I
    ```

---

### Tuple(元组)

元组（tuple）与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 **()** 里，元素之间用逗号隔开。

- 元组中的元素类型也可以不相同

- 元组与字符串类似，可以被索引且下标索引从0开始，-1 为从末尾开始的位置。也可以进行截取
- 虽然tuple的元素不可改变，但它可以包含可变的对象，比如list列表。
- 构造包含 0 个或 1 个元素的元组比较特殊，所以有一些额外的语法规则，如果只有一个元素的元组，需要再元素后添加逗号，用于区分元组和普通的值。

---

### Set(集合)

Python 中的集合（Set）是一种无序、可变的数据类型，用于存储唯一的元素。

集合中的元素不会重复，并且可以进行交集、并集、差集等常见的集合操作。

在 Python 中，集合使用大括号 **{}** 表示，元素之间用逗号 **,** 分隔。

另外，也可以使用 **set()** 函数创建集合。

**注意：**创建一个空集合必须用 **set()** 而不是 **{ }**，因为 **{ }** 是用来创建一个空字典。

创建格式：

```python
parame = {value01,value02,...}
或者
set(value)
```

???example
    ```python
    #!/usr/bin/python3
    sites = {'Google', 'Taobao', 'Runoob', 'Facebook', 'Zhihu', 'Baidu'}
    print(sites)   # 输出集合，重复的元素被自动去掉
    # 成员测试
    if 'Runoob' in sites :
        print('Runoob 在集合中')
    else :
        print('Runoob 不在集合中')
    ```python
    # set可以进行集合运算
    a = set('abracadabra')
    b = set('alacazam')
    print(a)
    print(a - b)     # a 和 b 的差集
    print(a | b)     # a 和 b 的并集
    print(a & b)     # a 和 b 的交集
    print(a ^ b)     # a 和 b 中不同时存在的元素
    ```
​    `output`
    ```python
    {'Baidu', 'Runoob', 'Facebook', 'Google', 'Zhihu', 'Taobao'}
    Runoob 在集合中
    {'a', 'r', 'd', 'b', 'c'}
    {'r', 'b', 'd'}
    {'a', 'r', 'm', 'c', 'd', 'b', 'z', 'l'}
    {'a', 'c'}
    {'r', 'z', 'm', 'l', 'b', 'd'}
    ```

----

### Dictionary(字典)

列表式有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典中的元素是通过键来存取的，而不是通过偏移存取(有点像函数里的一一对应关系)。

字典是一种映射类型，用`{}`标识，是一个无序的**键(Key):值(Value)**的集合。键(Key)必须是不可变类型，同一个字典中，键必须是唯一的。

???example
	<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251108003352258.png" alt="image-20251108003352258" style="zoom:67%;" /></center>

构造函数dict()可以直接从键值对序列中构建字典如下：

```python
>>> dict([('Runoob', 1), ('Google', 2), ('Taobao', 3)])
{'Runoob': 1, 'Google': 2, 'Taobao': 3}
>>> {x: x**2 for x in (2, 4, 6)}
{2: 4, 4: 16, 6: 36}
>>> dict(Runoob=1, Google=2, Taobao=3)
{'Runoob': 1, 'Google': 2, 'Taobao': 3}
```

注意：

1. 字典是一种映射类型，它的元素是键值对
2. 字典的关键字必须为不可变类型，且不能重复
3. 创建空字典使用`{}`

---

### bytes类型

在Python3中，bytes类型表示的是不可变的二进制序列。与字符串类型不同的是，该类型中的元素是整数值(0-255之间)，而不是Unicode字符。通常用于处理二进制数据。

可以用b前缀标识bytes对象。

此外，也可以使用bytes()函数将其他类型的对象转换为bytes类型。该函数的第一个参数是要转换的对象，第二个参数是编码方式，如果省略第二个参数，则默认使用UTF-8编码。

```python
x = bytes("hello", encoding="utf-8")
```

与字符串类型类似，bytes 类型也支持许多操作和方法，如切片、拼接、查找、替换等等。同时，由于 bytes 类型是不可变的，因此在进行修改操作时需要创建一个新的 bytes 对象。

需要注意的是，bytes 类型中的元素是整数值，因此在进行比较操作时需要使用相应的整数值。

---

##  Python3的数据类型转换

Python3的数据类型转换分为两种

- 隐式类型转换——自动完成
- 显示类型转换——需要使用类型函数来转换

### 隐式类型转换

- Python会在运算的时候转换成运算过程中最高的数据类型，如整数和浮点数相加，得到的结果是浮点数。
- 数字型和字符串型运算结果会报错，无法进行隐式转换。

### 显示类型转换

使用`int(),float(),str()`等预定义函数来执行显示类型转换

例如

???example
    ```python
    num_int = 123
    num_str = "456"

    print("num_int 数据类型为:",type(num_int))
    print("类型转换前，num_str 数据类型为:",type(num_str))
    
    num_str = int(num_str)    # 强制转换为整型
    print("类型转换后，num_str 数据类型为:",type(num_str))
    
    num_sum = num_int + num_str
    
    print("num_int 与 num_str 相加结果为:",num_sum)
    print("sum 数据类型为:",type(num_sum))
    ```
    `output`
    ```python
    num_int 数据类型为: <class 'int'>
    类型转换前，num_str 数据类型为: <class 'str'>
    类型转换后，num_str 数据类型为: <class 'int'>
    num_int 与 num_str 相加结果为: 579
    sum 数据类型为: <class 'int'>
    ```



以下几个内置的函数可以执行数据类型之间的转换。这些函数返回一个新的对象，表示转换的值，因此可以用于赋值。

| 函数                                                         | 描述                                                |
| :----------------------------------------------------------- | :-------------------------------------------------- |
| [int(x [,base\])](https://www.runoob.com/python3/python-func-int.html) | 将x转换为一个整数                                   |
| [float(x)](https://www.runoob.com/python3/python-func-float.html) | 将x转换到一个浮点数                                 |
| [complex(real [,imag\])](https://www.runoob.com/python3/python-func-complex.html) | 创建一个复数                                        |
| [str(x)](https://www.runoob.com/python3/python-func-str.html) | 将对象 x 转换为字符串                               |
| [repr(x)](https://www.runoob.com/python3/python-func-repr.html) | 将对象 x 转换为表达式字符串                         |
| [eval(str)](https://www.runoob.com/python3/python-func-eval.html) | 用来计算在字符串中的有效Python表达式,并返回一个对象 |
| [tuple(s)](https://www.runoob.com/python3/python3-func-tuple.html) | 将序列 s 转换为一个元组                             |
| [list(s)](https://www.runoob.com/python3/python3-att-list-list.html) | 将序列 s 转换为一个列表                             |
| [set(s)](https://www.runoob.com/python3/python-func-set.html) | 转换为可变集合                                      |
| [dict(d)](https://www.runoob.com/python3/python-func-dict.html) | 创建一个字典。d 必须是一个 (key, value)元组序列。   |
| [frozenset(s)](https://www.runoob.com/python3/python-func-frozenset.html) | 转换为不可变集合                                    |
| [chr(x)](https://www.runoob.com/python3/python-func-chr.html) | 将一个整数转换为一个字符                            |
| [ord(x)](https://www.runoob.com/python3/python-func-ord.html) | 将一个字符转换为它的整数值                          |
| [hex(x)](https://www.runoob.com/python3/python-func-hex.html) | 将一个整数转换为一个十六进制字符串                  |
| [oct(x)](https://www.runoob.com/python3/python-func-oct.html) | 将一个整数转换为一个八进制字符串                    |

> 表格来源于 https://www.runoob.com/python3/python3-type-conversion.html

---

## Python3解释器

略

---

## Python3运算符

Python3支持以下类型的运算符：

- 算术运算符
- 关系(比较)运算符
- 赋值运算符
- 逻辑运算符
- 位运算符
- 成员运算符
- 身份运算符
- 运算符优先级

---

### 算术运算符

假设变量`a=10`，变量`b=21`

| 运算符 | 描述                                            | 实例                                             |
| :----- | :---------------------------------------------- | :----------------------------------------------- |
| +      | 加 - 两个对象相加                               | a + b 输出结果 31                                |
| -      | 减 - 得到负数或是一个数减去另一个数             | a - b 输出结果 -11                               |
| *      | 乘 - 两个数相乘或是返回一个被重复若干次的字符串 | a * b 输出结果 210                               |
| /      | 除 - x 除以 y                                   | b / a 输出结果 2.1                               |
| %      | 取模 - 返回除法的余数                           | b % a 输出结果 1                                 |
| **     | 幂 - 返回x的y次幂                               | a**b 为10的21次方                                |
| //     | 取整除 - 往小的方向取整数                       | `>>> 9//2 `<br />`4`<br />` >>> -9//2`<br />`-5` |

---

### 比较运算符

假设变量`a=10`，变量`b=20`

| 运算符 | 描述                                                         | 实例                  |
| :----- | :----------------------------------------------------------- | :-------------------- |
| ==     | 等于 - 比较对象是否相等                                      | (a == b) 返回 False。 |
| !=     | 不等于 - 比较两个对象是否不相等                              | (a != b) 返回 True。  |
| >      | 大于 - 返回x是否大于y                                        | (a > b) 返回 False。  |
| <      | 小于 - 返回x是否小于y。所有比较运算符返回1表示真，返回0表示假。<br />这分别与特殊的变量True和False等价。注意，这些变量名的大写。 | (a < b) 返回 True。   |
| >=     | 大于等于 - 返回x是否大于等于y。                              | (a >= b) 返回 False。 |
| <=     | 小于等于 - 返回x是否小于等于y。                              | (a <= b) 返回 True。  |

---

### 赋值运算符

假设变量`a=10`，变量`b=20`

| 运算符 | 描述                                                         | 实例                                                         |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| =      | 简单的赋值运算符                                             | c = a + b 将 a + b 的运算结果赋值为 c                        |
| +=     | 加法赋值运算符                                               | c += a 等效于 c = c + a                                      |
| -=     | 减法赋值运算符                                               | c -= a 等效于 c = c - a                                      |
| *=     | 乘法赋值运算符                                               | c *= a 等效于 c = c * a                                      |
| /=     | 除法赋值运算符                                               | c /= a 等效于 c = c / a                                      |
| %=     | 取模赋值运算符                                               | c %= a 等效于 c = c % a                                      |
| **=    | 幂赋值运算符                                                 | c \**= a 等效于 c = c ** a                                   |
| //=    | 取整除赋值运算符                                             | c //= a 等效于 c = c // a                                    |
| :=     | 海象运算符，这个运算符的主要目的是<br />在表达式中同时进行赋值和返回赋值的值。<br />**Python3.8 版本新增运算符**。 | 在这个示例中，<br />赋值表达式可以避免调用 len() 两次:<br />`if (n := len(a)) > 10:`<br/> `   print(f"List is({n} elements, expected <= 10)")` |

???note
	“海象运算符”，它使用`:=`符号。使用海象运算符可以在一些情况下简化代码，尤其是在需要在表达式中使用赋值结果的情况下，这对于简化循环条件或表达式中的重复计算很有用。例如：

    ```python
    # 传统写法
    n = 10
    if n > 5:
        print(n)
    # 使用海象运算符
    if (n := 10) > 5:
        print(n)
    ```

---

### 位运算符

按位运算符是把数字看做二进制来进行计算的，按位运算法则如下：

下表中变量a为60，b为13二进制格式

```python
a = 0011 1100

b = 0000 1101
```

| 运算符 | 描述                                                         | 实例                                                         |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| &      | 按位与运算符：参与运算的两个值,<br />如果两个相应位都为1,则该位的结果为1,否则为0 | (a & b) 输出结果 12 ，<br />二进制解释： 0000 1100           |
| \|     | 按位或运算符：只要对应的二个二进位有一个为1时，<br />结果位就为1。 | (a \| b) 输出结果 61 ，<br />二进制解释： 0011 1101          |
| ^      | 按位异或运算符：当两对应的二进位相异时，结果为1              | (a ^ b) 输出结果 49 ，<br />二进制解释： 0011 0001           |
| ~      | 按位取反运算符：对数据的每个二进制位取反,<br />即把1变为0,把0变为1。**~x** 类似于 **-x-1** | (~a ) 输出结果 -61 ，<br />二进制解释： 1100 0011， <br />在一个有符号二进制数的补码形式。 |
| <<     | 左移动运算符：运算数的各二进位全部左移若干位，<br />由"<<"右边的数指定移动的位数，高位丢弃，低位补0。乘$2^n$ | a << 2 输出结果 240 ，<br />二进制解释： 1111 0000           |
| >>     | 右移动运算符：运算数的各二进位全部右移若干位，<br />">>"右边的数指定移动的位数，除$2^n$ | a >> 2 输出结果 15 ，<br />二进制解释： 0000 1111            |

---

### 逻辑运算符

Python语言支持逻辑运算符，以下假设变量 a 为 10, b为 20:

| 运算符 | 逻辑表达式 | 描述                                                         | 实例                    |
| :----- | :--------- | :----------------------------------------------------------- | :---------------------- |
| and    | x and y    | 布尔"与" - 如果 x 为 False，x and y 返回 x 的值，否则返回 y 的计算值。 | (a and b) 返回 20。     |
| or     | x or y     | 布尔"或" - 如果 x 是 True，它返回 x 的值，否则它返回 y 的计算值。 | (a or b) 返回 10。      |
| not    | not x      | 布尔"非" - 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。 | not(a and b) 返回 False |

---

### 成员运算符

除了上面的一些运算符之外，Python还支持成员运算符

| 运算符 | 描述                                                    | 实例                                              |
| :----- | :------------------------------------------------------ | :------------------------------------------------ |
| in     | 如果在指定的序列中找到值返回 True，否则返回 False。     | x 在 y 序列中 , 如果 x 在 y 序列中返回 True。     |
| not in | 如果在指定的序列中没有找到值返回 True，否则返回 False。 | x 不在 y 序列中 , 如果 x 不在 y 序列中返回 True。 |

???example
    ```python
    #!/usr/bin/python3
    a = 10
    b = 20
    list = [1, 2, 3, 4, 5 ]
    if ( a in list ):
       print ("1 - 变量 a 在给定的列表中 list 中")
    else:
       print ("1 - 变量 a 不在给定的列表中 list 中")
    if ( b not in list ):
       print ("2 - 变量 b 不在给定的列表中 list 中")
    else:
       print ("2 - 变量 b 在给定的列表中 list 中")
    # 修改变量 a 的值
    a = 2
    if ( a in list ):
       print ("3 - 变量 a 在给定的列表中 list 中")
    else:
       print ("3 - 变量 a 不在给定的列表中 list 中")
    ```

    `output`
    
    ```python
    1 - 变量 a 不在给定的列表中 list 中
    2 - 变量 b 不在给定的列表中 list 中
    3 - 变量 a 在给定的列表中 list 中
    ```

---

### 身份运算符

身份运算符用于比较两个对象的存储单元

| 运算符 | 描述                                        | 实例                                                         |
| :----- | :------------------------------------------ | :----------------------------------------------------------- |
| is     | is 是判断两个标识符是不是引用自一个对象     | **x is y**, 类似 **id(x) == id(y)** , <br />如果引用的是同一个对象则返回 True，否则返回 False |
| is not | is not 是判断两个标识符是不是引用自不同对象 | **x is not y** ， 类似 **id(x) != id(y)**。<br />如果引用的不是同一个对象则返回结果 True，否则返回 False。 |

???note
	**is 与 == 区别：**is 用于判断两个变量引用对象是否为同一个， == 用于判断引用变量的值是否相等。
    ```python
    >>>a = [1, 2, 3]
    >>> b = a
    >>> b is a 
    True
    >>> b == a
    True
    >>> b = a[:]
    >>> b is a
    False
    >>> b == a
    True
    ```

### 运算符优先级

| 运算符                                                       | 描述                               |
| :----------------------------------------------------------- | :--------------------------------- |
| `(expressions...)`,`[expressions...]`, `{key: value...}`, `{expressions...}` | 圆括号的表达式                     |
| `x[index]`, `x[index:index]`, `x(arguments...)`, `x.attribute` | 读取，切片，调用，属性引用         |
| await x                                                      | await 表达式                       |
| `**`                                                         | 乘方(指数)                         |
| `+x`, `-x`, `~x`                                             | 正，负，按位非 NOT                 |
| `*`, `@`, `/`, `//`, `%`                                     | 乘，矩阵乘，除，整除，取余         |
| `+`, `-`                                                     | 加和减                             |
| `<<`, `>>`                                                   | 移位                               |
| `&`                                                          | 按位与 AND                         |
| `^`                                                          | 按位异或 XOR                       |
| `|`                                                          | 按位或 OR                          |
| `in,not in, is,is not, <, <=, >, >=, !=, ==`                 | 比较运算，包括成员检测和标识号检测 |
| `not x`                                                      | 逻辑非 NOT                         |
| `and`                                                        | 逻辑与 AND                         |
| `or`                                                         | 逻辑或 OR                          |
| `if -- else`                                                 | 条件表达式                         |
| `lambda`                                                     | lambda 表达式                      |
| `:=`                                                         | 赋值表达式                         |

!!!note
	**注意：**Python3 已不支持 **<>** *运算符，可以使用* **!=**代替。

