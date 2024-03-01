import React from "react";
import {createRoot} from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./Page/App/App";
import theme from "./theme";
import {ThemeProvider} from "@mui/material";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();