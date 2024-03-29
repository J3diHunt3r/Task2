//applying every function, prop, parameter and functions with their respective types


type Todo = {
    id: number;
    task: string;
    user: string;
    complete: boolean;
    edit: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string, newUser: string) => void;

type DeleteTodo = (currentTodo: Todo) => void;

type EditTodo = (editCurrentTodo: Todo) => void;

type GetEditText = (todoId: number, getEditedTodo: string) => void;

type SaveEditedTodo = (saveEditedTodo: Todo) => void;

type CurrentFilter = (currentFilter: string) => void;