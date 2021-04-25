import { Component } from "react";
import Todo from "../Todo";
import NewTodoForm from "../NewTodoForm";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

class TodoList extends Component {
  state = {
    todos: [
      { task: "buy milk", completed: false, id: uuidv4(), editing: false },
    ],
  };

  handleAdd = newItem => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: newItem.newTodo,
          completed: false,
          editing: false,
          id: newItem.id,
        },
      ],
    });
  };

  removeItem = id => {
    this.setState({
      todos: [...this.state.todos].filter(el => el.id !== id),
    });
  };

  updateTasksUsingId = (id, { ...traits }) => {
    let stateArr = [...this.state.todos];
    for (let el of stateArr) {
      if (el.id === id) {
        let updated = stateArr.filter(el => id !== el.id);
        this.setState({
          todos: [...updated, { ...el, ...traits }],
        });
      }
    }
  };

  editItem = id => {
    this.updateTasksUsingId(id, { editing: true });
  };

  saveEdit = (editedTask, id) => {
    this.updateTasksUsingId(id, {
      editing: false,
      task: editedTask,
      completed: false,
    });
  };

  markComplete = (id, complete) => {
    this.updateTasksUsingId(id, {
      completed: !complete,
    });
  };

  render() {
    return (
      <div className="TodoList">
        <div className="TodoList-container">
          <ul>
            {this.state.todos.map(todo => (
              <li key={todo.id}>
                <Todo
                  todo={todo}
                  removeItem={this.removeItem}
                  editItem={this.editItem}
                  saveEdit={this.saveEdit}
                  markComplete={this.markComplete}
                />
              </li>
            ))}
          </ul>
        </div>
        <NewTodoForm handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default TodoList;
