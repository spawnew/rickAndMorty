
import "./obtener.css"
import Mostar from '../mostrarpersonajes/Mostrar';
const ContenedorPersonaje = ({obtener}) => {
  return (
      <div className='obtener' >

          {obtener.map((personaje) => < Mostar key={personaje.id} {...personaje} />)}
          </div>
  )
}

export default ContenedorPersonaje;