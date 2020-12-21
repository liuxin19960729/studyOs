# Ts脚本相关学习
```
tsconfig.json 相关介绍
{
  "compilerOptions": {
    "module": "commonjs",
    "lib": [ "es2015", "es2017", "dom" ],
    "target": "es5",
    "experimentalDecorators": true,
    "skipLibCheck": true,
    "outDir": "temp/vscode-dist",
    "forceConsistentCasingInFileNames": true
  },
  "exclude": [
    "node_modules",
    "library",
    "local",
    "temp",
    "build",
    "settings"
  ]
}

tsconfig.json 放在 ts 项目的根目录
    作用：这个文件指定项目的根文件和编译选项


    执行tsc编译器  在当前目录下找不到会逐级向上进行查找

    tsc  -p  xxxx   xxxx指定一个带tsconfig.json的文件


compilerOptions 属性
    module 指定生成哪个模块系统代码 cocos 的模块化规范是ConmmonJs模块规范





```

[CommonJS模块规范](../studyweb/js/模块规范/CommonJS模块规范.md)






### Ts里面的模块

```
        模块是用模块加载器去导入其他模块， 任何包含顶级 import或者 export的文件被当成一个模块如果不带有import或者export申明他的内容被视为全局可见



        export default $;  默认导出
```





### 生成模块代码



