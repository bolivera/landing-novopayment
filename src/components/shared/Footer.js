import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-primary border border-bottom-0 border-start-0 border-end-0  border-3">
            <div className="container-fluid">
                <div className=" py-4">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-center text-center mb-2 mb-lg-0">
                            <a href="#" className="ms-2">
                                <img src="./assets/images/logo.svg" alt="Logo" />
                            </a>
                        </div>
                        <div className="col-lg-4 text-lg-center text-center mb-2 mb-lg-0">
                            <span className="text-white">© 2023  Novopayment Inc. All rights reserved</span>
                        </div>
                        <div className="col-lg-4 text-lg-center  text-center mb-2 mb-lg-0">
                            <a href="#" className="ms-2">
                                <img src="./assets/images/logo.svg" alt="Logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;