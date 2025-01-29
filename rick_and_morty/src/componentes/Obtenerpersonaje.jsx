import { useState, useEffect } from 'react';
import Mostar from './mostrarpersonajes/Mostrar';
import "./obtener.css"


const Obtenerpersonaje = () => {
    const [page, setPage] = useState(1)


    const [obtener, setObtener] = useState([]); // se crea un estado para guardar los datos de la api
    const cambiarpag = () => {
        if(page < 42)
        setPage(page + 1)


    }
    const character = () => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`) // recordar usar las comillas francesas para poder usar variables
            .then((res) => res.json()) // Convierte  la respuesta a JSON no olvidar los () para la funcion json()
            .then((data) => {
                console.log(data.results);

                setObtener(data.results);
            })
            .catch((error) => {
                console.error('Error al obtener los datos del personaje:', error);
            });
    };



    useEffect(() => {
        character();
    }, [page]);
    return (
        <div className='obtener' > 
            
            {obtener.map((personaje) => < Mostar key={personaje.id } {...personaje} />)
                 
            } 
            <p>Pagina:{page}</p>
            <button onClick={cambiarpag}>Siguiente</button>
        
        </div>
    )
}

export default Obtenerpersonaje;