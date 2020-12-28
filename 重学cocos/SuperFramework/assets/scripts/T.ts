import { URL_TYPE } from "../superEngine/common/load/ResMgr";
import G from "../superEngine/G";
import UiBase from "../superEngine/ui/UiBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class T extends UiBase<null> {
    onShow(){
        G.json.loadJson("data");

    }

    onHidden(){
       let data= G.json.t_adven_template.All();
       console.log(data);
    }
}
