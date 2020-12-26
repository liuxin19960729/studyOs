

/**
 * 加载资源基类
 *      用于所有资源加载类的公共方法
 */
export abstract class LoadBase implements LoadInterface {
    syncload(url: string, cb?: (data?: any, err?: Error) => void): Promise<any> {
        return new Promise((res, rej) => {
            this.load(url, (data, err) => {
                if (err) {
                    rej(err);
                    cb && cb(null, data)
                } else {
                    res(data);
                    cb && cb(data, data);
                }
            })
        })
    }
    syncrelease(url: string, cb:(data?: any, err?: Error) => void): Promise<any> {
        return new Promise((res, rej) => {
            // this.release(url, () => {
            //     cb && cb();
            // })
        })
    }
    load(url: string, cb?:(data?: any, err?: Error) => void) {

    };


    loadDir(url: string, cb?:(data?: any, err?: Error) => void) {

    }
    syncLoadDir(url: string, cb?:(data?: any, err?: Error) => void):Promise<any> {
        return new Promise((res, rej) => {
            this.loadDir(url, (data, err) => {
                if (err) {
                    rej(err);
                    cb && cb(null, data)
                } else {
                    res(data);
                    cb && cb(data, data);
                }
            })
        })
    }
    release(url: string, cb?:(data?: any, err?: Error) => void) {

    }
}


/**
 * 加载方法规范
 */
export interface LoadInterface {
    /**
     * 加载资源(单个加载)
     */
    load(url: string, cb:(data?: any, err?: Error) => void);
    /**
     * 释放资源
     */
    release(url: string, cb:Function);

    /**
     *  同步加载资源(单个加载)
     */
    syncload(url: string, cb:(data?: any, err?: Error) => void);
    /**
     *  同步释放资源
     */
    syncrelease(url: string, cb:(data?: any, err?: Error) => void);

    /**
     * 加载资源(批量加载)
     */
    loadDir(url: string, cb:(data?: any, err?: Error) => void);
    /**
     * 同步加载资源(批量加载)
     */
    syncLoadDir(url: string, cb:(data?: any, err?: Error) => void);

}



