import React from "react";

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#303481' }}>
                <div className="container-fluid">
                    <div className="ms-3">
                        <a className="navbar-brand" href="">
                            <img src="/img/logo.png" alt="Avatar Logo" style={{ width: '123px'}} className="rounded-pill" />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-5">
                                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Home</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Room</a>
                            </li>
                            <li className="nav-item mx-5">
                                <a className="nav-link" href="#" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
