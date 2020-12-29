import encryptionMgr, { E_ENCRYPTION_TYPE } from "../encryption/encryptionMgr";

/**
 * 数据模块
 */
export default class DataMgr {
    private _encry:encryptionMgr=null;
    constructor(){
        if(!this._encry){
            this._encry=new encryptionMgr();
        }
    }
    /**
     *  统一存储
     * @param key 
     * @param data 
     * @param encryType  加密类型
     */
    saveD(key: string, data: any,encryType:E_ENCRYPTION_TYPE=E_ENCRYPTION_TYPE.NODE) {
        let str=JSON.stringify(data);
        let jm=this._encry.encrypt(str,"liuxin",encryType);
        cc.sys.localStorage.setItem(key, jm);
    }

   /**
    * 获取数据
    * @param key 
    * @param encryType  加密类型
    */
    getD<T>(key: string,encryType:E_ENCRYPTION_TYPE=E_ENCRYPTION_TYPE.NODE): T {
        let str = cc.sys.localStorage.getItem(key);
        //解密
        let jiemi=this._encry.decrypt(str,"liuxin",encryType);
        let  j = JSON.parse(jiemi);
        return j;
    }
    /**
     * 删除数据
     * @param key 
     */
    rmD(key) {
        cc.sys.localStorage.removeItem(key);
    }

    
}



