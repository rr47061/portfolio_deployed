import React, { Component } from 'react';
import './testStyle.css';


const TodoForm = (props) => {
    return (
        <form onSubmit={ props.addTask}>
            <h1> hello world </h1>
            <input type="text"
               value={props.currentTask}
                onChange={props.updateTask}
                />
            <button type={"submit"}>Submit </button>
        </form>

    )
};

export default TodoForm;