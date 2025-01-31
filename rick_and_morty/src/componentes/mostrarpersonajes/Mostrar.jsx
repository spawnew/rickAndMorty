import "./tarjeta.css"

const Mostrar = ({name,image}) => {
  return (
        <div className="tarjeta" >
            <h4 > {name}</h4>
          <div>
              <img src={image} alt="" />
          </div>
          <div className="botones">
              <button>detalles</button>
          </div>
          
        </div>

  )
}

export default Mostrar