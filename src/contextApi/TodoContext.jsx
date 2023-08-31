import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(['breakfast', 'lunch', 'snacks', 'Dinner']);
  const [editData, setEditData] = useState({
    index: '',
    data: '',
  });

  const addTodo = (data) => {
    setTodos([...todos, data]);
  };

  const deleteTodo = (data) => {
    const filterData = todos.filter((value) => value !== data);
    setTodos([...filterData]);
  };

  const editTodo = (index, data) => {
    setEditData({
      index,
      data,
    });
  };

  const updateTodo = (index, data) => {
    const newTodosArray = todos.map((value, ind) =>
      ind === index ? data : value
    );
    setTodos([...newTodosArray]);
    setEditData({
      index: '',
      data: '',
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        editData,
        addTodo,
        deleteTodo,
        editTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
