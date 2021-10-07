import React, { useState } from 'react';

export const FormTarea = () => {
    
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = (e)=>{
        e.preventDefault();

    
    };
    return(
        <form action="">
            <input id="nuevaTarea" type="text" placeholder="nueva tarea" value={nuevaTarea}/>
            <button onClick={agregarTarea}></button>
        </form>
    );
};