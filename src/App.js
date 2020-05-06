import React from 'react';
import './App.css';
import ListItems from './ListItems.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleItem = this.handleItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleItem(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      });
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="todo-list-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Saisissez une nouvelle tâche" value={this.state.currentItem.text} onChange={this.handleItem} />
            <button type="submit">Ajouter</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
