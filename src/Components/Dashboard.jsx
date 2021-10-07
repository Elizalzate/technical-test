import React, { useState } from 'react';
import { Tarea } from './Tarea';
import { ListHeader } from './ListHeader';

export const Dashboard = () => {
    const [tareas, setTareas] = useState([
        { id:1, nombre: "Buy new sweatshirt", completado:true},
        { id:2, nombre: "Read an article", completado:false},
        { id:3, nombre: "Watch a movie", completado:false},
        { id:4, nombre: "Listen to a podcast", completado:false},
       ]);

    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = (e)=>{
        e.preventDefault();

    let id = tareas.length + 1;
    setTareas(tareas.push({ id: id, nombre: nuevaTarea, completado: false}));
    
    };

    return(
        <>
            <ListHeader/>
            {
                tareas.map( 
                tarea => <Tarea tarea={tarea}/>
                )
            }
            <input id="nuevaTarea" type="text" placeholder="nueva tarea" value={nuevaTarea}/>
            <button onClick={agregarTarea}></button>
        </>
    );

};