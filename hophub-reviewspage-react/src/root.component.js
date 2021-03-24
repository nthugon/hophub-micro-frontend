import React from "react";
import Beer from "./components/Beer";
import Subheading from "./components/Subheading/Subheading";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route
        path="/"
        render={(matchProps) => (
          <>
            <Subheading
              subheadingText="Reviews"
              linkDestination="/beers"
              linkText="Back to Beers"
            />
            <Beer {...matchProps} />
          </>
        )}
      />
    </BrowserRouter>
  );
}
