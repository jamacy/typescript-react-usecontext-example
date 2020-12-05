import * as React from "react";
import { render } from "react-dom";

import CtxProvider from "./Context";
import TextComp from "./text";
import Wrapper from "./wrapper";

function App() {
  return (
    <div className="App">
      <CtxProvider>
        <TextComp />
        <Wrapper />
      </CtxProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
