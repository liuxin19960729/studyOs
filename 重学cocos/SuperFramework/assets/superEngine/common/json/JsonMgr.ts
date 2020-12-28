import JsonData from "./JsonData";

/**
 * Json管理
 */
export default class JsonMgr{
    
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
}
