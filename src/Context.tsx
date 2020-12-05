import React , { useState ,useCallback } from "react";

type IAppStore = {
  count:number,
  increment:()=>void,
  decrement:()=>void,
  getData:()=>void
}


export const AppCtx = React.createContext({} as IAppStore);

const CtxProvider: React.FC = props => {
  const [count , setCount] = useState<number>(0)


  const getData = () =>{
    console.log("get data")
    new Promise<number>((resolve)=>{
      setTimeout(()=>{
        resolve(1)
      })
    })
  }

  const increment = useCallback(() => setCount(count=>count+1),[count])
  const decrement = useCallback(() => setCount(count=>count-1),[count])


  let values = {
    count,
    increment,
    decrement,
    getData
  }
  return (
    <AppCtx.Provider
      value={values}
    >
      {props.children}
    </AppCtx.Provider>
  );
};

export default CtxProvider;
