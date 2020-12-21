[资料](https://www.ruanyifeng.com/blog/2012/11/require_js.html)
# Javascript模块化编程（一）：模块的写法

```
let a=function(a){
    console.log(arguments[0])
}(1);

创建并且执行方法


```


###  放大模式

```
类的继承

let a=function(obj){
    obj.liuixn=function(){

    }
};
let c={};
a(c)
console.log(c);

```


### 宽方法模式

```
　var module1 = ( function (mod){

　　　　//...

　　　　return mod;

　　})(window.module1 || {});
```



### 输入全局模式

```
　　var module1 = (function ($, YAHOO) {

　　　　//...

　　})(jQuery, YAHOO);

    这两个全局变量即保持了相互的独立性又增加两个的依赖关系
```






# javascript AMD规范

```
主要的规范有两种 CommonJS和AMD

CommonJs(主要用于服务器模块的加载)

        加载一个模块

        var math = require('math');
    

AMD

    浏览器  不能采用同步加载模块，只能使用异步加载模块
        因为浏览器加载模块的速度取决于网络的速度，同步加载由于网络速度慢会使浏览器会卡很久造成假死的现象，所以只能采用异步加载


    require([module], callback); AMD 的模块加载的格式









```



### require.js的用法

```
require.js  采用了AM规范

require.js 优点
    （1）实现js文件的异步加载，避免网页失去响应；

　　（2）管理模块之间的依赖性，便于代码的编写和维护。




https://requirejs.org/docs/download.html

使用require.js的第一步，是先去官方网站下载最新版本。

下载后，假定把它放在js子目录下面，就可以加载了。

<script src="js/require.js"></script>




<script src="js/require.js" defer async="true" ></script>  使脚本异步加载

async 在IE中不支持  支持defer 所以建议两个都写上,这样就可以对不同浏览器进行兼容





加载require.js以后，下一步就要加载我们自己的代码了。假定我们自己的代码文件是main.js，也放在js目录下面。那么，只需要写成下面这样就行了：
<script src="js/require.js" data-main="js/main"></script>
data-main属性的作用是，指定网页程序的主模块。在上例中，就是js目录下面的main.js，这个文件会第一个被require.js加载。由于require.js默认的文件后缀名是js，所以可以把main.js简写成main。

   设置主模块之后，该主模块就会被第一个加载





主模块依赖其他的模块

　　require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){

　　　　// some code here

　　});


     在主模块里面会先加载     'jquery', 'underscore', 'backbone'  这三个模块然后在执行回调函数










四、模块的加载
    
    'jquery', 'underscore', 'backbone'    require.js会假定他们在同一目录  'jquery.js', 'underscore.js', 'backbone.js'

     当然我们也可以对他进行自定义的目录
        使用require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。

        注意 ：这个require.js的config()函数就写在

　require.config({

　　　　paths: {

　　　　　　"jquery": "jquery.min",
　　　　　　"underscore": "underscore.min",
　　　　　　"backbone": "backbone.min"

　　　　}

　　});



或者

　require.config({

　　　　paths: {

　　　　　　"jquery": "lib/jquery.min",
　　　　　　"underscore": "lib/underscore.min",
　　　　　　"backbone": "lib/backbone.min"

　　　　}

　　});


或者
　require.config({

　　　　baseUrl: "js/lib",

　　　　paths: {

　　　　　　"jquery": "jquery.min",
　　　　　　"underscore": "underscore.min",
　　　　　　"backbone": "backbone.min"

　　　　}

　　});

或者

　　require.config({

　　　　paths: {

　　　　　　"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"

　　　　}

　　});







```


### Amd 规范模块的书写

```
require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。



　　// math.js

　　define(function (){

　　　　var add = function (x,y){

　　　　　　return x+y;

　　　　};

　　　　return {

　　　　　　add: add
　　　　};

　　});

　// main.js

　　require(['math'], function (math){

　　　　alert(math.add(1,1));

　　});





如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。

　　define(['myLib'], function(myLib){

　　　　function foo(){

　　　　　　myLib.doSomething();

　　　　}

　　　　return {

　　　　　　foo : foo

　　　　};

　　});

当require()函数加载上面这个模块的时候，就会先加载myLib.js文件。



六、加载非规范的模块

理论上，require.js加载的模块，必须是按照AMD规范、用define()函数定义的模块。但是实际上，虽然已经有一部分流行的函数库（比如jQuery）符合AMD规范，更多的库并不符合。那么，require.js是否能够加载非规范的模块呢？

回答是可以的。

这样的模块在用require()加载之前，要先用require.config()方法，定义它们的一些特征。

举例来说，underscore和backbone这两个库，都没有采用AMD规范编写。如果要加载它们的话，必须先定义它们的特征。

　　require.config({

　　　　shim: {

　　　　　　'underscore':{
　　　　　　　　exports: '_'
　　　　　　},

　　　　　　'backbone': {
　　　　　　　　deps: ['underscore', 'jquery'],
　　　　　　　　exports: 'Backbone'
　　　　　　}

　　　　}

　　});

require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。

比如，jQuery的插件可以这样定义：

　　shim: {

　　　　'jquery.scroll': {

　　　　　　deps: ['jquery'],

　　　　　　exports: 'jQuery.fn.scroll'

　　　　}

　　}


七、require.js插件

require.js还提供一系列插件，实现一些特定的功能。

domready插件，可以让回调函数在页面DOM结构加载完成后再运行。

　　require(['domready!'], function (doc){

　　　　// called once the DOM is ready

　　});

text和image插件，则是允许require.js加载文本和图片文件。

　　define([

　　　　'text!review.txt',

　　　　'image!cat.jpg'

　　　　],

　　　　function(review,cat){

　　　　　　console.log(review);

　　　　　　document.body.appendChild(cat);

　　　　}

　　);

类似的插件还有json和mdown，用于加载json文件和markdown文件。

```