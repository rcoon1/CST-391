import React from "react";

const OneProduct = (props) => {
    return (
        <div className='container'>
            <h2>Product Details for {props.product.name}</h2>
            <div className='row'>
                <div className='col col-sm-3'>
                    <div className='card'>
                        <img
                        src={props.product.image}
                        className='card-img-top'
                        alt={props.product.name}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>{props.product.name}</h5>
                            <p className='card-text'>{props.product.price}</p>
                            <p className='card-text'>{props.product.description}</p>
                            <p className='card-text'>{props.product.onHand}</p>

                            <a href='/#' className='btn btn-primary'>
                                Edit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OneProduct;