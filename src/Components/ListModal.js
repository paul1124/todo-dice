import React, { Component } from 'react';

class ListModal extends Component {

  toggleAdding = () => {
    this.props.addingNewItem = !this.props.addingNewItem
  }

  render() {
    const { list, deleteItem } = this.props;
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
            <form>
              <input type="text"/>
              {/* <inp */}
            </form>
            <button onClick={this.toggleAdding}>Add New Item</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default ListModal;