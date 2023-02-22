
import React from "react";

export default function ListItem(props) {
    const {user_data} = props
    return (
        <React.Fragment>
            <h4>Nombre: {user_data.name}</h4>
            <p>Telefono: {user_data.Phone}</p>
            <p>Email: {user_data.email}</p>
            <p>Numero de personas: {user_data.Number_persons}</p>
            <p>Fecha: {user_data.Date}</p>
        </React.Fragment>
        )}