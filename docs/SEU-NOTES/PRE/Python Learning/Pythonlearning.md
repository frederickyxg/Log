# Python学习

## Python3基本语法

### 编码

默认情况下，Python3源码文件以UTF-8编码，所有字符串都是unicode字符串。当然，也可以为源码文件制定不同的编码：

```python
# -*- coding:cp-1252 -*-
```

### 标识符

- 标识符必须以字母或者下划线开头
- 标识符的其他部分由字母、数字和下划线组成
- 标识符对大小写敏感
- 标识符对长度无硬性限制
- 不能使用保留关键字，如if\for\class等

> 让人惊讶的是，python可能是第一个主流编程语言支持中文变量名的(至少据我所知是这样的)
>
> <center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104165728834.png" alt="image-20251104165728834" style="zoom:50%;" /></center>

### 保留字

```python
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

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

### 数字类型

python中有四种数字类型：整数、布尔型、浮点数和复数

| 数字类型      | 说明                                                         | 例子                              |
| ------------- | ------------------------------------------------------------ | --------------------------------- |
| int(整数)     | 只有一种整数类型int，表示为长整数型，没有python2中的Long类型 | 1 2 3                             |
| bool(布尔)    | 只有两种类型                                                 | True False                        |
| float(浮点数) | 小数，可以使用科学计数法表示                                 | 1.23 3e-2($3\times 10^{-2} 0.03$) |
| complex(复数) | 由实部和虚部组成，形式为$a+bj$                               | 1.1+3.2j                          |

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

### 等待用户输入

执行下面你的程序在按回车键后会等待用户输入

```python
#!/usr/bin/python3
 
input("\n\n按下 enter 键后退出。")
```

以上代码中 ，**\n\n** 在结果输出前会输出两个新的空行。一旦用户按下 **enter** 键时，程序将退出。

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

### print输出

print输出默认是换行的，如果不需要实现换行需要再变量末尾加上`end=""`

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104174717660.png" alt="image-20251104174717660" /></center>

### import与from...import

在 python 用 **import** 或者 **from...import** 来导入相应的模块。

将整个模块(somemodule)导入，格式为： **import somemodule**

从某个模块中导入某个函数,格式为： **from somemodule import somefunction**

从某个模块中导入多个函数,格式为： **from somemodule import firstfunc, secondfunc, thirdfunc**

将某个模块中的全部函数导入，格式为： **from somemodule import \***

例如

```python
import sys
print('================Python import mode==========================')
print ('命令行参数为:')
for i in sys.argv:
    print (i)
print ('\n python 路径为',sys.path)
```

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104175059259.png" alt="image-20251104175059259" style="zoom:80%;" /></center>

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



## Python3基本数据类型















