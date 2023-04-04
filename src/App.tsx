import React from "react";
import PageHeader from "./Common/PageHeader";
import PageNavigator from "./PageNavigator";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <PageNavigator />
    </BrowserRouter>
  );
}

export default App;
