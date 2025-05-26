---
comments: true
statistics: true
---


# Markdown Learning
!!! note
    Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。Markdown 由 John Gruber 于 2004 年创建，如今已成为世界上最受欢迎的标记语言之一。

## 1. How to Use Markdown





## 2. More Extensions

### 2.1. Extension of Markdown
#### 2.2.1 Admonitions
!!! note
    MkDocs 材料提供了几种不同类型的标注，并允许包含和嵌套任意内容。

```yaml
markdown_extensions:
  - admonition
  - pymdownx.details
  - pymdownx.superfences
```

用法速看：

- **一般标注**

``` md
!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

!!! note
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
	nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
	massa, nec semper lorem quam in massa.

- **带标题的标注**

```md
!!! note "Phasellus posuere in sem ut cursus"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```

!!! note  "Phasellus posuere in sem ut cursus"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismodnulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctormassa, nec semper lorem quam in massa.

- **可折叠块**
```md
???(+ 添加加号默认展开) note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.
```
??? note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

- **内联块**

提示也可以渲染为内联块（例如，用于侧边栏），使用 + 修饰符将它们放在右侧，或仅使用修饰符将它们放在左侧：inline end inline
!!! info inline end "Lorem ipsum"

    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nulla et euismod nulla.
    Curabitur feugiat, tortor non consequat
    finibus, justo purus auctor massa, nec
    semper lorem quam in massa.

```md
!!! info inline end "Lorem ipsum"
     Lorem ipsum dolor sit amet, 
     consecteturadipiscing elit. 
     Nulla et euismod nulla.Curabitur 
     feugiat, tortor non 
     consequatfinibus, justo 
     purus 
     auctor massa, necsemper 
     lorem quam in massa.
```
!!! info inline "Lorem ipsum" 

    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nulla et euismod nulla.
    Curabitur feugiat, tortor non consequat
    finibus, justo purus auctor massa, nec
    semper lorem quam in massa.

```md
!!! info inline "Lorem ipsum" 

    Lorem ipsum dolor sit amet,
     consectetur
    adipiscing elit. Nulla et 
    euismod nulla.
    Curabitur feugiat, tortor non consequat
    finibus, justo purus auctor massa, nec
    semper lorem quam in massa.
```
**重要提示：**使用修饰符的告诫必须在要放置它们的内容块之前声明。如果块旁边没有足够的空间来呈现告诫，则告诫将拉伸到视区的整个宽度

- **支持的类型：**
    
    note：标记

    abstract：摘要
    
    info：信息
    
    tip：技巧
    
    success：成功
    
    question：问题
    
    warning：警告
    
    failure：失败
    
    danger：危险
    
    bug：bug
    
    example:举例
    
    quote：引用

> 如要更改外观，可以借鉴[官方网站](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#inline-blocks-inline-end)

#### 2.2.2 Annotations
!!! note
    Material for MkDocs 的旗舰功能之一是能够注入注释——几乎可以在文档中的任何位置添加的小标记，并在单击或键盘焦点时扩展包含任意 Markdown 的工具提示。

!!! info "todo list"
    - [ ] trans [official doc](https://squidfunk.github.io/mkdocs-material/reference/annotations/)
#### 2.2.2 Arithmatex

!!! note
    Arithmatex 扩展允许渲染块和内联块方程，并与数学排版库 MathJax1 无缝集成。

- 使用块语法

当输入为：
`$$
\cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k}
$$`

渲染过后的效果：

$$
\cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k}
$$

- 使用内联公式

将需要用公式显示的语句使用 `$...$` 或者 `\(...\)`囊括起来




##### references
[官方文档](https://markdown.com.cn/)

[python markdown扩展版](https://squidfunk.github.io/mkdocs-material/setup/extensions/python-markdown-extensions/#arithmatex-docsjavascriptsmathjaxjs)