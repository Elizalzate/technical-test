import React from 'react';

export const ListHeader = () => {

    const fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();

    if(dia < 10){
        dia = '0' + dia;
    }

    if(mes < 10){
        mes = '0' + mes;
    }

    return(
        <div className="row">
            <div className="col">
                {dia}                
            </div>
            <div className="col">
                {mes}                
            </div>
            <div className="col">
                {anio}                
            </div>
            <div className="col">
                                
            </div>
        </div>
    );
};