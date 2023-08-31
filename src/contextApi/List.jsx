import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

export default function List() {
  const { todos, editTodo, deleteTodo } = useContext(TodoContext);

  return (
    <ul className="list-group">
      {todos.length > 0 ? (
        todos.map((value, index) => (
          <li className="list-group-item d-flex justify-content-between" key={index}>
            <div>{value}</div>
            <div>
              <button
                className="btn btn-warning mx-2"
                onClick={() => editTodo(index, value)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(value)}
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
