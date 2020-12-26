const {ccclass, property} = cc._decorator;
/**
 * 
 * start  和 onLoad  方法常常用于组件的初始化
 * 
 * 注意 但是不要ui初始化都用在  onLoad  里面这样会找成很大的性能消耗
 * 
 * 
 */
@ccclass
export default class UiBase<T>extends cc.Component {
    private _data: T = null;
    
    private _isShow:boolean=false;

    /**
     * 获取数据
     */
    get data():T{
            return this._data;
    }
    /**
     * 设置数据
     * @param data 
     */
    set data(data:T){
        this._data=data;
    }

    protected onLoad(){
        this.init();
    }
    /**
     * active true 执行  执行在start之前  onLoad 之后
     * 
     * 注意该方法建议不要在在继承之后重写该方法
     */
    protected onEnable(){
        this._isShow=true;
        this.onShow();
    }

    /**
     * 显示
     * @param data 
     */
    show(data?:T){
         /**
          * 设置数据
          */
        if(data) this.data=data;
        if(!this._isShow){
            this.node.active=true
        }else{
            this.onShow();
        }
    }

    /**
     * 隐藏
     */
    hiden(){
        if(this._isShow){
            this.node.active=false;
        }
    }

    /**
     * active  =fase执行
     * 销毁的时候会先执行这个方法在执行onDestory()
     */
    protected onDisable(){
        this._isShow=false;
        this.onHidden();
    }
    /**
     * 最先执行的方法
     * 用于简单的数据的初始化
     * 
     * 和事件的注册
     */
    protected init(){

    }

    protected onShow(){

    }

    /**
     * 建议  不要在这里面的进行事件移除
     * 
     * active  变为  false调用该方法
     */
    protected onHidden(){

    }



}




   /**
     * 在所有start方法之前执行
     * 在节点激活的时执行一次
     * 
     * 
     * 建议做一些初始化的工作
     * 不要在里面进行太多的操作这样可能会对性能找成影响
     */
    // onLoad(){

    // }



    /**
     * 改方法只在节点被激活的时候执行一次
     * 
     * 在第一次本对象update()方法执行之前执行
     * 
     * onload-->onenable-->start()--update
     */
    // start(){

    // }
    

    // /**
    //  * 每帧渲染调用一次改方法    执行与动画粒子物理之前
    //  */
    // update(){

    // }


    // /**
    //  * 主要用于画粒子物理之后执行
    //  */
    // lateUpdate(){

    // }

    /**
     * enabhle  激活   active  =true  会掉调用
     */
    // onEnable(){

    // }

        /**
         * enable =false    active=false 会调用
         */
        // onDisable(){

        // }


        /**
         *   销毁的时候执行
         */
        // onDestroy(){

        // }
/**
 * 注意：
 * 调用destroy()的时候
 * 
 * 不会立即进行节点销毁
 * 会在当前帧结束的时候进行统一的销毁
 * 
 * 
 * 方法调用先调用 onDisable()  -->  onDestroy();
 */



 /**
  * onLoad -> onEnable -> start -> update -> lateUpdate -> onDisable -> onDestroy  组件里面的方法生命周期
  * 
  * onLoad  和 start  只有在第一次激活的时候才执行并且只能执行一次
  * 
  * 
  */
