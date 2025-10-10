import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const RouteProvider = ({ children }) => {
    return (
        <div>
            <BrowserRouter>{children}</BrowserRouter>
        </div>
    );
};
export default RouteProvider;