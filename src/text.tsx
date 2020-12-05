import * as React from "react";
import { AppCtx } from "./Context";
import { useContext } from "react";
import { aStyle } from "./styles";

const TextComp:React.FC = () => {
  // 使用context
  const { count } = useContext(AppCtx);

  return (
    <div style={aStyle}>
      {count}
    </div>
  );
};
export default TextComp;
