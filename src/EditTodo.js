import React, { useState , useRef, useEffect } from 'react'

export default function Edittodo(props) {

    
    const {editTodo , addEditedTodo ,defaultText } = props;
    const [editText , setEditText] = useState(defaultText);
    
    const editInput = useRef(null);

    useEffect( () => {
        editInput.current.focus();
    } , [] )

    const inputHandler = (e) => {
        setEditText(e.target.value);
    
    }

    const submitHandler = (event) => {
        event.preventDefault();
        editTodo();
        addEditedTodo(editText);
    }


    return (
        <>
            <div className="d-flex justify-content-between align-items-center shadow-sm border-start border-2 rounded p-3 mt-3">
                <form onSubmit={submitHandler} className="input-group my-3">
                    <input ref={editInput} name='todoInput' value={editText} onChange={inputHandler} type="text" class="p-2 form-control" placeholder="i want to do ..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-success" type="submit" id="button-addon2">Edit Todo</button>
                </form>  
            </div>
        </>
    )
}
