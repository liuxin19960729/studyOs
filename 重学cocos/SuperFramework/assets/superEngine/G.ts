import DD from "../scripts/DD";
import Beans from "./common/Beans";
import DataMgr from "./common/data/DataMgr";
import encryptionMgr from "./common/encryption/encryptionMgr";
import JsonMgr from "./common/json/JsonMgr";
import ResMgr from "./common/load/ResMgr";
import Log from "./common/log/Log";

class Global{
    get DD():DD{
        return Beans.getBean("DD",DD);
    }

    get log():Log{
        return  Beans.getBean("Log",Log);
    }

    get resMgr():ResMgr{
        return  Beans.getBean("ResMgr",ResMgr);
    }

    get json():JsonMgr{
        return Beans.getBean("JsonMgr",JsonMgr);
    }

    get data():DataMgr{
        return Beans.getBean("DataMgr",DataMgr);
    }

    get encry():encryptionMgr{
        return Beans.getBean("encryptionMgr",encryptionMgr);
    }

}

let G =Beans.getBean("G",Global);
export default G;
