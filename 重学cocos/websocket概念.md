
### 为什么需要使用WebSockets

[资料](https://forum.cocos.org/t/cocos-creator/84649)
```
主要运用的场景是
    1.服务端可以主动向可客户端推送数据
    2.可以提高游戏数据的实时性

```


### webSocket支持的平台

```
    andriod 
    ios
    web浏览器
```


### 了解websocket协议
```
websocket 是基于tcp/ip协议的引用层协议
websocket是长连接协议
websocket能双向通信  c-->s   s-->c


```



### 使用websocket步骤

```
1.创建websocket对象  传入两个参数 [url ,协议字符串(字符串数组)]

    url:
        url参数非常重要，主要分为4部分协议://地址:端口/资源，比如ws://echo.websocket.org：

        协议：必选项，默认是ws协议，如果需要安全加密则使用wss。
        地址：必选项，可以是ip或域名，当然建议使用域名。
        端口：可选项，在不指定的情况下，ws的默认端口为80，wss的默认端口为443。
        资源：可选性，一般是跟在域名后某资源路径，我们基本不需要它。

```


### websocket的状态
```
    4种状态  readeState 可以查询状态
    0  CONNECTING  未建立连接
    1 OPEN  建立连接可以通信
    2 CLOSING  正在关闭握手 ，或者close()方法已经调用
    3 CLOSE 连接已关闭
```



### websocket的api

```
websocket只有2个API，void send( data ) 发送数据和void close( code, reason ) 关闭连接。


send(data)
    data的数据类型
    string
    ==下面的类型是数据的二进制的类型
    ArrayBufferLike
    Bob(默认二进制类型)
    ArrayBufferView


    传入文件这种较为固定的数据用Bob二进制类型传输
    ArrayBuffer 二进制类型较为灵活

    非Bob类型转化为Bob类型 使用Bob的构造函数



    使用send方法的建议
    在发送数据时官方有2个建议：

    检测websocket对象的readyState是否为OPEN，是才进行send。
    检测websocket对象的bufferedAmount是否为0，是才进行send（为了避免消息堆积，该属性表示调用send后堆积在websocket缓冲区的还未真正发送出去的数据长度）。
    close方法接收2个可选的参数，code表示错误码，我们应该传入1000或3000～4999之间的整数，reason可以用于表示关闭的原因，长度不可超过123字节。

```



### webSocket的回调

```
websocket的回调
websocket提供了4个回调函数供我们绑定：

onopen：连接成功后调用。
onmessage：有消息过来时调用：传入的对象有data属性，可能是字符串、blob或arraybuffer。
onerror：出现网络错误时调用：传入的对象有data属性，通常是错误描述的字符串。
onclose：连接关闭时调用：传入的对象有code、reason、wasClean等属性。
注意：当网络出错时，会先调用onerror再调用onclose，无论何种原因的连接关闭，onclose都会被调用。
```

[资料2](http://www.websocket.org/echo.html)


资料参考
```
参考
https://www.w3.org/TR/websockets/ 36
https://developer.mozilla.org/en-US/docs/Web/API/Blob 19
http://www.websocket.org/echo.html 70
http://www.websocket-test.com/ 11
```





