import "./tarjeta.css"

const Mostrar = ({name,image}) => {
  return (
        <div className="tarjeta" >
            <p > {name}</p>
            <img src={image} alt="" />
        </div>

  )
}

export default Mostrar