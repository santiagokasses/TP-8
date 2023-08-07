import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './componentes/List';
import Reciclar from "./componentes/Reciclar";
import ProblemasAmbientales from "./componentes/ProblemasAmbientales";
import CalentamientoGlobal from "./componentes/CalentamientoGlobal";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Juego insano</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/Reciclar" element={<Reciclar />}></Route>
            <Route path="/ProblemasAmbientales" element={<ProblemasAmbientales />}></Route>
            <Route path="/CalentamientoGlobal" element={<CalentamientoGlobal />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
