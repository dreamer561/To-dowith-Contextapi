import React from 'react';
import { TodoContext } from './TodoContext';

class List extends React.Component {
  static contextType = TodoContext;

  render() {
    const { todos } = this.context;

    return (
      <ul className="list-group">
        {todos.length > 0 ? (
          todos.map((value, index) => (
            <li className="list-group-item d-flex justify-content-between" key={index}>
              <div>{value}</div>
              <div>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => this.context.editTodo(index, value)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => this.context.deleteTodo(value)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">No Todo</li>
        )}
      </ul>
    );
  }
}

export default List;
