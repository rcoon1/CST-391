import React from "react";

const Card = (props) => {
    const handleButtonClick = (event, uri) => {
        console.log('ID clicked is '+props.Id);
        props.onClick(props.productId, uri);
    }
    const handleDeleteClick = (event, uri) => {
        console.log(props);
        console.log('ID clicked is ' + props.productId);
        props.onDelete(props.productId);
    }

    return (
        <div className="card" style={{ width: '12rem' }}>
            <img src={props.imgURL} className="card-img-top" alt="Image name" />
            <div className="card-body">
                <h5 className="card-title">{props.productName}</h5>
                <p className="card-text"> {props.productDescription}</p>
                <button 
                    onClick={()=>handleButtonClick(props.productId,'/show/')}
                    className="btn btn-primary">
                    {props.buttonText}
                </button>
                <button 
                    onClick={()=>handleButtonClick(props.productId,'/edit/')}
                    className="btn btn-primary">
                    Edit
                </button>
                <button
                    onClick={() => handleDeleteClick(props.productId)}
                    className="btn btn-danger" >Delete</button>
            </div>
        </div>
    );

}
export default Card;