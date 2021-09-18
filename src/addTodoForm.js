import React , {useState} from 'react';

export default function Addtodoform(props) {

    const [inputText , setInputText] = useState('');

    const inputHandler = (e) => {
        setInputText(e.target.value)
    }

    const {addToList} = props;
    
    const submitHandler = (event) => {
        event.preventDefault();
        if(inputText){
        const todo = { id:Date.now() , text : inputText , isDone:false }
    
        addToList( prevState => [...prevState , todo] )
    
        setInputText('');
        }
    }

    return (
        <>
            <form onSubmit={submitHandler} className="input-group my-3">
                <input name='todoInput' value={inputText} onChange={inputHandler} type="text" className="p-2 form-control" placeholder="i want to do ..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-success" type="submit" id="button-addon2">Add Todo</button>
            </form>  
        </>
    )
}
