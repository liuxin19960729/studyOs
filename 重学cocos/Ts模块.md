```

非默认模块到导入和写法
export xxx 
import  {xxx}  from "xxx.js的地址"


模块引入取别名

import  {xxx as  xx}  from "xxx.js的地址"



默认模块导入和引用写法
export default  xx
import  xx  from "xxx.js的地址"




模块导出取别名
export  {Test as  G};




重新导出

main.ts
import { T } from "./t2";


class Testa extends T{
    a(): string {
        return "实现了";
    }
}


let t= new Testa();
console.log(t.a())
console.log(t.b())





ts2.ts

export {Test as T} from "./ts1"  把  Ts1 里卖弄的Test模块重新导出




ts1.ts
 export class Test{
    a():string{
        return "1";
    };

    b():string{
        return "1";
    };
}



导出文件里卖弄有多个导出 可是使用  *
import  *  as ts1 from "./ts1";
class Testa extends  ts1.Test{










```

### 默认导出


```
每个模块只能有一个default导出

export default $;


```



### export = 和 import = require()
```
    CommonJS和Amd 规范含有
```