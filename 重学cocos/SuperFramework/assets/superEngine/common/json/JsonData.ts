export default class JsonData<T extends {id:number|string}>{
    private _array:Array<any>=[];
    private _idkey:{[key:string]:any}={};
    
    constructor(array:Array<any>){
        this._array=array;
        for(let i=0;i<array.length;i++){
            let data= array[i]
            this._idkey[`${data.id}`]=data;
        }
    }

    /**
     * 根据id查找对象
     * @param id 
     */
    Get(id:number|number):T{
        return this._idkey[`${id}`];
    };

    /**
     * 查找所有的元素
     */
    All():Array<T>{
       return this._array;
    };

    
    
}

