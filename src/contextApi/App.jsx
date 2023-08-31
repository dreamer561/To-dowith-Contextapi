import React from 'react';
import Input from './Input';
import List from './List';
import { TodoProvider } from './TodoContext';

function App() {
  return (
    <TodoProvider>
      <div className="container">
        <Input />
        <List />
      </div>
    </TodoProvider>
  );
}

export default App;
