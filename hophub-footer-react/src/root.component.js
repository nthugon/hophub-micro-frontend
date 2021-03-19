import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/" component={Footer} />
    </BrowserRouter>
  );
}
