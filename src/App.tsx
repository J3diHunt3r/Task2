import React, { FC, useState, useEffect } from "react";
import "./App.css";
import { TodoList } from "./Components/TodoList";
import { TodoFilter } from "./Components/TodoFilter";
import { AddTodoForm } from "./Components/AddTodoForm";

/**
 * Task 2 By Carl Haricombe
 * 
 * The object of this task was to display method of code, design, commenting and layout of code and source code
 * This task consists: --of hooks such aas useState
 *                     --Buttons
 *                     --Checkbox to mark completed and uncompleted tasks
 *                     --Filter to sort tasks according to completed to incompleted
 *                     --Icons and css from Material UI framework
 *                     --Editing and Deleting of tasks from the list
 *                     --Server connection holding existing data
 */




const initialTodos: Array<Todo> = [];

let id = 0;

export const App: React.FC = () => {
  //setting global states 
  const [todos, setTodos] = useState(initialTodos);
  const [filtered, setFiltered] = useState(todos);
  useEffect(() => {
    setFiltered(todos);
  }, [todos]);
  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  //only edits the actual and not the username
  const editTodo: EditTodo = editCurrentTodo => {
    const editTodo = todos.map(todo => {
      if (todo === editCurrentTodo) {
        return {
          ...todo,
          edit: !todo.edit
        };
      }
      return todo;
    });

    setTodos(editTodo);
  };

  //this should add both the username and task and then clear the input textboxes
  const addTodo: AddTodo = (newTodo, newUser) => {
    newTodo.trim() !== "" && newUser.trim() !== "" &&
      setTodos([
        ...todos,
        { id: id++, task: newTodo, user: newUser, complete: false, edit: false }
      ]);
  };

  //deletes the entire todo row
  const deleteTodo: DeleteTodo = currentTodo => {
    setTodos(todos.filter(item => item !== currentTodo));
  };

  //only allows for task edit
  const getEditText: GetEditText = (todoId, getEditedTodo) => {
    const editTodo = todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          task: getEditedTodo,
          edit: true
        };
      }
      return todo;
    });

    setTodos(editTodo);
  };

  //this function allows the save button to appear inorder to save the changes made to the task
  const saveEditedTodo: SaveEditedTodo = currentTodo => {
    const saveEditedTodo = todos.map(todo => {
      if (todo.id === currentTodo.id) {
        return {
          ...todo,
          edit: false
        };
      }
      return todo;
    });

    setTodos(saveEditedTodo);
  };

  //displays the different ways of filtering the list of tasks
  const currentFilter: CurrentFilter = filterTodo => {
    let activeFilter = filterTodo;
    switch (activeFilter) {
      case "All":
        setFiltered(todos);
        return;
      case "Complete":
        setFiltered(todos.filter(t => t.complete));
        return;
      case "Incomplete":
        setFiltered(todos.filter(t => !t.complete));
        return;
      default:
        console.log("Defaultkkll");
    }
  };

  //returns the entire form, list and icons with their respective functions
  return (
    <React.Fragment>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={filtered}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        saveEditedTodo={saveEditedTodo}
        getEditText={getEditText}
        currentFilter={currentFilter}
      />
      <TodoFilter currentFilter={currentFilter} />
    </React.Fragment>
  );
};
