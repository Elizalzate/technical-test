import React, { useState, useEffect } from 'react';

export const Tarea = ({tarea})=>{

    const [completado, setCompletado] = useState(tarea.completado);
    let completada = 
         completado 
         ? 'O'
         : 'X';

   
    const toggleCompletado = ()=>{
        setCompletado(!tarea.completado);
    }


    return(
        <div className="row">
            <label> {tarea.nombre}</label>
            <button onClick={toggleCompletado} className={`btn btn-${completada?'success':'danger'}`}>{completada}</button>

        </div>
    );

};