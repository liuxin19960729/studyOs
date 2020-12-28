declare namespace encrypt{
   export function encrypt(ciphertext:string, password:string, nBits:number):string;
   export function decrypt(ciphertext:string, password:string, nBits:number):string;
}