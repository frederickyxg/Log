# Python & PyAnsys

## PyAnsys的安装

PyAEDT 整合并扩展了围绕 AEDT 脚本编写的所有现有资本， 允许重用现有代码、共享最佳实践和协作。

该 PyAnsys 库已在 HFSS、Icepak 和 Maxwell 3D 上进行了测试。它还提供 对 EDB 和 Circuit （Nexxim） 的基本支持。

### 要求

除了下面的安装信息中列出的运行时的依赖项外，PyAEDT需要Ansys Electronics Desktop(AEDT) 2022 R1或更高版本。还指出AEDT学生版。

### 从PyAEDT安装程序安装

下面Python脚本自动从AEDT安装PyAEDT，使用AEDT安装中包含CPython解释器

下面是使用该安装程序安装的步骤

1. 下载脚本文件

   https://aedt.docs.pyansys.com/version/stable/_downloads/fe7a43cc7f72925e0001e1b0eda13c82/pyaedt_installer_from_aedt.py

2. 单击安装脚本，运行该文件(也可以使用压缩包进行离线安装https://github.com/ansys/pyaedt/releases)

> 在此之前，可以先创建一个新的conda环境来管理pyaedt的包，使用`conda create -n Pyaedt python=3.10`
>
> <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104181210542.png" alt="image-20251104181210542" style="zoom:50%;" />

!!! important
	AEDT2023R1及更低版本需要Python3.7以上，而R2及更高版本需要python 3.10及以上

