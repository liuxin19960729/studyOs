import BeanMap from "../superEngine/common/BeanMap";
import BaseCtr from "../superEngine/ctr/BaseCtr";
export default class TestCtr extends BaseCtr<any> {
    static get Ins():TestCtr{
        return BeanMap.getBean("TestCtr",TestCtr);
    }

    onShow(){
       
    }

    addListen(){
       
    }

    removeListen(){
        
    }


    onHiden(){
      
    }
    



}
