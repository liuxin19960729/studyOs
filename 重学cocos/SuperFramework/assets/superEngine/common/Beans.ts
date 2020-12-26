/**
 * bean的容器
 */
export default class Beans{
    static _beans:{[key:string]:any}={};
    static getBean<T>(n:string,Class:{new():T; }):T{
        if(!this._beans[n]){
            this._beans[n]=new Class();
        }
        return this._beans[n];
    }
}
