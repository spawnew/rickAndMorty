
import Obtenerpersonaje from './componentes/Obtenerpersonaje'
import Detalle from './componentes/Detalle/Detalle'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './componentes/Navbar/Navbar';
function App() {


  return (
    <BrowserRouter>
      <div className='container-principal'>
      <Navbar />
      <div className="container">
      <Routes>
      
          <Route  path="/" element={<Obtenerpersonaje />} >
          
        </Route>
          <Route path="/detalles/:id" element={<Detalle />} ></Route>
          <Route path="/:status" element={<Obtenerpersonaje />} />
        
     
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App
