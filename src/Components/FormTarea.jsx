import React, { useState } from 'react';

export const FormTarea = (props,tareas) => {

    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleChange = e => {
        setNuevaTarea(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        /*props.onSubmit({
            id: tareas.length + 1,
            nombre: nuevaTarea
        })*/

        setNuevaTarea('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="form-control" 
                id="nuevaTarea" 
                name="nuevaTarea"
                onChange={handleChange}
                placeholder="nueva tarea" 
                type="text" 
                value={nuevaTarea} 
            />
            <button 
                className="btn btn-primary"
            >
               +
            </button>
        </form>
    );
};