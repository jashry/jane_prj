import React,{ Component } from 'react'

class AddForm extends Component {
  state={
    content:''
  }

  addTodo=(e)=>{
      this.setState({
        content:e.target.value
      })
  }

  submitFunc=(e)=>{
    e.preventDefault()
    console.log(this.state);
    this.props.addTodo(this.state)
    this.setState({
      content:''
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.submitFunc}>
          <label>Add new todo:</label>
          <input type="text" onChange={this.addTodo} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddForm