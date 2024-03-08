import '../css/navbar.css'

function navbar(){
    return(
        <>
        <nav className="navbar navbar-background">
        <div className="container-fluid">
            <a className="navbar-brand">Xamina Herbal</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search here" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
        </div>
        </nav>
        </>
    )
}

export default navbar;