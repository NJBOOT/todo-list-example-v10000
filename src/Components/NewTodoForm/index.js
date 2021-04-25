import { Component } from "react";
import "./NewTodoForm.css";
import { v4 as uuidv4 } from "uuid";

class NewTodoForm extends Component {
  state = {
    newTodo: "",
    completed: false,
    id: uuidv4(),
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.handleAdd(this.state);
    this.setState({
      id: uuidv4(),
      newTodo: "",
      completed: false,
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className="NewTodoForm">
        <div>
          <label htmlFor="newTodo">New Todo:</label>
          <input
            type="text"
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.handleSubmit}>Add Item</button>
      </form>
    );
  }
}

export default NewTodoForm;
