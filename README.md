# Todo App with Context API

This is a simple todo application built using React and the Context API. It allows users to add, edit, and delete tasks in a list of todos.

## Features

- Add a new todo item.
- Edit an existing todo item.
- Delete a todo item.
- List all todos in the UI.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/dreamer561/todo-app-context.git
   ```

2. Navigate to the project directory:

   ```sh
   cd todo-app-context
   ```

3. Install the required dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm start
   ```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Folder Structure

- `src/`: Contains the application source code.
  - `App.jsx`: The main entry point of the application.
  - `Input.jsx`: Component for adding and editing todos.
  - `List.jsx`: Component for displaying the list of todos.
  - `TodoContext.jsx`: Context and Provider for managing todo state and actions.

## Context API Usage

The application uses the Context API to manage state and actions related to todos. The `TodoContext.jsx` file defines the context and the `TodoProvider` component.

```jsx
// TodoContext.jsx

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
```

## Context API in React

The Context API is a feature in React that provides a way to manage global state and share data across components without the need to pass props through every level of the component tree. It helps to solve the problem of "prop drilling," which can become cumbersome as applications grow larger and more complex.

Context API consists of two main parts: the Context object and the Provider component. The Context object creates a "context" that can hold data, while the Provider component wraps around components that need access to that data. By doing so, any component within the Provider's scope can access the data without the need for intermediate components to pass it down as props.

### Why Use Context API?

1. **Avoid Prop Drilling**: Context API is particularly useful when you have data that multiple components across different levels of the component tree need to access. Instead of passing data through each level as props, you can provide the data at a higher level and have components consume it directly from the context.

2. **Global State Management**: Context API is ideal for managing global state, such as user authentication, theme settings, or data fetched from APIs. It simplifies the process of sharing and updating state across the application.

3. **Component Isolation**: Components consuming data from context remain isolated from each other. This isolation makes it easier to refactor and maintain components, as changes in one component's state won't directly affect another component.

4. **Cleaner Code**: Context API helps improve code organization by reducing the need for intermediate components to pass data down. This leads to cleaner and more readable code.

### How Context API Works

1. **Creating Context**: You define a context using the `React.createContext()` function. This creates a context object with a `Provider` and a `Consumer`.

2. **Providing Data**: You wrap a portion of your component tree with the `Provider` component. This allows components within that scope to access the data provided by the context.

3. **Consuming Data**: Components that need access to the context data can use the `Consumer` component or the `useContext` hook to access the context's data.

4. **Updating Data**: Components can update the context data through functions provided by the context, usually by calling a function from the context that modifies the state.

### When to Use Context API

Context API is a powerful tool, but it's not always the best choice for every situation. It's most suitable when:

- You have data that needs to be shared across multiple components.
- Prop drilling becomes cumbersome or unreadable.
- You need to manage global state that changes over time.

For more complex state management needs, you might consider using external libraries like Redux or MobX.

