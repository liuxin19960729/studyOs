/**
 * 存储插件
 */
export default interface StroagePlugin{
    save(key:string,str:string);
    get(key:string):string;
    del(key:string);
}
