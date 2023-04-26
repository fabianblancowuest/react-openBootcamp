import React from 'react';
import PropTypes from "prop-types";
import { Contacto } from '../../models/contacto.class';

const ComponenteB = ({ contacto }) => {
    return (
        <div>
            <h2>{ contacto.nombre }</h2>
            <h3>{ contacto.apellido }</h3>
            <h4>{ contacto.email }</h4>
            <h5>{ contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible"}</h5>
        </div>
    );
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteB;
