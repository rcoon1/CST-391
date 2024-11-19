import React from "react";

const Card = (props) => {
    return (
        <div className="card" style={{ width: '12rem' }}>
            <img src={props.imgURL} className="card-img-top" alt="Image name" />
            <div className="card-body">
                <h5 className="card-title">{props.productName}</h5>
                <p className="card-text"> {props.productDescription}</p>
                <button href="#" className="btn btn-primary">{props.buttonText}</button>
            </div>
        </div>
    );

}
export default Card;