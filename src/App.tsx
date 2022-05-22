import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header, Text } from "./components";
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

      <Text>
        Veniam non et laborum consectetur commodo ea ut mollit adipisicing
        cillum ut culpa in. Id dolore aute in consectetur cillum deserunt fugiat
        voluptate. Veniam aliqua qui deserunt ut do minim mollit.
      </Text>
    </React.Fragment>
  );
};
