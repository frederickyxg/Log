# Python & PyAnsys

## 1. PyAnsys的安装

PyAEDT 整合并扩展了围绕 AEDT 脚本编写的所有现有资本， 允许重用现有代码、共享最佳实践和协作。

该 PyAnsys 库已在 HFSS、Icepak 和 Maxwell 3D 上进行了测试。它还提供 对 EDB 和 Circuit （Nexxim） 的基本支持。

### 1.1 要求

除了下面的安装信息中列出的运行时的依赖项外，PyAEDT需要Ansys Electronics Desktop(AEDT) 2022 R1或更高版本。还指出AEDT学生版。

### 1.2 从PyAEDT安装程序安装

下面Python脚本自动从AEDT安装PyAEDT，使用AEDT安装中包含CPython解释器

下面是使用该安装程序安装的步骤

1. 下载脚本文件[点击这里](https://aedt.docs.pyansys.com/version/stable/_downloads/fe7a43cc7f72925e0001e1b0eda13c82/pyaedt_installer_from_aedt.py)
2. 单击安装脚本，运行该文件(也可以使用压缩包进行离线安装(github)[点击这里](https://github.com/ansys/pyaedt/releases)

!!! important
	AEDT2023R1及更低版本需要Python3.7以上，而R2及更高版本需要python 3.10及以上

3. 打开AEDT，并选择Tools和Run Script

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104184129664.png" alt="image-20251104184129664" /></center>

4. 找到pyaedt在线安装脚本(如果使用离线安装，在Script Arguments中粘贴本地release的路径，注意不要有引号)点击打开，等待片刻即可完成依赖的安装。

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104184411409.png" alt="image-20251104184411409" /></center>

5. 重启AEDT，会发现在Automation中出现PyAEDTConsole等等

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104184528976.png" alt="image-20251104184528976" style="zoom:67%;" /></center>

安装完毕，尽情体验 自动化 带来的效率提升吧！！

## 2. AEDT自动化与PyAEDT

在这一部分中，我们将先认识到AEDT中的一些自动化工具，并着重介绍如何使用PyAEDT

### 2.1 IronPython

AEDT内置，是一种在.NET上实现的Python语言，使用System.Windows.Forms程序集创建GUI，集成了完整的API。

使用方法很简单，直接像录屏一样点击各个功能，会自动将过程转换成python代码。

例如实现一个简单的过程：Analyse以后查看S参数。AEDT会生成一串代码，实现这一功能。使用者只需要点击记录后选择保存的位置，并进行操作，然后在完成操作后点击结束即可。

<center><img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251104190507381.png" alt="image-20251104190507381" /></center>

后续需要调用的时候点击Run Script然后选中脚本即可。

打开脚本，可以看到python代码

```python
# ----------------------------------------------
# Script Recorded by Ansys Electronics Desktop Version 2024.2.0
# 18:55:26  Nov 04, 2025
# ----------------------------------------------
import ScriptEnv
ScriptEnv.Initialize("Ansoft.ElectronicsDesktop")
oDesktop.RestoreWindow()
oProject = oDesktop.SetActiveProject("finaldesign")
oProject.Save()
oDesign = oProject.SetActiveDesign("f6_2portFN1")
oDesign.Analyze("Auto1")
oModule = oDesign.GetModule("ReportSetup")
oModule.CreateReport("S Parameter Plot 2", "Modal Solution Data", "Rectangular Plot", "Auto1 : Sweep", 
	[
		"Domain:="		, "Sweep"
	], 
	[
		"Freq:="		, ["All"],
		"wg:="			, ["Nominal"],
		"copper:="		, ["Nominal"],
		"h1:="			, ["Nominal"],
		"ls1:="			, ["Nominal"],
		"ws1:="			, ["Nominal"],
		"ls2:="			, ["Nominal"],
		"ws3:="			, ["Nominal"],
		"rf:="			, ["Nominal"],
		"wf0:="			, ["Nominal"],
		"rf1:="			, ["Nominal"],
		"lf:="			, ["Nominal"],
		"r_via:="		, ["Nominal"],
		"vg1_y:="		, ["Nominal"],
		"vg1_x:="		, ["Nominal"],
		"vg1_y2:="		, ["Nominal"]
	], 
	[
		"X Component:="		, "Freq",
		"Y Component:="		, ["dB(S(1,1))","dB(S(2,1))"]
	])

```

