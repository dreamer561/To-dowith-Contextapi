# Todo App with Context API

This is a simple todo application built using React and the Context API. It allows users to add, edit, and delete tasks in a list of todos.


# Context API in React



The Context API is a feature in React that provides a way to manage global state and share data across components without the need to pass props through every level of the component tree. It helps to solve the problem of "prop drilling," which can become cumbersome as applications grow larger and more complex.

Context API consists of two main parts: the Context object and the Provider component. The Context object creates a "context" that can hold data, while the Provider component wraps around components that need access to that data. By doing so, any component within the Provider's scope can access the data without the need for intermediate components to pass it down as props.


#Why Use Context API?


Avoid Prop Drilling: Context API is particularly useful when you have data that multiple components across different levels of the component tree need to access. Instead of passing data through each level as props, you can provide the data at a higher level and have components consume it directly from the context.

Global State Management: Context API is ideal for managing global state, such as user authentication, theme settings, or data fetched from APIs. It simplifies the process of sharing and updating state across the application.

Component Isolation: Components consuming data from context remain isolated from each other. This isolation makes it easier to refactor and maintain components, as changes in one component's state won't directly affect another component.

Cleaner Code: Context API helps improve code organization by reducing the need for intermediate components to pass data down. This leads to cleaner and more readable code. 



#How Context API Works

Creating Context: You define a context using the React.createContext() function. This creates a context object with a Provider and a Consumer.

Providing Data: You wrap a portion of your component tree with the Provider component. This allows components within that scope to access the data provided by the context.

Consuming Data: Components that need access to the context data can use the Consumer component or the useContext hook to access the context's data.

Updating Data: Components can update the context data through functions provided by the context, usually by calling a function from the context that modifies the state.


#When to Use Context API

Context API is a powerful tool, but it's not always the best choice for every situation. It's most suitable when:You have data that needs to be shared across multiple components.

Prop drilling becomes cumbersome or unreadable.You need to manage global state that changes over time.

## Features

- Add a new todo item.
- Edit an existing todo item.
- Delete a todo item.
- List all todos in the UI.

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/todo-app-context.gitNavigate to the project directory
:cd todo-app-contextInstall the required dependencies
:npm installStart the development server
:npm startOpen your web browser and visit http://localhost:3000 to see the app in action.

Folder Structure
src/: Contains the application source code.
App.js: The main entry point of the application.
Input.js: Component for adding and editing todos.List.js: Component for displaying the list of todos.
TodoContext.js: Context and Provider for managing todo state and actions.Context API UsageThe application uses the Context API to manage state and actions related to todos. 
The TodoContext.js file defines the context and the TodoProvider component.// TodoContext.js

import React from 'react';

const TodoContext = React.createContext();

class TodoProvider extends React.Component {
  // ... (State and methods)

  render() {
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
