
/**
 * debug模式下打印
 */
export default class Log {
    debug(str: string, ...args: any[]) {
       console.log(str)
    }
    error(str: string, ...args: any[]) {
        console.error(str)
    }
    log(str: string, ...args: any[]) {
        console.log(str)
    }
    war(str: string, ...args: any[]) {
        console.log(str)
    }

}


