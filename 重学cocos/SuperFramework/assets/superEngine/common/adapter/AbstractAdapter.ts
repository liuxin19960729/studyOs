/**
 * 抽象适配器
 * 
 * 实现一些其他适配器的一些公共
 */
import Adapter from "./Adapter";
export  abstract  class AbstractAdapter implements Adapter{
    abstract addPlugin();
}
