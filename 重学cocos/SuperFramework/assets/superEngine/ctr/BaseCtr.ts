/**
 * BASE 模块控制类
 */
export default class BaseCtr<T>{
    protected _init:boolean=false;
    protected _data:T=null;
    start(data?:T) {
        if(!this._init){
            this._init=true;
            this.addListen();
            this.onShow();
        }
    }

    /**
     * 初始化UI类
     */
    protected onShow(){

    }

    /**
     * 用于事件注册方法
     */
    protected addListen(){

    }

    /**
     * 去除事件注册方法
     */
    protected removeListen(){

    }
    
    end() {
        if(this._init){
            this._init=false;
            this._data=null;
            this.removeListen();
            this.onHiden();
        }
    }

    /**
     * 结束ui
     */
    protected onHiden(){

    }    
}
