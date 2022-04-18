import React from "react";

const Card = (props) => {

    const handleButtonClick = (event, uri) => {
        console.log('ID clicked is ' + props.recipeId);
        props.onClick(props.recipeId, uri);
    };

    return (
        <div className="card" style={{ width: '12rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.recipename}</h5>
                
                <p className="card-text">{props.recipeinstructions}</p>
                <p className="card-text">{props.recipedifficulty}</p>
                <p className="card-text">{props.recipedate}</p>
                <button
                    onClick={() => handleButtonClick(props.recipeId, '/show/')}
                    className="btn btn-primary">
                    {props.buttontext}

                </button>
                <button
                    onClick={() => handleButtonClick(props.recipeId, '/edit/')}
                    className="btn btn-secondary">
                    Edit
                </button>
            </div>
        </div>
    );
}
export default Card;