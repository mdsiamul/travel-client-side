import React, { useEffect, useState } from 'react';
import Anrolled from '../../Anrolled/Anrolled/Anrolled';

import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/packges')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="container">
            <h1>Our Packges</h1>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }


            </div>
        </div>
    );
};

export default Services;