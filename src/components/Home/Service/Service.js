import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, cost, type, country, duration } = service
    return (
        <div className="bg-secondary text-white col-lg-4 col-sm-6 col-12 p-3 border">
            <h2 className="">{name}</h2>
            <img className="img-fluid" src={img} alt="" />
            <h4>Type:{type}</h4>
            <h4>Country:{country}</h4>
            <h4>Duration:{duration}</h4>
            <h3>Price: {cost}$</h3>

            <Link to={`/anrolled/${_id}`}>
                <button className="btn btn-warning">Enroll {name}</button>
            </Link>
        </div>
    );
};

export default Service;