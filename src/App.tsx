import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { GlobalStyles } from "./global";
import { Home } from "./pages";

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />

      {/* <Header /> */}
      <Routes>
        <Route caseSensitive path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </React.Fragment>
  );
};
