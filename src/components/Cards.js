import React from "react"
import ListItem from "./List_label";
import Mainprop from "./Main";

export default function Cards(props) {
    const { items } = props;

    return (
        items.map((item) => {
            return (
                <div className='card'>
                    <div className='card_separate'>
                        <h4>Nombre: {item.name}</h4>
                        <p>Telefono: {item.Phone}</p>
                        <p>Email: {item.email}</p>
                        <p>Numero de personas: {item.Number_persons}</p>
                        <p>Fecha: {item.Date}</p>
                    </div>
                    <button type="button" class="btn btn-danger" onClick={() => { Mainprop.deleteReserv(item.id) }}>Delete</button>

                </div>
            )
        })
    )
}