import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import HabitFlow from "./HabitFlow";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NextUIProvider>
            <HabitFlow />
        </NextUIProvider>
    </React.StrictMode>
);
