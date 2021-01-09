/**
 * Bean的属性配置类
 * 
 * 创建类型默认是单例
 */
export default class BeanProperties{
    private _id: string;
    private _create: E_BEAN_TYPE;
   
    constructor(id:string,create:E_BEAN_TYPE=E_BEAN_TYPE.SINGLE){
        this._id=id;
        this._create=create;
    }

    public get create(): E_BEAN_TYPE {
        return this._create;
    }
    public get id(): string {
        return this._id;
    }
    


}
export enum E_BEAN_TYPE{
    SINGLE,//单例
    MUTI,//每次获取重新创建
}


