### 概念
```
mvvm   model view  viewmodel  的缩写


MVVM最早由微软提出来，它借鉴了桌面应用程序的MVC思想，在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离。

把Model和View关联起来的就是ViewModel。ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model。


viewModel   就是关联  Model(数据)  和view  和展示层中间的媒介

```



### ViewModel是如何编写的

```

var person = {
    name: 'Bart',
    age: 12
};

先把上面的person看成是Model
Dom节点看待成View

要把显示的name从Bart改为Homer，把显示的age从12改为51，我们并不操作DOM，而是直接修改JavaScript对象：

person.name = 'Homer';
person.age = 51;



我们惊讶地发现，改变JavaScript对象的状态，会导致DOM结构作出对应的变化！这让我们的关注点从如何操作DOM变成了如何更新JavaScript对象的状态，而操作JavaScript对象比DOM简单多了！

上面这段话就是我们要写的ModelView


```




### mvvm的框架

```
mvvm框架
Angular：Google出品，名气大，但是很难用；

Backbone.js：入门非常困难，因为自身API太多；

Ember：一个大而全的框架，想写个Hello world都很困难。

vue


```