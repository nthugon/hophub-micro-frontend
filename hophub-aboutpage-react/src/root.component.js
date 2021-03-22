import React from "react";
import About from "./components/About/About";
import Subheading from "./components/Subheading/Subheading";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route
        path="/"
        render={() => (
          <>
            <Subheading
              subheadingText="About"
              linkDestination="/"
              linkText="Back to Home"
            />
            <About />
          </>
        )}
      />
    </BrowserRouter>
  );
}
