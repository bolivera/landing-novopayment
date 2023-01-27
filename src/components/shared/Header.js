import React from "react";

const Header = () => {
    return (
        <div>
            <header>
                <div  className="py-4 pt-lg-3  bg-primary">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-6"><a href="#" className="ms-2">
                                <img src="/assets/images/tec.svg" alt="Logo"/>
                            </a>
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-end me-4">
                                    <div className="list-inline-item">
                                        <a href="#" className="text-muted position-relative link-light text-decoration-none">
                                            <span className="me-3 text-white fs-4 fw-normal">Belser Olivera</span>
                                            <img src="/assets/images/down.svg"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link fs-5 active" aria-current="page" href="#">Lista de tarjetas</a></li>
                            <li className="nav-item"><a className="nav-link fs-5" href="#">Transferencia y pagos</a></li>
                            <li className="nav-item"><a className="nav-link fs-5" href="#">Atención al cliente</a></li>
                            <li className="nav-item"><a className="nav-link fs-5" href="#">Empresas</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;