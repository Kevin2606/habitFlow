import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NextUIProvider>
          <h1>Hello habitFlow</h1>
        </NextUIProvider>
    </React.StrictMode>
);
