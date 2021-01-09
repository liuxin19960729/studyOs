import AbstractPlugin from "../plugin/AbstractPlugin";
import StroagePlugin from "./StroagePlugin";

/**
 * 默认的存储模块
 */
export default class DefaultStroagePlugIn extends AbstractPlugin implements StroagePlugin{
    save(key: string, str: string) {
        cc.sys.localStorage.setItem(key, str);
    }
    get(key: string): string {
        let str = cc.sys.localStorage.getItem(key);
        return str;
    }
    /**
     * 删除数据
     * @param key 
     */
    del(key: string) {
        cc.sys.localStorage.removeItem(key);
    }  
}



