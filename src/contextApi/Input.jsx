import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

export default function Input() {
  const [todo, setTodo] = useState('');
  const [error, setError] = useState(false);
  const { addTodo, updateTodo, editData } = useContext(TodoContext);

  const changeInput = (event) => {
    setTodo(event.target.value);
    setError(event.target.value.length === 0);
  };

  const submit = (event) => {
    event.preventDefault();

    if (todo.length > 0) {
      if (editData.index !== '') {
        updateTodo(editData.index, todo);
      } else {
        addTodo(todo);
      }
    } else {
      setError(true);
    }

    setTodo('');
  };

  return (
    <form className="row mt-4" onSubmit={submit}>
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          placeholder="Add todo"
          value={todo}
          onChange={changeInput}
        />
        {error && <p className="text-danger">Please Enter the todo</p>}
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">
          {editData.index === '' ? 'ADD' : 'UPDATE'}
        </button>
      </div>
    </form>
  );
}
