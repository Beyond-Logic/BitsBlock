/** @format */

import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Navbar, Welcome, Footer, Transactions } from "./components";

const App = () => {
  return (
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
        
          <Routes>
            <Route exact path="/" element={<Welcome />}></Route>
            <Route
              exact
              path="/transactions"
              element={<Transactions />}
            ></Route>
          </Routes>
          </div>
     
        <Footer />
      </div>
  );
};

export default App;
