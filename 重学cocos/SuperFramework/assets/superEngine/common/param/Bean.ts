import BeanProperties from "./BeanProperties";

/**
 * Bean类
 */
export default class Bean<T>{
    private _bean: T;
    private _p: BeanProperties;
    private _status: E_BEAN_STATUS;//bean的状态

    constructor(bean:T,propiets:BeanProperties){
        this.bean=bean;
        this._p=propiets;
    }
    public get bean(): T {
        return this._bean;
    }
    public set bean(value: T) {
        this._bean = value;
    }

    public get p(): BeanProperties {
        return this._p;
    }
    public set p(value: BeanProperties) {
        this._p = value;
    }
    
    public get status(): E_BEAN_STATUS {
        return this._status;
    }
    


}
/**
 * BEAN的状态
 */
enum E_BEAN_STATUS{
    DEATH,
    LIVE,
}
