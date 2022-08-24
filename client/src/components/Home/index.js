import React from 'react';
// import { useMutation } from '@apollo/client';

// import eat from '../../images/eat.jpeg';
// import sleep from '../../images/sleep.jpeg';
// import workout from '../../images/workout.jpeg';

//import QUERY_ME from '../../utils/queries';
// import { ADD_WORKOUT } from '../../utils/mutations';
//import QUERY_WORKOUT from '../../utils/queries';

//import Auth from '../../utils/auth';

const Home = (props) => {

  //  const [ workoutFormData, setWorkoutFormData] = useState({ caloriesBurned: '' });
   //const [ eatFormData, setEatFormData ] = useState({ caloriesEaten: '' });
   //const [ sleepFormData, setSleepFormData ] = useState({ hoursSlept: '' });

  // const [addWorkout, {error}] = useMutation(ADD_WORKOUT);

  //  const workoutHandleChange = (event) => {
  //   const { name, value } = event.target;

  //   setWorkoutFormData({
  //     ...workoutFormData,
  //     [name]: value
  //   });
  //   };
    // const eatHandleChange = (event) => {
    //   const { name, value } = event.target;
  
    //   setEatFormData({
    //     ...eatFormData,
    //     [name]: value
    //   });
    // };

      // const sleepHandleChange = (event) => {
      //   const { name, value } = event.target;
    
      //   setSleepFormData({
      //     ...sleepFormData,
      //     [name]: value
      //   });
      // };

      // const handleWorkoutSubmit = async (event) =>
      //   event.preventDefault();

      //   try {
      //     const { data } = addWorkout({
      //        variables: { workoutFormData }
      //     });

          
      //   } catch(err) { 
      //     console.error(err);
      //   }

   return (
  //   <section>
  <div>HOME</div>
  //     <div className='container'>
  //       <div className='row'>
  //         <div className='col-sm-4'>
  //           <div className='panel panel-primary'>
  //             <div className='panel-heading'>EAT</div>
  //             <div className='panel-body'>
  //               <img
  //                 src={eat}
  //                 className='img-responsive'
  //                 style={{ width: '100%' }}
  //                 alt='Food'
  //               />
  //             </div>
  //             <div className='panel-footer'>How many calories did you eat?</div>
  //             <label htmlFor='text' style={{ padding: '10px' }}>
  //               {' '}
  //               Calories Consumed:
  //             </label>
  //             <input type='text' id='lname' name='lname' />
  //             <br />
  //             <br />
  //             <div className='btn-div'>
  //               <input className='btn-center' type='submit' value='Submit' />
  //             </div>
  //           </div>
  //         </div>
  //         <div className='col-sm-4'>
  //           <div className='panel panel-primary'>
  //             <div className='panel-heading'>SLEEP</div>
  //             <div className='panel-body'>
  //               <img
  //                 src={sleep}
  //                 className='img-responsive'
  //                 style={{ width: '100%' }}
  //                 alt='SLEEP'
  //               />
  //             </div>
  //             <div className='panel-footer'>What was your sleep rating?</div>
  //             <label htmlFor='text' style={{ padding: '10px' }}>
  //               {' '}
  //               Sleep Rating:
  //             </label>
  //             <input type='text' id='lname' name='lname' />
  //             <br />
  //             <br />
  //             <div className='btn-div'>
  //               <input className='btn-center' type='submit' value='Submit' />
  //             </div>
  //           </div>
  //         </div>
  //         <form className='col-sm-4' onSubmit={handleWorkoutSubmit}>
  //           <div className='panel panel-primary'>
  //             <div className='panel-heading'>WORKOUT</div>
  //             <div className='panel-body'>
  //               <img
  //                 src={workout}
  //                 className='img-responsive'
  //                 style={{ width: '100%' }}
  //                 alt='WORKOUT'
  //               />
  //             </div>
  //             <div className='panel-footer'>
  //               How many calories did you burn?
  //             </div>
  //             <label htmlFor='text' style={{ padding: '10px' }}>
  //               {' '}
  //               Calories Burned:
  //             </label>
  //             <input type='text' id='lname' name='caloriesBurned' value={workoutFormData.caloriesBurned} onChange={workoutHandleChange} />
  //             <br />
  //             <br />
  //             <div className='btn-div'>
  //               <input className='btn-center' type='submit' value='Submit' />
  //             </div>
  //           </div>
  //         </form>
  //         {error && <div></div>}
  //       </div>
  //     </div>
  //   </section>
  
  );
};
export default Home;