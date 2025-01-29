import "./tarjeta.css"

const Mostrar = ({name,image}) => {
  return (
        <div className="tarjeta" >
            <h4 > {name}</h4>
            <img src={image} alt="" />
        </div>

  )
}

export default Mostrar