import React from 'react'
import ComponenteB from '../pure/componenteB';
import { Contacto } from '../../models/contacto.class';

export default function ComponenteA() {
    const defaultContacto = new Contacto("Carlos", "Perez", "carlosperez@gmail.com", true);    
  
    return (
    <div>
        <ComponenteB contacto = {defaultContacto}></ComponenteB>
    
    </div>
  )
}

