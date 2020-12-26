
import { E_LOAD_TYPE } from "../superEngine/common/load/Loader";
import G from "../superEngine/G";
import UiBase from "../superEngine/ui/UiBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class T extends UiBase<null> {
    async onShow(){
        // G.loader.loader(E_LOAD_TYPE.E_JSON,"data/t_adven_template",(data,err)=>{
        //     console.log(data)
        // })

        await G.loader.synloaderDir(E_LOAD_TYPE.E_JSON,"data/").then((data:cc.JsonAsset)=>{
                console.log(data);
        }).catch(err=>{
            console.log(err);
        })
        console.log("onshow")
    }

    onHidden(){
        console.log("onhidden")
    }
}
