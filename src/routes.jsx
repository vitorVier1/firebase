import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom"; 

import Header from "./components/Header";

import Cadastros from "./pages/Cadastros";
import Login from "./pages/Login";
import Error from "./pages/Error";

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Cadastros/> } />
                <Route path="/cadastro" element={ <Cadastros />} />
                <Route path="/login" element={ <Login />} />
                <Route path="*" element={ <Error />} />
            </Routes>
        </BrowserRouter>
    )
}