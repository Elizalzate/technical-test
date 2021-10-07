import React from 'react';

export const FormTarea = () => {
    
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = (e)=>{
        e.preventDefault();

    let id = tareas.length + 1;
    setTareas(tareas.push({ id: id, nombre: nuevaTarea, completado: false}));
    
    };
    return(
        <form action="">
            <input id="nuevaTarea" type="text" placeholder="nueva tarea" value={nuevaTarea}/>
            <button onClick={agregarTarea}></button>
        </form>
    );
};