module.exports = {
    /**
     * 入口程序加载首先执行的方法
     * 
     * 做一些初始化的工作
     */  
    load () {
        Editor.log("panel加载");
    },
  
  
    /**
     * 包卸载之前执行
     * 
     * 卸载之前做一些清理工作
     */
    unload () {
      
    },
}