import React from "react"; //import this to use JSX syntax.
import ReactDOM from "react-dom";
import App from "./App";

//render() renders react application inside the HTML element with id 'app'
ReactDOM.render(
    <App />,
    document.getElementById("app")
);