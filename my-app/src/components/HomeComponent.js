import React, { Component } from 'react';
import Background from '../noodle3.jpg';
import { Button } from "reactstrap";

function Home(props) {

    return (
        <div  className="container background" >
            <img className="mx-auto d-block img-fluid " src={ Background } />
            <Button className="text-center">Start Order</Button>
        </div>
    );
}

export default Home;   