import React from 'react';

const TodoContext = React.createContext();

class TodoProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['breakfast', 'lunch', 'snacks', 'Dinner'],
      editData: { index: '', data: '' },
    };
  }

  addTodo = (data) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, data],
      editData: { index: '', data: '' },
    }));
  };

  deleteTodo = (data) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((value) => value !== data),
      editData: { index: '', data: '' },
    }));
  };

  editTodo = (index, data) => {
    this.setState({ editData: { index, data } });
  };

  updateTodo = (index, data) => {
    this.setState((prevState) => {
      const newTodosArray = prevState.todos.map((value, ind) =>
        ind === index ? data : value
      );
      return {
        todos: newTodosArray,
        editData: { index: '', data: '' },
      };
    });
  };

  render() {
    const { todos, editData } = this.state;
    const { addTodo, deleteTodo, editTodo, updateTodo } = this;

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
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export { TodoContext, TodoProvider };
