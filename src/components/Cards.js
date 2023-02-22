import React from "react"
import ListItem from "./List_label";

export default function Cards(props) {
    const { items,renderItem } = props;
    return (
        <div className='card_separate'>
            {items.map(item => <ListItem>{renderItem(item)} </ListItem>)}
        </div>
    )
}
