import AbstractPlugin from "../plugin/AbstractPlugin";
import Bean from "./Bean";
/**
 * 参数类
 */
export default class Param<T>{
    private _array=[];
    private _map:{[key:string]:any}={};
    constructor(...args:Array<Bean<T>>){
        
    }

    getBean(type:typeof AbstractPlugin |string){
       
    }
}
