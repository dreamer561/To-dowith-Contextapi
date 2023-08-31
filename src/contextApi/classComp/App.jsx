import React from 'react';
import Input from './Input';
import List from './List';
import { TodoProvider } from './TodoContext';

class App extends React.Component {
  render() {
    return (
      <TodoProvider>
        <div className="container">
          <Input />
          <List />
        </div>
      </TodoProvider>
    );
  }
}

export default App;
