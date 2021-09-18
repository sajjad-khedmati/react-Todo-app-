import React from 'react'

export default function Navselect(props) {
    
    const {todos , status , setStatus} = props;

    return (
        <>
            <nav className="col-sm-10 col-md-8 col-xl-6">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className={`nav-item nav-link font-weight-bold ${!status  && 'active'}`} onClick={()=>setStatus(false)} > undone <span className="badge bg-secondary ms-1">{todos.filter(item => (item.isDone === false)).length}</span></button>
                    <button className={`nav-item nav-link font-weight-bold ${status && 'active'}`} onClick={()=>setStatus(true)} > done <span className="badge bg-success ms-1">{todos.filter(item => (item.isDone === true)).length}</span></button>
                </div>
            </nav>    
        </>
    )
}
