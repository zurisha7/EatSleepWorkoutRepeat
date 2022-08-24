import React, { useState } from "react";
import eat from '../../images/eat.jpeg';
import { useMutation } from '@apollo/client';
import { ADD_EAT } from "../../utils/mutations";
import { QUERY_EAT, QUERY_EATS, QUERY_ME } from "../../utils/queries";


const Eat = () => {
  const [formState, setFormState ] = useState({ date: '', caloriesEaten: '' })

  const [addEat, {error}] = useMutation(ADD_EAT, {
      update(cache, {data: { addEat }} ){

        try { 
          const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
              query: QUERY_ME,
              data:  { me: { ...me, eats: [ ...me.eats, addEat ]} }
        });
      } catch (err) {
        console.error(err);
      }
  
      const { eats } = cache.readQuery({ query: QUERY_EAT });
        cache.writeQuery({
          query: QUERY_EATS,
          data: { eats: [addEat, ...eats]},
        });
      }
    });

    const handleChange = (event) => {
      const {name, value} = event.target;

      setFormState({
        ...formState,
        [name]: value
      });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
        const { data } = await addEat({
          variables: {...formState }
        });

        addEat(data.addEat)
      } catch(err) {
        console.error(err)
      }

      setFormState({
        date: '',
        caloriesEaten: ''
      })
    }
  
    return (
    <section>
        <form className="container" onSubmit={handleFormSubmit}>
    <div className="row">
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading">EAT</div>
          <label htmlFor="text" style={{padding: "10px"}}>Calories Eaten</label>
          <input type="text" id="lname" name="caloriesEaten" placeholder="Calories" value={formState.caloriesEaten} onChange={handleChange}/><br/><br/>
          <label htmlFor="text" style={{padding: "10px"}}>Date</label>
          <input type="date" id="lname" name="date" placeholder="date" value={formState.date} onChange={handleChange}/><br/><br/>
          <input type="submit" value="Submit"/>
        </div>
      </div>
      </div>
      </form>
      {error && <div></div>}
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading">PREVIOUS FOOD</div>
            <title>Previous Eat</title>
<div className="container mt-3">
  <h2>Eat</h2>
  <div className="card img-fluid" style={{width: "500px"}}>
    <img className="card-img-top" src={eat} alt="Eat" style={{width:"85%", opacity: "0.5"}}/>
    <div className="card-img-overlay">
      <h4 className="card-title">Calories Eaten:</h4>
      <p className="card-text">Date:</p>
      {/* <a href="#" className="btn btn-primary">Edit Eat</a> */}
    </div>
  </div>
</div>
</div>
</div>
</section>

    )

}

export default Eat;