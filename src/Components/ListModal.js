import React, { Component } from 'react';

class ListModal extends Component {

  toggleAdding = () => {
    this.props.addingNewItem = !this.props.addingNewItem
  }

  render() {
    const { addingNewItem, list, addItem, deleteItem } = this.props;
    return (
      <div>
        <ul>
          {list.map((item) => {
            return (
              <li>
                {item}
                <button onClick={deleteItem}>X</button>
              </li>
            )
          })}
          <li>

            <button onClick={this.toggleAdding}>Add New Item</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default ListModal;