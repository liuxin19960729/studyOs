// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import G from "../superEngine/G";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestButton extends cc.Component {
    @property(cc.Node)
    T:cc.Node=null;

    click(){
        let f=this.T.active;
        this.T.active=!f;
        G.DD.A();
    }
}
