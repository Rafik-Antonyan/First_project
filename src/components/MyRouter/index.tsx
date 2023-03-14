import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  HomePage  from "../../pages/HomePage";

export const MyRouter:React.FC = ():JSX.Element =>{
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
        </Routes>
    </BrowserRouter>
}