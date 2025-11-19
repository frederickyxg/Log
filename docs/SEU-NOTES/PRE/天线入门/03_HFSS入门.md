# Ansys HFSS学习

# 第一章 HFSS简介

## 1.1 CAE仿真与电磁场求解

#### 1.1.1CAE电磁场求解的三个主要应用方向

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118164042055.png" alt="image-20251118164042055" style="zoom:80%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图1 电磁场求解的三个主要应用方向</b>
    </figcaption>
</figure>

#### 1.1.2 Maxwell 方程组的数值计算求解

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118164147490.png" alt="image-20251118164147490" style="zoom:80%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图2 Maxwell方程组的数值计算求解</b>
    </figcaption>
</figure>

通过网格剖分，将空间剖分成网格，在每个网格中计算电磁场的分布，从而简化求解的难度。

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118164320562.png" alt="image-20251118164320562" style="zoom:50%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图3 电磁仿真算法</b>
    </figcaption>
</figure>

使用HFSS，可以使用MoM,FEM,DGTD,PO,SBR方法仿真求解。

#### 1.1.3 多物理场仿真与耦合

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118164606992.png" alt="image-20251118164606992" style="zoom:50%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图4 多物理场</b>
    </figcaption>
</figure>

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118164632443.png" alt="image-20251118164632443" style="zoom:50%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图5 Workbench平台多物理场耦合仿真</b>
    </figcaption>
</figure>

## 1.2 HFSS产品简介

### 1.2.1 HFSS简介

- Ansys HFSS是一款通用的三维结构全波高频电磁场仿真工具，为用户提供自动和自适应网格破分技术和先进的电磁场算法，实现高精度、高可信度而又易于使用和掌握的电磁求解，是高频/高速工程师的必备工具
  - 能够求解从射频和微波到高速PCB和封装信号在内的各种电磁场问题
- 拥有最广泛的用户基础，被业界普遍视为高频结构仿真的黄金工具
  - 作为一款三维全波电磁场求解工具，具有到电路仿真器的动态链接，可以让工程师在构建天线、高速互联、RF组件和可穿戴设备的模拟原型
- 核心算法为频域有限元FEM算法，也包括了时域有限元（DGTD）、积分方程法（IE）、物理光学法（PO）、弹跳射线法（SBR+）等多种算法，实现从复杂结构和电大尺寸问题的全面求解功能，具有很好的通用性和稳健性
- 内置电磁兼容仿真库和医疗医学仿真库
- 射频电路和系统仿真
  - 可为HFSS添加RF电路分析功能
  - 让工程师能够设计RF和微波电路以及基于标准通信方案的完整端到端的无线通信系统
- 线性和非线性仿真
  - 例如谐波平衡、滤波器综合、振荡器以及负载牵引/包络分析，相位噪声分析
- 2.5D平面MOM求解器
- 系统级射频干扰仿真



### 1.2.2 仿真功能

- FEM和IE适合结构复杂的电磁问题(10个波长以内)
  - 大型问题，运行时间内存需求非常大
  - 结合区域分解法DDM，精确求解有限大阵列问题
- SBR和PO适合结构简单，超大电尺寸问题(10000个波长以上)
  - SBR+可以在保证速度和精度的前提下，解决电大尺度问题
- 混合算法可以解决电大尺寸同时结构复杂的真实工程问题(100个波长)
  - 天线罩、阵列天线与运载平台的相互作用问题

### 1.2.3 HFSS在计算电磁学领域的关键技术突破

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118165537608.png" alt="image-20251118165537608" style="zoom:50%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图6 HFSS在计算电磁学领域的技术突破</b>
    </figcaption>
</figure>



### 1.2.4 射频干扰仿真工具

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118225720024.png" alt="image-20251118225720024" style="zoom:50%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图7 ANSYS EMIT 射频干扰仿真工具</b>
    </figcaption>
</figure>

## 1.3 HFSS的算法技术

