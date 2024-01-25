import logo from './logo.svg';

function Navbar(){

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">      
            <p className="navbar-brand">
                <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                d-Mail
            </p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <p className="nav-link active" aria-current="page" href="#">Home</p>
                </li>
                <li className="nav-item">
                <p className="nav-link" href="#">Link</p>
                </li>
                <li className="nav-item">
                <p className="nav-link disabled" aria-disabled="true">Disabled</p>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;