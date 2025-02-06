
import Obtenerpersonaje from './componentes/Obtenerpersonaje'
import Detalle from './componentes/Detalle/Detalle'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <BrowserRouter>
      <div className="container">
      <Routes>
      
          <Route  path="/" element={<Obtenerpersonaje />} >
          
        </Route>
          <Route path="/detalles/:id" element={<Detalle />} ></Route>
        
     
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