### 1.3.1 HFSS的算法

- HFSS:Frequency domain finite element solver(频域有限元)
  - 支持直接法、迭代法和区域分解法矩阵求解，支持本征模式求解
  - 最广泛的适用范围，包括天线和天线阵，微波器件，PCB和封装等
- HFSS-Transient: Time domain finite element solver(时域有限元)
  - v13版本添加，显式求解与隐式求解相结合
  - 主要用于研究电磁瞬变现象，如雷击，ESD等
- HFSS-IE: Frequency domain integral equation solver(频域矩量法)
  - V12版本添加，支持MLFMM和ACA矩阵算法，支持特征模求解
  - 主要用于金属结构和均匀介质辐射与散射问题
- HFSS-SBR+:Shooting and Bouncing Rays solver (弹跳射线法)
  - V15版本添加，考虑爬行波的修正，可以考虑绕射效应
  - 主要用于电大金属结构，包括天线与安装平台的相互作用
- HFSS-PO: Physical Optics solver ((物理光学法)
  - V14 版本添加，不考虑绕射效应
  - 主要用于电大简单金属结构

### 1.3.2 HFSS对整个仿真空间进行网格剖分

#### A. 基于网格进行数值计算

- 采用四面体网格
- 通过网格剖分，将求解结构离散化，然后对每个网格求解Maxwell方程，得到结构的整体电磁特性和S参数
- HFSS网格包括所有结构细节，能够更好体现结构特性，确保结果的可靠性

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118230312474.png" style="zoom:80%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图8 自动四面体网格和自适应网格细化</b>
    </figcaption>
</figure>

#### B. 自适应剖分

自动生成初始网格，根据电场梯度细化，迭代，直至满足精度要求。在电场梯度较大的地方增加网格，从而更精确地确定电场分布。从而实现用尽可能少的网格，在减少软件的时间代价和性能代价的基础上，实现更精确的仿真。

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118230607140.png" alt="image-20251118230607140" style="zoom:80%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图9 自适应网格细化迭代与仿真结果</b>
    </figcaption>
</figure>

### 1.3.3 超限元法(Transfinite Element Method)

> 根据端口的形状进行波导本征模的展开

端口场可以根据波导的本征模来展开
$$
\vec{E}=\sum_{i=1}^M\left(\alpha_i+\beta_i\right)\vec{e}_i\Rightarrow\beta=S\alpha
$$

- 每个模式可以看做是端口面的基函数，这些模式从本质上讲师端口面的基本解或者格林函数，所以超限元法相当精确。
- 超限元法同样包括确切的边界条件
- 通过激励第$i^{th}$的模式($a_j=\delta_{ij}$)，可以解决$S$矩阵的第$i^{th}$列

### 1.3.4 DDM区域分解法

#### A. 一般DDM

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118231619263.png" alt="image-20251118231619263" style="zoom:80%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图10 区域分解法</b>
    </figcaption>
</figure>

#### B. 采用DDM技术的混合算法

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118231745429.png" alt="image-20251118231745429" style="zoom:100%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图11 FE-BI技术与IE Regions技术</b>
    </figcaption>
</figure>

从图中可以看出，虽然喇叭和反射面不在同一个空间中，但是通过FE-BI技术可以进行同时的高效率计算

进一步的，在下图中，只需要将需要高精度求解的喇叭用求解区域包裹住，将反射面设置为IE区域，直接进行仿真计算

#### C. 针对周期性结构的DDM技术

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118232124376.png" alt="image-20251118232124376" style="zoom:80%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图12 基于周期性结构的DDM技术</b>
    </figcaption>
</figure>

求解一个单元，通过迭代将真实的其他单元(边缘的？中央的？)的场分布描述出来。可以考虑到边缘效应、耦合效应和加权效应等等等等。



### 1.3.5 Ansys SBR+Solver

- 功能强大的电磁场工具
  - 能够帮助工程师确定在大型结构和区域中已经安装的天线的性能
- 射线跟踪技术
  - 提供远场辐射图的速度远远超过传统FEA
  - 可以模拟多次反弹、边缘绕射和爬行波射线
- 混合求解器技术
  - 在为大型区域设计或实现天线的时候，可以利用Ansys HFSS中集成的SBR+混合求解器技术获得更准确的解决方案

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251119001715472.png" alt="image-20251119001715472" style="zoom:100%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图13 各种波的示意图</b>
    </figcaption>
</figure>



### 1.3.6 其他重要技术

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251118231507908.png" alt="image-20251118231507908" style="zoom:100%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图11 其他重要技术</b>
    </figcaption>
</figure>



## 1.4 HFSS的界面以及操作流程

### 1.4.1 ANSYS AEDT

- HFSS任意三维结构的电磁场分析
- HFSS 3D Layout
- Maxwell 3D/2D
- Q3D/Q2D Extractor
- Circuit Simulation

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251119111642221.png" alt="image-20251119111642221" style="zoom:80%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图12 不同类型文件的图标</b>
    </figcaption>
</figure>

### 1.4.2 三个基本界面

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251119111853369.png" alt="image-20251119111853369" style="zoom:100%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图13 3个基本界面</b>
    </figcaption>
</figure>

#### 3D Layout 编辑器

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251119112526649.png" alt="image-20251119112526649" style="zoom:100%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图14 3D Layout编辑器</b>
    </figcaption>
</figure>

### 1.4.3 HFSS的电磁仿真工作流程





<div style="display: flex; justify-content: center; align-items: flex-start; gap: 20px;">
    <figure style="width: 48%; text-align: center; margin: 0;">
        <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251119112756159.png" alt="image-20251119112756159" style="width: 100%; border-radius: 5px;" />
        <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; font-style: normal;">
            <b>图15 HFSS工程管理器对应电磁仿真工作流程</b>
        </figcaption>
    </figure>
    <figure style="width: 48%; text-align: center; margin: 0;">
        <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251119113008349.png" alt="image-20251119113008349" style="width: 100%; border-radius: 5px;" />
        <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; font-style: normal;">
            <b>图16 HFSS仿真流程</b>
        </figcaption>
    </figure>
</div>

#### HFSS自动求解过程

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251119113405950.png" alt="image-20251119113405950" style="zoom:80%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图17 自动求解过程</b>
    </figcaption>
</figure>

# 第二章 模型与网络

## 2.1 HFSS中的建模与模型处理

### 2.1.1 建模环境、过程及工具介绍与演示

#### HFSS建模器中的三维物体

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251119114221103.png" alt="image-20251119114221103" style="zoom:100%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图1 几种实体的绘制</b>
    </figcaption>
</figure>

<figure style="text-align: center;">
    <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251119114103686.png" alt="image-20251119114103686" style="zoom:100%;" />
    <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
        <b>图2 三维实体的基本绘制方法</b>
    </figcaption>
</figure>

???note “几何属性对话框不出现？”
	如果在上面的步骤中，完成三维实体的绘制后，没有弹出几何属性对话框？
    <figure style="text-align: center;">
        <img src="https://fredericklog-1375058270.cos.ap-nanjing.myqcloud.com/typora/image-20251119114419355.png" alt="image-20251119114419355" style="zoom:100%;" />
        <figcaption style="font-size: 1.0em; color: #555; margin-top: 10px; margin-bottom: 5px; font-style: normal;">
            <b>图3 调出几何属性对话框的操作</b>
        </figcaption>
    </figure>



### 2.1.2 模型建立







### 2.1.3 模型导入









### 2.1.4 模型修复及简化









## 2.2 HFSS中的网格技术







# 第三章 材料与边界条件





# 第四章 激励与求解









# 第五章 算法与使用







# 第六章 后处理







# 第七章 优化与提速





# 第八章 场路协同实例