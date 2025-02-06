import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';


const Obtenerpersonaje = () => {
    const { id } = useParams();
    console.log(id)

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
        character(id);
    }, [id]);
    return (
        <div className="contenedor" >
            <div className="tarjeta" >
                <h4 > {obtener.name}</h4>
                <div>
                    <img src={obtener.image} alt="" />
                </div>
                <p>SALUD:{obtener.status}</p>
                <p>ESPECIE:{obtener.species}</p>
                <p>GENERO:{obtener.gender}</p>
                <p>ORIGEN:{obtener.origin?.name}</p>
                
                <Link to="/">
                <div className="botones">
                    <button>Atras</button>
                </div>
            
                </Link>
            </div>
              
</div>
            
      


    )
}

export default Obtenerpersonaje;