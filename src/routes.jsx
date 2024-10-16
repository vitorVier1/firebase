import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Cadastros from "./pages/Cadastros";

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Cadastros />} />
            </Routes>
        </BrowserRouter>
    )
}