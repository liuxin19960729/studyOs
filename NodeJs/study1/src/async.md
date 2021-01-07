```
All these functions assume you follow the Node.js convention of providing a single callback as the last argument of your asynchronous function -- a callback which expects an Error as its first argument -- and calling the callback once.
    assume   /əˈsjuːm/   vi. 设想；承担；采取
    follow   遵循  跟随
    convention  /kənˈvenʃn/   n. 大会；[法] 惯例；[计] 约定；[法] 协定；习俗
    expects    /ɪkˈspekt/    vt. 期望；指望；认为；预料

    翻译：
        这些所有的函数假设你遵守NodeJs规定,提供一个回调函数在异步函数中作为最后一个参数，--回调函数 第一个形参认为是错误  --这个回调参数值调用一次
```




### map方法

``` js
var index={
    ....,
    map: map$1,
    ....
}
exports.default = index;  index包含了async.js

exports.map = map$1;  直接把map对象导出


function map (coll, iteratee, callback) {
                    return _asyncMap(eachOf$1, coll, iteratee, callback)
                }
 var map$1 = awaitify(map, 3);
         map参数传入的是
                

                
    function awaitify (asyncFn, arity = asyncFn.length) {
        if (!arity) throw new Error('arity is undefined')
        function awaitable (...args) {
            //判断第二个参数是否是一个方法
            if (typeof args[arity - 1] === 'function') {
                return asyncFn.apply(this, args)
            }

            return new Promise((resolve, reject) => {
                args[arity - 1] = (err, ...cbArgs) => {
                    if (err) return reject(err)
                    resolve(cbArgs.length > 1 ? cbArgs : cbArgs[0]);
                };
                asyncFn.apply(this, args);
            })
        }

        return awaitable
    }

    // 若传入map的第二个参数是 function

    asyncFn.apply(this, args)

                apply()学习

                A对象.方法名.apply(对象,参数)

                A={
                    方法名:function(a,b){
                        this 记住这里面的this就是apply传入的对象
                    }
                }
                

      执行   _asyncMap(eachOf$1, coll, iteratee, callback) 方法
       
      
       
       var eachOf$1 = awaitify(eachOf, 3);
          
          /*
                arr  []   map第一个参数 
                iteratee  map第二个参数
                callback  map第三个参数
          */
          function _asyncMap(eachfn, arr, iteratee, callback) {
                arr = arr || [];
                var results = [];
                //初始化 
                var counter = 0;
                /*
                    Symbol.toStringTag

                */
                var _iteratee = wrapAsync(iteratee);

                return eachfn(arr, (value, _, iterCb) => {
                    var index = counter++;
                    _iteratee(value, (err, v) => {
                        results[index] = v;
                        iterCb(err);
                    });
                }, err => {
                    callback(err, results);
        });
    }
     


    //第二个参数不是方法返回Promise 对象




```