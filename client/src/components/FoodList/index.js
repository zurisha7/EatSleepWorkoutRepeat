import React from 'react';
import foodImg from '../../images/eat.jpeg';

const FoodList = ({ foods, title }) => {
    if (!foods.length) {
        return <h3>You havent eaten yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {foods &&
                foods.map(food => (
                    <div key={food._id} className="card img-fluid" style={{ width: "500px" }}>
                        <img className="card-img-top" src={foodImg} alt="sleep" style={{ width: "85%", opacity: "0.5" }} />
                        <div className="card-img-overlay">
                            <h4 className="card-title">Time Slept {food.foodName}</h4>
                            <p className="card-text">Sleep Rating {food.caloriesEaten}</p>
                            {/* <a href="#" className="btn btn-primary">Edit Sleep</a> */}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default FoodList;