import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css'

import Header from './Header';
import Navselect from './navSelect';
import Todo from './Todo';
import Addtodoform from './addTodoForm';

function App() {

  const [ToDos , setTodos] = useState( [ ] )
  const [status , setStatus] = useState ( false )
  
  const filterTodo = ToDos.filter(item => item.isDone === status);
  
  return (
    <>
        <Header />

        <main>
          
          <section className="py-5 mb-5">
            <div className="container d-flex flex-column align-items-center">
                <p className="display-6 fw-light">Welcome !</p>
                <p className="text-dark text-opacity-50">To get started, add some items to your list:</p>
                
                <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-4">
                  <Addtodoform todos={ToDos} addToList={setTodos}/>
                </div>

            </div>
          </section>

          <section>
            <div className="container">
              <div className="d-flex flex-column align-items-center row">

                <Navselect todos = {ToDos} status = {status}  setStatus = {setStatus} /> 

                  <div className="col-sm-10 col-md-8 col-xl-6">
                     {
                       (filterTodo.length>0) 
                       ? filterTodo.map(item => (item.isDone === status) && <Todo key={item.id} todoState={ item } setTodoState = {setTodos} todoList ={ToDos}/>)
                       : <p className="mt-5 text-center fs-4 text-muted">The list of todos EMPITY</p> 
                     }
                  
                  </div>

              </div>
            </div>
          </section>

        </main>




     
    </>
  );
}

export default App;
