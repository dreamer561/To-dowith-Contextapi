import React from 'react';
import { TodoContext } from './TodoContext';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      error: false,
    };
  }

  changeInput = (event) => {
    this.setState({
      todo: event.target.value,
      error: event.target.value.length === 0,
    });
  };

  submit = (event) => {
    event.preventDefault();
    const { todo } = this.state;
    const { editData, addTodo, updateTodo } = this.context;

    if (todo.length > 0) {
      if (editData.index !== '') {
        updateTodo(editData.index, todo);
      } else {
        addTodo(todo);
      }
    } else {
      this.setState({ error: true });
    }

    this.setState({ todo: '' });
  };

  componentDidMount() {
    const { editData } = this.context;
    this.setState({ todo: editData.data });
  }

  render() {
    const { todo, error } = this.state;
    const { editData } = this.context;

    return (
      <form className="row mt-4" onSubmit={this.submit}>
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            placeholder="Add todo"
            value={todo}
            onChange={this.changeInput}
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
}

Input.contextType = TodoContext;

export default Input;
