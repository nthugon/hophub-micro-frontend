import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/" component={Header} />
    </BrowserRouter>
  );
}
