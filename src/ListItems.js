import React from 'react'
import './ListItems.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text}
                        onChange={(e) => props.updateItem(e.target.value, item.key)} />
                    <span>
                        <FontAwesomeIcon className="faicons" icon="trash-alt"
                            onClick={() => props.deleteItem(item.key)} />
                    </span>
                </p>
            </div>
        );
    }
    );

    return (
        <div className="global-list">
            <div>
                <FlipMove duration={300} easing="ease-in-out">{listItems}</FlipMove>
            </div>
            <footer className="footer">
                <button type="submit" className="delete"
                    onClick={() => props.deleteAll()}>Tout supprimer</button>
            </footer>
        </div>
    );
}

export default ListItems;
