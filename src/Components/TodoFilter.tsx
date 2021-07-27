import React from 'react';
import { IconButton } from "@material-ui/core";
import FilterListIcon from '@material-ui/icons/FilterList';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface TodoListFilter {
    currentFilter: CurrentFilter;
}
//calling out each filter function from the App.tsx file. however only the actual IconButtons work with the onClick 
export const TodoFilter: React.FC<TodoListFilter> = ({ currentFilter }) => {
    return (
        <div className="filtering">
            Filter Tasks:By All
                <IconButton >
                    <FilterListIcon onClick={() => currentFilter('All')}/> 
                </IconButton>By Completed
                <IconButton >
                    <FilterListIcon onClick={() => currentFilter('Complete')}/>
                </IconButton>By Incompleted
                <IconButton >
                    <FilterListIcon onClick={() => currentFilter('Incomplete')}/> 
                </IconButton>
        </div>
    )
}