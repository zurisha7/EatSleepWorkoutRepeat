import React from 'react';
import sleepImg from '../../images/sleep.jpeg';

const SleepList = ({ sleeps, title }) => {
    if (!sleeps.length) {
        return <h3>You havent slept yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {sleeps &&
                sleeps.map(sleep => (
                    <div key={sleep._id} className="card img-fluid" style={{ width: "500px" }}>
                        <img className="card-img-top" src={sleepImg} alt="sleep" style={{ width: "85%", opacity: "0.5" }} />
                        <div className="card-img-overlay">
                            <h4 className="card-title">Time Slept {sleep.timeSlept}</h4>
                            <p className="card-text">Sleep Rating {sleep.sleepRating}</p>
                            {/* <a href="#" className="btn btn-primary">Edit Sleep</a> */}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default SleepList;