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
        <div className="">
            <label> {tarea.nombre}</label>
            <button 
                className={
                    `btn btn-${tarea.completado
                        ?'success'
                        :'danger'
                    }`
                } 
                disabled={tarea.completado}
                onClick={toggleCompletado}  
            >
                    {completada}
            </button>

        </div>
    );

};