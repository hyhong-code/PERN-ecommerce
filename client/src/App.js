import React, { Fragment } from "react";

import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <Topbar />
      <Navbar />
    </Fragment>
  );
};

export default App;