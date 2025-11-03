# Dive into Deep Learning

!!! note
    使用教材《动手学深度学习》
## 预备知识
### 数据操作
!!! note
    为了能够完成各种数据操作，我们需要某种方法来存储和操作数据。 通常，我们需要做两件重要的事：（1）获取数据；（2）将数据读入计算机后对其进行处理。 如果没有某种方法来存储数据，那么获取数据是没有意义的。

​	首先，我们介绍维数组，也称为*张量*（tensor）。 使用过Python中NumPy计算包的读者会对本部分很熟悉。 无论使用哪个深度学习框架，它的*张量类*（在MXNet中为`ndarray`， 在PyTorch和TensorFlow中为`Tensor`）都与Numpy的`ndarray`类似。 但深度学习框架又比Numpy的`ndarray`多一些重要功能： 首先，GPU很好地支持加速计算，而NumPy仅支持CPU计算； 其次，张量类支持自动微分。 这些功能使得张量类更适合深度学习。 如果没有特殊说明，本书中所说的张量均指的是张量类的实例。















## 参考文献

- Zhang, Aston, Lipton, Zachary C., Li, Mu, and Smola, Alexander J. (2023). *Dive into Deep Learning*. Cambridge University Press. [Online]. Available: [https://D2L.ai](https://D2L.ai)
