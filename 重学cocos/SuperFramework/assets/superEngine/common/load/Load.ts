
/**
 * 加载
 */
export default class Load{
    load<T>(url: string,type: typeof cc.Asset,cb:(data:any,err:Error)=>void)  {
        cc.resources.load(url,type,(err,data)=>{
            cb(data,err);
        });
    }
    release(url: string) {
        
    }
    loadDir(url: string,type: typeof cc.Asset,cb:(data:any,err:Error)=>void) {
        cc.resources.loadDir(url,type,(err,data)=>{
            cb(data,err);
        });
    }

}
