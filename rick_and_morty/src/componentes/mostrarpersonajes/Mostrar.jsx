import "./tarjeta.css"
import { Link } from "react-router-dom"
const Mostrar = ({name,image,id}) => {
  return (
        <div className="tarjeta" >
            <h4 > {name}</h4>
          <div>
              <img src={image} alt="" />
      </div>
      <Link to={`/detalles/${id}`}>
          <div className="botones">
              <button>detalles</button>
          </div>
          </Link>
        </div>

  )
}

export default Mostrar