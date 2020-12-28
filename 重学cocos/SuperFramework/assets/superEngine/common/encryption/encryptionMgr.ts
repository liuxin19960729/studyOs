export default class encryptionMgr{
    encrypt(str):string{
        if(!window.encryptjs.encrypt){
            window.encryptjs();
        }
        let e=window.encryptjs.encrypt(str,"222",256);
        return e;
    }

    decrypt(str:string):string{
        if(!window.encryptjs.decrypt){
            window.encryptjs();
        }
        let j=window.encryptjs.decrypt(str,"222",256);
        return j;
    }
}

/**
 * 加密类型
 */
export enum E_ENCRYPTION_TYPE{

}
