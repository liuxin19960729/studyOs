/**
 * 数据模块
 */
export default class DataMgr {

    /**
     * 统一存储
     * @param key 
     */
    saveD(key: string, data: any) {
        let str=JSON.stringify(data);
        cc.sys.localStorage.setItem(key, str);
    }

    /**
     * 获取数据
     * @param key 
     * @param Class 
     */
    getD<T>(key: string): T {
        let str = cc.sys.localStorage.getItem(key);
        let  j = JSON.parse(str);
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



