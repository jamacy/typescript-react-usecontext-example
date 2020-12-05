import React,{ FC } from "react";
import { AppCtx } from "./Context";
import { useContext ,useEffect ,useMemo} from "react";
import "./index.css";


const Wrapper:FC = () => {

  // 使用context
  const { increment, decrement ,getData ,count } = useContext(AppCtx);
  const handleIncrement=()=>{
    increment()
  }
  const handleDecrement=()=>{
    decrement()
  }
  useEffect(()=>{
    //获取异步数据
    getData()
  },[count])
  // 使用useMemo更细粒度优化组件
  return useMemo(() => {
    return (
        <div>
            <button className="btn" onClick={handleIncrement}>increment</button> 
            <button className="btn" onClick={handleDecrement}>decrement</button>    
        </div>
      );

  },[])
};
export default Wrapper;
