import React, { useState } from 'react';

export const FormTarea = () => {
    
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = (e)=>{
        e.preventDefault();

    
    };
    return(
        <form action="">
            <input id="nuevaTarea" type="text" placeholder="nueva tarea" value={nuevaTarea} className="form-control"/>
            <button onClick={agregarTarea} className="btn btn-primary"></button>
        </form>
    );
};