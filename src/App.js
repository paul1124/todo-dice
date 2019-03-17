import React, { Component } from 'react';
// import ListModal from './Components/ListModal';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          content: 'Resume & LinkedIn'
        }, 
        {
          id: 2,
          content: 'Study - Current: MERN Stack'
        },
        {
          id: 3,
          content: 'Project'
        },
        {
          id: 4,
          content: 'Rest'
        }
    
      ],
      addingNewItem: false,
      randInt: null,
      resultArr: []
    }
  }

  randomNum = () => {
    const randInt = Math.floor(Math.random() * this.state.list.length) + 1;
    this.setState({
      randInt
    })
    const currentTask = this.state.list.find(obj => {
      return obj.id === randInt
    })
    if(!this.state.resultArr.includes(currentTask.content)) {
      this.setState({
        resultArr: [
          ...this.state.resultArr, 
          currentTask.content
        ]
      })
    }
  }

  addItem = (e) => {
    const list = this.state;
    const newListItem = e;
    list.push(newListItem);
    this.setState({
      list,
    });
  }

  // deleteItem = () => {

  // }

  render() {
    const { list, randInt, resultArr } = this.state;
    return (
      <div className="App">
        <h1 className="main-title">Task Chooser</h1>
        {list.map((item) => {
          return <p className="tasks" key={item.id} style={{background: item.id === randInt ? 'red' : 'none'}}>{item.content}</p>
        })}
        <h2 className="dice-value">{randInt == null ? 'Click the bottom Button' : randInt }</h2>
        <button className="randomBtn" onClick={this.randomNum}>RANDOM</button>
        <h3>Tasks for today: </h3>
        {resultArr.map(task => {
          return <p className="tasks-today" key={task.id}>{task}</p>
        })
      }
       {/* <ListModal list={list} addingNewItem={addingNewItem} addItem={this.addItem} deleteItem={this.deleteItem}/> */}
      </div>
    );
  }
}

export default App;
