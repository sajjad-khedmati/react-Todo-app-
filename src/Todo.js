import React, { useState } from 'react';

import EditTodo from './EditTodo'

export default function Todo(props) {

    const [editStatus , setEditStatus] = useState(false);
    const { todoState , setTodoState , todoList} = props;
    
    
    // controlling on Show or Hide Edit form 
    const editTodo = () => {
        setEditStatus(!editStatus)
    }
    
    // cahnge the < isDone > in todos
    const checkTodo = () => {

        todoState.isDone = !todoState.isDone;

        const updateTodoList = todoList.filter(item => item.id !== todoState.id);

        setTodoState([...updateTodoList , todoState]);

    }

    // Edited Todo (get parameter from childComponent)
    const addEditedTodo = (editText) => {

        const EditedTodoItem = todoList.find(item => item.id === todoState.id);
        const updateTodoList = todoList.filter(item => item.id !== todoState.id);

        EditedTodoItem.text = editText;

        setTodoState([...updateTodoList , EditedTodoItem]);
    }

    // deleted todo from todos State
    const deleteTodo = () => {
        const updateTodoList = todoList.filter(item => item.id !== todoState.id);
        setTodoState([...updateTodoList]);
    }

    
    const linkStyle = {
        cursor:'pointer'
    }

    return (
        <>
            {
                (editStatus) ? 
    
                <EditTodo editTodo={editTodo} addEditedTodo={addEditedTodo}/>
    
                :
                    <div className="d-flex justify-content-between align-items-center shadow-sm border-start border-2 rounded p-3 mt-3">
                        <div>
                        {(!todoState.isDone) ?
                            <a style={linkStyle} onClick={checkTodo} class="text-success text-decoration-none me-3" type="checkbox" id={todoState.text}>Do</a> 
                            : 
                            <a style={linkStyle} onClick={checkTodo} class="text-danger text-decoration-none  me-3" type="checkbox" id={todoState.text}>unDo</a> 
                        }
                        <label class="form-check-label" for={todoState.text}>
                            {todoState.text}
                        </label>
                        </div>        
                        <div>                           
                           {
                               (!todoState.isDone) 
                               ? 
                                    <button onClick={editTodo} type="button" className="btn btn-success btn-sm">edit</button>
                               :
                               null
                           }
                            <button onClick={deleteTodo} type="button" className="btn btn-danger btn-sm ms-1">delete</button>
                        </div>

                    </div>
            }
            

        </>
    )
}
