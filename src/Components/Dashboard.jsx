import React from 'react';
import { ListHeader } from './ListHeader';
import { FormTarea } from './FormTarea';
import { TareasList } from './TareasList';

export const Dashboard = () => {
    
    return(
        <>
            <div className="container">
                <ListHeader/>
                <TareasList />
                <FormTarea />
            </div>
        </>
    );

};