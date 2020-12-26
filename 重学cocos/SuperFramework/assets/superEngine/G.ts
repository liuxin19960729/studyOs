import DD from "../scripts/DD";
import Beans from "./common/Beans";
import { Loader } from "./common/load/Loader";
import Log from "./common/log/Log";

class Global{
    get DD():DD{
        return Beans.getBean("DD",DD);
    }

    /**
     * 加载资源类
     */
    get loader():Loader{
        return Beans.getBean("Loader",Loader);
    }

    get log():Log{
        return  Beans.getBean("Log",Log);
    }
}

let G =Beans.getBean("G",Global);
export default G;
