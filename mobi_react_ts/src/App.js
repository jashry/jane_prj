import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
    state={
        todos:[
            {id:1,content:'buy some milk'},
            {id:2,content:'buy some bread'},
            {id:3,content:'buy some fruit'},
        ]
    }
    delLi=(id)=>{
        // console.log(id)
        let todos = this.state.todos.filter((todo)=>{
            return (todo.id !==id ? true : false)
        })
        this.setState(
            {todos:[...todos]}
        )
    }
    render() {
        return ( 
            <div className = "App" >
                <h1 className="center blue-text">Todo List</h1>
                <Todos todos = {this.state.todos} delFunc={this.delLi} />
            </div>
        );
    }
}

export default App;