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
     * 加载json
     */
    loadJson(url:string,type:URL_TYPE=URL_TYPE.FILE):Promise<cc.JsonAsset|Array<cc.JsonAsset>>{
        const self=this;
        if(self._cachepath[url+type]) return;//说明已经缓存
        if(type==URL_TYPE.FILE){
            return new Promise<cc.JsonAsset>((resl,rej)=>{
                self._load.load(url,cc.JsonAsset,(data,err)=>{
                    if(err){
                        rej(err);
                    }else{
                        resl(data);
                    }
                })
            })
        }else if(type==URL_TYPE.DIR){
            return new Promise<Array<cc.JsonAsset>>((resl,rej)=>{
                self._load.loadDir(url,cc.JsonAsset,(data,err)=>{
                    if(err){
                        rej(err);
                    }else{
                        resl(data);
                    }
                })
            })
        }
        G.log.error("no  have  type");   
        return null;
    }
    /**
     * 加载并缓存Json
     */
    async cacheLoadJson(url:string,type:URL_TYPE=URL_TYPE.FILE){
        const self=this;
        if(!this.loadJson(url,type)) return;
        await this.loadJson(url,type).then((data)=>{
            self._cachepath[url+type]=1;
            //缓存起来啊
            G.json.saveJson(data);
        }).catch((err)=>{
            G.log.error(err);
        })
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
