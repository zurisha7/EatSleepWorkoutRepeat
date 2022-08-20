import React from "react";
import eat from '../../images/eat.jpeg'
import sleep from '../../images/sleep.jpeg'
import workout from '../../images/workout.jpeg'

const Home =() => {

  //my guess
   // const [formData, setFormData] = useState()

    return (

        <section>
        <div className="container">    
          <div className="row">
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-heading">EAT</div>
                <div className="panel-body"><img src={eat} className="img-responsive" style={{width:"100%"}} alt="Food"/></div>
                <div className="panel-footer">How many calories did you eat?</div>
                <label htmlFor="text" style={{padding: "10px"}}>  Calories Consumed:</label>
                <input type="text" id="lname" name="lname"/><br/><br/>
                <input type="submit" value="Submit"/>
              </div>
            </div>
            <div className="col-sm-4"> 
              <div className="panel panel-primary">
                <div className="panel-heading">SLEEP</div>
                <div className="panel-body"><img src={sleep} className="img-responsive" style={{width:"100%"}} alt="SLEEP"/></div>
                <div className="panel-footer">What was your sleep rating?</div>
                <label htmlFor="text" style={{padding: "10px"}}>  Sleep Rating:</label>
                <input type="text" id="lname" name="lname"/><br/><br/>
                <input type="submit" value="Submit"/>
              </div>
            </div>
            <div className="col-sm-4"> 
              <div className="panel panel-primary">
                <div className="panel-heading">WORKOUT</div>
                <div className="panel-body"><img src={workout} class="img-responsive" style={{width:"100%"}} alt="WORKOUT"/></div>
                <div className="panel-footer">How many calories did you burn?</div>
                <label htmlFor="text" style={{padding: "10px"}}>  Calories Burned:</label>
                <input type="text" id="lname" name="lname "/><br/><br/>
                <input type="submit" value="Submit"/>
              </div>
            </div>
          </div>
        </div>
       </section>
    )
    };
export default Home;