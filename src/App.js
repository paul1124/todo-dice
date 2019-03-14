import React, { Component } from 'react';
import ListModal from './Components/ListModal';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['a', 'b'],
      addingNewItem: false,
    }
  }

  addItem = (e) => {
    const list = this.state;
    const newListItem = e;
    list.push(newListItem);
    this.setState({
      list
    });
  }

  deleteItem = () => {

  }

  render() {
    const { list, addingNewItem } = this.state;
    return (
      <div className="App">
        <ListModal list={list} addingNewItem={addingNewItem} addItem={this.addItem} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
