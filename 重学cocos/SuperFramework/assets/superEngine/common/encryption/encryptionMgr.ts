/**
 * 加密模块
 */
export default class encryptionMgr{
    /**
     * 加密
     * @param plaintext  字符串
     * @param secretkey  盐
     * @param type 加密类型
     */
    encrypt(plaintext:string,secretkey:string,type:E_ENCRYPTION_TYPE=E_ENCRYPTION_TYPE.AES_256):string{
        let e =encrypt.encrypt(plaintext,secretkey,type)
        return e;
    }

    /**
     * 解密
     * @param ciphertext 
     * @param secretkey 盐
     * @param type  加密类型
     */
    decrypt(ciphertext:string,secretkey:string,type:E_ENCRYPTION_TYPE=E_ENCRYPTION_TYPE.AES_256):string{
        let d=encrypt.decrypt(ciphertext,secretkey,type);
        return d;
    }
}

/**
 * 加密类型
 */
export enum E_ENCRYPTION_TYPE{
    AES_128=128,
    AES_192=192,
    AES_256=256,
}
