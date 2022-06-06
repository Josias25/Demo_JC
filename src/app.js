import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calcular from "./page/calculargrados";
import FormularioLaboral from "./page/formulariolaboral";
import Main from "./components/main";
import Operaciones from "./page/operacionesmate";

import './calculargrados.css';
import './operacionesmate.css';
import './formulariolaboral.css';

export default function app(){
    return <>
        <div className="App">
            <h3>Josías Castillo_TI51</h3>
            <BrowserRouter>
                 <Routes>
                     <Route path="/calculargrados" element={<Calcular/>}></Route>
                     <Route path="/formulariolaboral" element={<FormularioLaboral/>}></Route>
                     <Route path="/operacionesmate" element={<Operaciones/>}></Route>
                 </Routes>
                 <Main/>
            </BrowserRouter>
        </div>
        </>
        
}

