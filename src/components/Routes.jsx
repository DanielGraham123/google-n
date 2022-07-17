import React from "react";
import { Routes as DomRoutes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const Routes = () => {
  return (
    <div className="p-4">
      <DomRoutes>
        <Route
          exact
          path="/"
          element={<Navigate replace to="/search" />}
        ></Route>

        <Route exact path="/search" element={<Results />}></Route>
        <Route exact path="/images" element={<Results />}></Route>
        <Route exact path="/news" element={<Results />}></Route>
        <Route exact path="/videos" element={<Results />}></Route>
      </DomRoutes>
    </div>
  );
};

export default Routes;
