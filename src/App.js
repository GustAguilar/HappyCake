import "bootstrap/dist/css/bootstrap.min.css"
import FormularioContacto from "./views/contacto";
import Home from "./views/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BarraNavegacion from "./components/navbar";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <BarraNavegacion/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contacto" element={<FormularioContacto/>}></Route>
        </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
