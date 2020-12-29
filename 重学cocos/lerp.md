### lerp()

```
函数意义
    lerp(y1,y2.weight)=y1+(y2-y1)*weight
    
    weight=[0,1] 才有意义

    转换公式
     lerp(y1,y2.weight)=(1-weigit)*y1+y2*weight

    当前 w=1; 值为y2

    当 w= 0  值为y1

    当w=0.5   值0.5*y1+0.5y2 
```
