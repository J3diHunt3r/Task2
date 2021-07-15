import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@material-ui/core";
interface AddTodoFormProps {
    addTodo: (newTodo: string, newUser: string) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo}) => {
    //todo
    const [newTodo, setNewTodo, ] = useState("");
    //userName
    const [newUser, setNewUser] = useState("");
    //for changes and text input for the task
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }
    //for changes and text input for the userName
    //both value are set to e as onSubmit can only carry one attribute, otherwise the values wont display
    const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
        setNewUser(e.target.value);
    }
    //Submitting the data to the list
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo, newUser);
        if(newTodo.length == 0) return;
        setNewTodo("");
        if(newUser.length == 0) return;
        setNewUser("");
    }

    return (
        <form >
           <input 
            type="text" 
            value={newTodo} 
            onChange={handleChange}
            placeholder= "Task"
           />
           <input 
            type="text" 
            value={newUser} 
            onChange={handleChange2}
            placeholder= "Username"
           />
           <Button type="submit" onClick={handleSubmit}>Add Todo</Button>
        </form>
    )
}