import React, { Component } from 'react';


import "./Home.scss";

class Home extends Component {
    //render de component
    render() {
        return (
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <div className="h-150 bg-content" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/bg-content.jpg'})` }}></div>
                    </div>
                </div>
            </main>
        );
    }
}
export default Home;