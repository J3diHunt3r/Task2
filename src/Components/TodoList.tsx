import React from "react";
import { TodoListItem } from "./TodoListItems";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
  editTodo: EditTodo;
  getEditText: GetEditText;
  saveEditedTodo: SaveEditedTodo;
  currentFilter: CurrentFilter;
}

//displaying all prop functions and labels 
export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
  getEditText,
  saveEditedTodo
}) => {
  return (
    <ul>
      {todos.map((todo, i) => {
        return (
          <TodoListItem
            key={i}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            saveEditedTodo={saveEditedTodo}
            getEditText={getEditText}
          />
        );
      })}
    </ul>
  );
};
