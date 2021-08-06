import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import GlobalStyles from "./styles/GlobalStyles";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
