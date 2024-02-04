import React from "react";
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Create from "../pages/Create.jsx";
import List from "../pages/List.jsx";
import Edit from "../pages/Edit.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<List/>}></Route>
                <Route path="/create" element={<Create/>}></Route>
                <Route path="/edit/:id" element={<Edit/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = createRoot(document.getElementById('app'));
root.render(<App/>);
