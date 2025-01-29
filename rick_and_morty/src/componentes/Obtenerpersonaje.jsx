import { useState, useEffect } from 'react';
import Mostar from './mostrarpersonajes/Mostrar';
const Obtenerpersonaje = () => {
    const [obtener, setObtener] = useState([])

    const character = () => {
        fetch("https://rickandmortyapi.com/api/character/?page=1")
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
    }, []);
    return (
        <div > <h1>personaje</h1>
            {obtener.map((personaje) => < Mostar key={personaje.id } {...personaje} />)
                 
            }  
        
        </div>
    )
}

export default Obtenerpersonaje;