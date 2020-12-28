export default class encryptionMgr{
    encrypt(str):string{
        let e =encrypt.encrypt(str,"222",256)
        return e;
    }

    decrypt(str:string):string{
        let j=encrypt.decrypt(str,"222",256);
        return j;
    }
}

/**
 * 加密类型
 */
export enum E_ENCRYPTION_TYPE{

}
