import { E_ENCRYPTION_TYPE } from "../superEngine/common/encryption/encryptionMgr";
import { URL_TYPE } from "../superEngine/common/load/ResMgr";
import G from "../superEngine/G";
import UiBase from "../superEngine/ui/UiBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class T extends UiBase<null> {
    onShow(){
        G.data.saveD("sss","ssss")
        let str= G.data.getD<string>("sss");
        console.log(str);
    }

    onHidden(){
        // G.data.saveD("sss",{id:1,s:2})
        G.data.rmD("sss");
        let str= G.data.getD<string>("sss");
        console.log(str);
    }
}
