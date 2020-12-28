import G from "../../G";
import Load from "../load/Load";
import JsonData from "./JsonData";

/**
 * Json管理
 */
export default class JsonMgr{
    private _load:Load=null;
    constructor(){
        if(!this._load){
            this._load=new Load();
        }
    }
    
    private _jsonData:{[key:string]:JsonData<any>}={};


    properties=[
        "t_book_template",
        "t_adven_template",
    ]
    /**
     * 保存Json
     */
    saveJson(json:Array<cc.JsonAsset>|cc.JsonAsset){
        if(json instanceof Array){
            json.forEach(v=>{
               this._setJsonData(v)
            })
        }else{
            this._setJsonData(json)
        }
    }

    private _setJsonData(json:cc.JsonAsset){
        let name=json.name;
        if(this.properties.indexOf(name)!=-1&&!this._jsonData[name]){
            this._jsonData[name]=new JsonData<any>(json.json);
        }
    }

    
    getJsonData(name:string):JsonData<any>{
        return this._jsonData[name];
    }




    get t_adven_template():JsonData<dt.Advenemplate>{
        return this.getJsonData("t_adven_template")
    }
    get t_book_template():JsonData<dt.BookTemplate>{
         return this.getJsonData("t_adven_template")
    }

        /**
     * 加载json
     */
    private _loadJson(url:string):Promise<cc.JsonAsset|Array<cc.JsonAsset>>{
        const self=this;
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

        /**
     * 加载并缓存Json
     */
    async loadJson(url:string){
        const self=this;
        if(!this._loadJson(url)) return;
        await this._loadJson(url).then((data)=>{
            //缓存起来啊
           self.saveJson(data);
        }).catch((err)=>{
            G.log.error(err);
        })
    }
}
