import { useState, useEffect } from 'react';





const Obtenerpersonaje = () => {



    const [obtener, setObtener] = useState(""); // se crea un estado para guardar los datos de la api

    const character = (id) => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`) // recordar usar las comillas francesas para poder usar variables
            .then((res) => res.json()) // Convierte  la respuesta a JSON no olvidar los () para la funcion json()
            .then((data) => {
                console.log(data);
                setObtener(data);


            })
            .catch((error) => {
                console.error('Error al obtener los datos del personaje:', error);
            });
    };



    useEffect(() => {
        character(1);
    }, []);
    return (
        <div >
            <div className="tarjeta" >
                <h4 > {obtener.name}</h4>
                <div>
                    <img src={obtener.image} alt="" />
                </div>
                <div className="botones">
                    <button>detalles</button>
                </div>

            </div>
        </div>


    )
}

export default Obtenerpersonaje;