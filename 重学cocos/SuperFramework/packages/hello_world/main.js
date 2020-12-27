
/**
 * Cocos Creator 会开始搜索并加载扩展包。Cocos Creator 有两个扩展包搜索路径，“全局扩展包路径”和“项目扩展包路径”
 * 程序的入口
 */
'use strict';

module.exports = {
  /**
   * 入口程序加载首先执行的方法
   * 
   * 做一些初始化的工作
   */  
  load () {
    // Editor.log("包加载");
    // const fs=require("fs");
    // const path = require('path');
    // fs.mkdirSync(path.join(Editor.Project.path,"ss"))
    Editor.success('New folder created!');
  },


  /**
   * 包卸载之前执行
   * 
   * 卸载之前做一些清理工作
   */
  unload () {
     Editor.log("包卸载");
  },
   //注册成 IPC 消息
  messages: {
    'say-hello' () {
      // Editor.log('点击1');
      // const fs=require("fs");
      // const path = require('path');
      // fs.mkdirSync(path.join(Editor.Project.path,"ss"))
      // Editor.success('New folder created!');
    },
    'say-hello2' () {
        Editor.log('点击2');
      },
      'open' () {
        // open entry panel registered in package.json
        Editor.Panel.open('hello-world');
      }
  },
};