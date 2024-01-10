import React from "react";
import PageTitle from "./PageTitle";
import "./index.css"; // This is how we import CSS files in React.

function App() {
    return (
        <article>
            {/* This indicates using a component inside another component. */}
            <PageTitle /> 
            <p>Built the app from the scratch.</p>
        </article>
    );
}

export default App;