import React, { useState } from 'react';
import { Tarea } from './Tarea';


export const TareasList = () => {

    const [tareas, setTareas] = useState([
        { id:1, nombre: "Buy new sweatshirt", completado:true},
        { id:2, nombre: "Read an article", completado:false},
        { id:3, nombre: "Watch a movie", completado:false},
        { id:4, nombre: "Listen to a podcast", completado:false},
       ]);

    return(
        <div id="listTareas">
            {
                tareas.map( 
                    tarea => <Tarea tarea={tarea}/>
                )
            }
        </div>
    );
};