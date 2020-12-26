import { LoadBase } from "./LoadBase";

/**
 * 加载Json
 */
export default class LoadJson extends LoadBase{
    
    load(url,cb:(data?: any, err?: Error) => void){
        const self=this;
        cc.resources.load(url,cc.JsonAsset,(err,data)=>{
            cb&&cb(data,err);
        })
    }

    release(){

    }

    loadDir(url: string, cb:(data?: any, err?: Error) => void){
        cc.resources.loadDir(url,cc.JsonAsset,(e,d)=>{
            cb&&cb(d,e)
        });
    }

    
}
