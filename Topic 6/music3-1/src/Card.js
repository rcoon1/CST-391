import React from "react";
import ReactDOM from 'react-dom';

const Card = (props) => {
    return (
        <div className="card" style={{ width: '12rem' }}>
            <img src={props.imgURL} className="card-img-top" alt="Image name" />
            <div className="card-body">
                <h5 className="card-title">{props.albumTitle}</h5>
                <p className="card-text"> {props.albumDescription}</p>
                <button onClick={()=> props.buttonUrl()} className="btn btn-primary">{props.buttonText}</button>
            </div>
        </div>
    );

}
export default Card;