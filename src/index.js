import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./components/Router";
require("dotenv").config();

ReactDOM.render(<Router />, document.getElementById("root"));
