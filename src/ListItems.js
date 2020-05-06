import React from 'react'
import './ListItems.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>{item.text}
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
            <div>{listItems}</div>
            <footer className="footer">
                <button type="submit" className="delete"
                    onClick={() => props.deleteAll()}>Tout supprimer</button>
            </footer>
        </div>
    );
}

export default ListItems;
