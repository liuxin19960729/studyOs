import G from "../../G";
import { LoadInterface } from "./LoadBase";
import LoadJson from "./LoadJson";
import LoadMusic from "./LoadMusic";
import LoadPrefeb from "./LoadPrefeb";
import LoadSprite from "./LoadSprite";

/**
 * 加载工具类
 */
export class Loader {
    private _sprite: LoadInterface = null;
    private _musci: LoadInterface = null;
    private _prefeb: LoadInterface = null;
    private _json: LoadInterface = null;

    /**
     * 异步加载数据(单个加载)
     * @param type 
     * @param url 
     * @param cb 
     * 
     * 
     * 
     */
    loader(type: E_LOAD_TYPE, url: string, cb?: (data: any, err: Error) => void) {
        let bean = this._getLoad(type);
        if (!bean) {
            G.log.error("type 不正确")
            return;
        }
        bean.load(url, cb)
    }

    /**
     * 同步加载数据(单个加载)
     * @param type 
     * @param url 
     * @param cb 
     * 
     * 
     * 同步使用方式
     * 
     * 
     *  ```js
     *   async aaa(){
     *         awit    G.loader.synloader(xxx,xx,xxx).then().cache();        
     *        }
     *  ```
     */


    synloader(type: E_LOAD_TYPE, url: string, cb?: (data: any, err: Error) => void): Promise<any> {
        let bean = this._getLoad(type);
        if (!bean) {
            G.log.error("type 不正确")
            return;
        }
        return bean.syncload(url, cb)
    }
    

    /**
     * 异步批量加载资源
     * @param type 
     * @param url 
     * @param cb 
     */
    loaderDir(type: E_LOAD_TYPE, url: string, cb?: (data: any, err: Error) => void) {
        let bean = this._getLoad(type);
        if (!bean) {
            G.log.error("type 不正确")
            return;
        }
        bean.loadDir(url, cb)
    }



    /**
     * 同步批量加载资源
     * @param type 
     * @param url 
     * @param cb 
     */
    synloaderDir(type: E_LOAD_TYPE, url: string, cb?: (data: any, err: Error) => void): Promise<any> {
        let bean = this._getLoad(type);
        if (!bean) {
            G.log.error("type 不正确")
            return;
        }
        return bean.syncLoadDir(url, cb)
    }

    release(type: E_LOAD_TYPE, url: string, cb?: Function) {
        let bean = this._getLoad(type);
        if (!bean) {
            G.log.error("type 不正确")
            return;
        }
        bean.release(url, cb)
    }


    /**
     * 获取对应type的load的实体类
     * @param type 
     */
    private _getLoad(type: E_LOAD_TYPE): LoadInterface {
        let a: LoadInterface = null;
        if (type == E_LOAD_TYPE.E_JSON) {
            if (!this._json) {
                this._json = new LoadJson();
            }
            a = this._json;
        } else if (type == E_LOAD_TYPE.E_MUSIC) {
            if (!this._musci) {
                this._musci = new LoadJson();
            }
            a = this._musci;
        } else if (type == E_LOAD_TYPE.E_SPRITE) {
            if (!this._sprite) {
                this._sprite = new LoadJson();
            }
            a = this._sprite;
        } else if (type == E_LOAD_TYPE.E_PREFEB) {
            if (!this._prefeb) {
                this._sprite = new LoadJson();
            }
            a = this._sprite;
        }
        return a
    }





}


/**
 * 加载资源的类型
 */
export enum E_LOAD_TYPE {
    E_SPRITE,//图片
    E_JSON,//加载JSON
    E_PREFEB,//加载预制体
    E_MUSIC,//加载音乐
}






