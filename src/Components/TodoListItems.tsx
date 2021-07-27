import React from 'react';
import { IconButton } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
    editTodo: EditTodo;
    getEditText: GetEditText;
    saveEditedTodo: SaveEditedTodo;
}

//The below return will be the format of display with the task, edit button, username and then delete icon
export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo, deleteTodo, editTodo, getEditText, saveEditedTodo }) => {
    return todo.edit ? 
    <div>
        <input type="input" onChange={(e) => getEditText(todo.id, e.target.value)} />
        <span onClick={() => saveEditedTodo(todo)}>Save</span>
    </div> :

    <li className="todo-row">
        <label className={todo.complete ? "complete" : undefined }>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
            <b>Task: </b>{todo.task}
        </label>
        <IconButton >
            <EditIcon onClick={() => editTodo(todo)}/>
        </IconButton>
        <label>
           <b>By: </b>{todo.user}
        </label>
        <IconButton >
            <DeleteIcon onClick={() => deleteTodo(todo)}/>
        </IconButton>
    </li>
    }