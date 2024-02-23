import React from "react";
import {createRoot} from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./Page/App";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();