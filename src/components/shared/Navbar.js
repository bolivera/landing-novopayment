import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
    const [jsonData, setJsonData] = useState({});

    //consulta al servicio de menus
    useEffect(() => {
        axios.get('./servicio.json')
            .then(res => setJsonData(res.data))
            .catch(err => console.log(err));
    }, []);


    //Texto por defecto para mostar en enlace
    const sinDatos = 'Sin datos';

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 py-0">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        {jsonData.lista && jsonData.lista.map((item, index) => (
                            <ul className="navbar-nav" key={index}>
                                <li className="nav-item dropdown">
                                    <a className="nav-link fs-5 active" aria-current="page" href="#">Lista de tarjetas</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link fs-5" href="#">Transferencia y pagos</a>
                                    <ul className='dropdown-menu'>
                                        {item.pays_transfer.length > 0 && item.pays_transfer.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                {(subItem.between_cards) ? <a href="#" className='dropdown-item'>Entre tarjetas</a> : <span className='dropdown-item'>{sinDatos}</span>}
                                                {(subItem.banks) ? <a href="#" className='dropdown-item'>Cuenta bancaria</a> : <span className='dropdown-item'>{sinDatos}</span>}
                                                {(subItem.credit_card) ? <a href="#" className='dropdown-item'>Tajertas de credito</a> : <span className='dropdown-item'>{sinDatos}</span>}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link fs-5" href="#">Atención al cliente</a>
                                    <ul className='dropdown-menu'>
                                        {item.support.length > 0 && item.support.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                {(subItem.lock) ? <a href="#" className='dropdown-item'>Bloqueos</a> : <span className='dropdown-item'>{sinDatos}</span>}
                                                {(subItem.change_pass) ? <a href="#" className='dropdown-item'>Cambio de contraseña</a> : <span className='dropdown-item'>{sinDatos}</span>}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link fs-5" href="#">Empresas</a>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );

    return (
        <div>
            <div className="navbar navbar-expand-lg bg-body-tertiary px-5">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {jsonData.lista && jsonData.lista.map((item, index) => {
                            <ul>
                                <li>
                                    hola
                                </li>
                            </ul>
                        })}
                        {/* {jsonData.lista.map((item, index) => (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link fs-5 active" aria-current="page" href="#">Lista de tarjetas</a>
                                </li>
                                <li className="nav-item"><a className="nav-link fs-5" href="#">Transferencia y pagos</a></li>
                                <li className="nav-item"><a className="nav-link fs-5" href="#">Atención al cliente</a></li>
                                <li className="nav-item"><a className="nav-link fs-5" href="#">Empresas</a></li>
                            </ul>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );

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
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link fs-5 active" aria-current="page" href="#">Lista de tarjetas</a>
                        </li>
                        <li className="nav-item"><a className="nav-link fs-5" href="#">Transferencia y pagos</a></li>
                        <li className="nav-item"><a className="nav-link fs-5" href="#">Atención al cliente</a></li>
                        <li className="nav-item"><a className="nav-link fs-5" href="#">Empresas</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;