import React from 'react';
import { IconButton } from "@material-ui/core";
import FilterListIcon from '@material-ui/icons/FilterList';

interface TodoListFilter {
    currentFilter: CurrentFilter;
}
//calling out each filter function from the App.tsx file. however only the actual IconButtons work with the onClick 
export const TodoFilter: React.FC<TodoListFilter> = ({ currentFilter }) => {
    return (
        <ul>
            Filter Tasks:
            <li>
                <IconButton >
                    <FilterListIcon onClick={() => currentFilter('All')}/> By All
                </IconButton>
            </li>
            <li>
                <IconButton >
                    <FilterListIcon onClick={() => currentFilter('Complete')}/> By Completed
                </IconButton>
            </li>
            <li>
                <IconButton >
                    <FilterListIcon onClick={() => currentFilter('Incomplete')}/> By Incompleted
                </IconButton>
            </li>
        </ul>
    )
}