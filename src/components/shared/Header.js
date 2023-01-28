import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Header = () => {
    const [jsonData, setJsonData] = useState({});

    // useEffect(() => {
    //     axios.get('./servicio.json')
    //         .then(res => setJsonData(res.data))
    //         .catch(err => console.log(err));
    // }, []);

    // const menuItems = jsonData.lista && jsonData.lista.map((item, index) => {
    //     console.log(item);
    //     return (
    //         <li key={index} className="nav-item">
    //             <a className="nav-link" href="#">{item.name}</a>
    //             {item.submenu &&
    //                 <ul className="sub-menu">
    //                     {item.submenu.map((subitem, subindex) => {
    //                         return <li key={subindex}><a href="#">{subitem.name}</a></li>
    //                     })}
    //                 </ul>
    //             }
    //         </li>
    //     )
    // });


    // return (
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //         {/* <a className="navbar-brand" href="#">Menu</a> */}
    //         <div className="collapse navbar-collapse" id="navbarNav">
    //             <ul className="navbar-nav">
    //                 {menuItems}
    //             </ul>
    //         </div>
    //     </nav>
    // );

    // static defaultProps = {
    //     name: "Sin nombre"
    // };

    // state = {
    //     carlista: {},
    //     paysTransfer: {},
    //     support: {},
    //     enterPrises: {},
    // }

    // //listar el menu desde json
    // componentDidMount() {
    //     axios.get('./servicio.json')
    //         .then(response => {
    //             // respuesta del servicio
    //             const { lista } = response.data
    //             if (!lista || lista.length == 0) return
    //             const { card_list, enterprises, pays_transfer, support } = lista[0];

    //             this.setState({
    //                 carlista: card_list,
    //                 paysTransfer: pays_transfer,
    //                 support: support,
    //                 enterPrises: enterprises,
    //             });
    //         })
    //         .catch(error => {
    //             //se puede agregar una alerta de probleams con el servicio
    //             console.log(error);
    //         });
    // }

    return (
        <div>
            <header>
                <div className="py-4 pt-lg-3  bg-primary">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <a href="#" className="ms-2">
                                    <img src="/assets/images/tec.svg" alt="Logo" />
                                </a>
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-end me-4">
                                    <div className="list-inline-item">
                                        <a href="#" className="text-muted position-relative link-light text-decoration-none">
                                            <span className="me-3 text-white fs-4 fw-normal">Belser Olivera</span>
                                            <img src="/assets/images/down.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Navbar/>
        </div>
    );

}

export default Header;