import { useEffect, useState } from 'react';

const Notes = () => {
    const url = 'https://rickandmortyapi.com/api/character';
    const obtenerDatos = async () => {
        const data = await fetch(url);
        const usuarios = await data.json();
        setEquipo(usuarios.results);
    }

    const [equipo, setEquipo] = useState([]);
   
    useEffect(() => {
        obtenerDatos();
    }, []);

    return (<div>
                {
                    equipo.map(elem => (
                        <div className="card" key={elem.id}>
                            {elem.name}
                        </div>
                    ))
                }
             </div>)

}

export default Notes;