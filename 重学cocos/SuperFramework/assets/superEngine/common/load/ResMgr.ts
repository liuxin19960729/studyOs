import G from "../../G";
import Load from "./Load";

export default class ResMgr{
    private _load:Load=null;
    /**
     * 缓存路径
     */
    private _cachepath:{[key:string]:number}={};
    constructor(){
        if(!this._load){
            this._load=new Load();
        }
    }



    /**
     * 加载图片
     */
    loadSprite(){

    }

    /**
     * 加载并缓存图片
     */
    cacheLoadSprete(){

    }

    /**
     * 加载音乐
     */
    loadMusic(){

    }

    /**
     *   缓存并加载音乐
     */
    cacheLoadMusic(){

    }


    /**
     * 加载预制体
     */
    loadPrefeb(){

    }

    /**
     * 加载并缓存预制体
     */
    cacheLoadPrefeb(){

    }

}

export enum URL_TYPE{
    FILE,//文件
    DIR ,//文件夹
}
