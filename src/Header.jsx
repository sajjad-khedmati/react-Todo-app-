export default function Header() {
    
    let titleStyle ={
        border:'none',
        outline:'none',
        background:'transparent',
        fontWeight:'300',
        fontSize:'1.4rem'
    }

    return (
        <>
            <header>
                <div className="navbar navbar-light shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <button href="#" className="navbar-brand" style={titleStyle}>
                        <strong>Todo App</strong>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
