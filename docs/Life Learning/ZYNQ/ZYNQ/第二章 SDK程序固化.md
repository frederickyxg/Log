# <font color = blue>第二章 SDK程序固化</font>

### **实验目的**

1:熟悉ZYNQ启动模式类型和硬件设置 

2:熟悉ZYNQ启动的过程 

3:掌握ZYNQIPSDIO和QSPIFLASHMIO设置 

4:利用SDK产生或者制作BOOT.BIN文件 

5:完成SD卡启动实验 

6:完成QSPI启动实验

> 参考文献：
>
> 1. [ug585-zynq-7000-trm.pdf](ug585-zynq-7000-trm.pdf) 
>    [Zynq 7000 SoC Technical Reference Manual • Zynq 7000 SoC Technical Reference Manual (UG585) • 阅读器 • AMD 技术信息门户网站](https://docs.amd.com/r/en-US/ug585-zynq-7000-SoC-TRM)
> 2. [ug821-zynq-7000-swdev.pdf](ug821-zynq-7000-swdev.pdf)
>    [Introduction to Programming with Zynq 7000 AP SoC Devices • Zynq 7000 SoC Software Developers Guide (UG821) • 阅读器 • AMD 技术信息门户网站](https://docs.amd.com/r/en-US/ug821-zynq-7000-swdev)

## <font color = red>2.1 概述</font>

​	基于 ZYNQ 的启动方式包括了 ZYNQ 的加载流程、 支持的加载模式、 裸机启动、 LINUX 启动等。 其中加载模式有常用的 JTAG 模式、 QSPI 模式、 SD 卡模式、 NAND FLASH 模式、 QSPI+EMMC 模式。 如果需要详细了解其中的原理需要阅读大量资料和一些 XILINX 的 FSBL 代码以及 LINUX 启动部分的源码。

​	对于 SDK 开发的初级读者来说在，刚开始入门的时候， 掌握复杂的启动原理相对比较困难， 所以对于初级读者关键还是掌握主要的启动模式方法、 基本的启动流程原理， 比如 QSPI 启动、 SD 启动、 如何制作 BOOT.BIN 文件的能力， 满足一般的项目要求。 对于需要更加深入掌握比如精简定制 fsbl、 multiboot 方式、 QSPI+EMMC 启动方式、JTAG 启动方式等， 则可以详细阅读 ug585、 ug821、 阅读 fsbl 代码、 分析 linux 中相关的 uboot 启动流程和参数设置。

## <font color=red>2.2 ZYNQ的启动</font>

### 一、ZYNQ的启动模式设置

​	ZYNQ 支持 JTAG 启动模式、 NOR BOOT 模式、 NAND FLASH 启动模式、 QSPI 启动模式、 SD 卡启动模式。这里我们的硬件只支持 SD 卡启动模式、 QSPI 启动模式、 JTAG 启动模式(部分硬件不支持)。  

<img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20250913202838223.png" alt="image-20250913202838223" style="zoom:67%;" />

#### ZYNQ启动模式相关的上电时序



#### ZYNQ启动的流程的3个阶段



#### ZYNQIP中FLASH SDIO的配置



#### 工程路径修改后的修改方法



#### SDK创建BOOT.BIN的方法



#### SD卡接口的测试



#### 支持JTAG模式的核心板QSPI的烧录和启动