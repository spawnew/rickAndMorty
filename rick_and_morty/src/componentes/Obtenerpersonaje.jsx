import { useState, useEffect } from 'react';
import "./botones.css";
import ContenedorPersonaje from './contenedorPersonaje/ContenedorPersonaje';



const Obtenerpersonaje = () => {
    const [page, setPage] = useState(1)


    const [obtener, setObtener] = useState([]); // se crea un estado para guardar los datos de la api
    const cambiarpag = () => {
        if(page < 42)
        setPage(page + 1)


    }
    const restarpag = () => {
        if (page > 0)
            setPage(page - 1)


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
    },[page]);
    return (
        <div > 
            <ContenedorPersonaje
            obtener={obtener} />
           
                 
             <div className='botones'>
                <p>Pagina:{page}</p>
                <div>
                    <button onClick={restarpag} className="btn btn-outline-primary">Anterior</button>
                <button type="button" className="btn btn-outline-primary" onClick={cambiarpag}>Siguiente</button></div> 
                
            </div>
            
        
        </div>
    )
}

export default Obtenerpersonaje;