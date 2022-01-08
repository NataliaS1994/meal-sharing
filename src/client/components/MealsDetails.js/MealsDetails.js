import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MealsDetails.css";
import Moment from 'moment';

const initialValues = {
  fullName: "",
  phoneNumber: "",
  email: "",
  noOfReservations: "",
};
const date = Moment(new Date()).format('YYYY-MM-DD');

const MealsDetails = (props) => {
  const { id } = useParams();
  const [index,setIndex]=useState(0);
  const meal = props.meals.filter((m,i) => m.id == Number(id))[0];
  const [show, setShow] = useState(false);
  const [inputValues, setInputValues] = useState(initialValues);
  const [availReserves, setAvailReserves] = useState(null);

  useEffect(() => {
    fetch(`api/meals?availableReservations=true`)
        .then(res => res.json())
        .then(meals => {
            const mealD = meals.filter((m) => m.id === Number(id))[0];
            setIndex(props.meals.map((m)=>m.id).indexOf(Number(id)));
            setAvailReserves(mealD ? mealD.No_of_available_reservations : meal.max_reservations)
        })
      }, [meal]);
  // Input OnChange function
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  //on submit function
  async function onSubmit(e) {
    e.preventDefault();
    const reservation = {
      contact_name: inputValues.fullName,
      contact_email: inputValues.email,
      contact_phonenumber: inputValues.phoneNumber,
      number_of_guests: inputValues.noOfReservations,
      created_date: date,
      meal_id: meal.id,
    };

    //booking reservation
    try {
      await fetch("/api/reservations", reservation);
      const messagge = `Thank You, Your Reservation Booked`;
      alert(messagge);
    } catch {
      alert("Your reservation is not booked...");
      throw new Error("Your reservation is not booked...");
    }
    //making inputs empty
    setInputValues(initialValues);
    setShow(false);
  }
  return (
    <div className="mealDetails">
      <h1>Meal-Details</h1>
      <img src={Pics[index] || Nigiri} alt='foodpic'/>
      {meal && <>
      <div>Title: <span>{meal.title}</span></div>
      <div>Description: <span>{meal.description}</span></div>
      <div>price: <span>{meal.price}</span></div>
      <div>location: <span>{meal.location}</span></div>
      <div>when: <span>{meal.when.slice(0,10)}</span></div>
      <div>Maximum Reservations: <span>{meal.max_reservations}</span></div>
      <div>Available Reservations: <span>{availReserves}</span></div>
      </>}
      <button onClick={()=>setShow(true)}>RESERVE</button>
      <div>
      {show && <> {availReserves>0 && <form onSubmit={onSubmit} className="ReservationForm">
      <div >
  <label htmlFor="fullname">Full Name:</label>
  <input type="text" id="fullname" name="fullName" value={inputValues.fullName}
            required
            onChange={handleOnChange}/><br/></div>
            <div>
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" value={inputValues.email}
            required
            onChange={handleOnChange}/><br/></div>
            <div>
  <label htmlFor="phone">Phone Number</label>
  <input type="tel" id="phone" name="phoneNumber" value={inputValues.phoneNumber}
            required
            onChange={handleOnChange}/><br/></div>

            <div>
  <label htmlFor="No_reservations">No. of Reservations:</label>
  <input type="number" id="No_reservations" name="noOfReservations" value={inputValues.noOfReservations}
            required
            onChange={handleOnChange} min='1' max={availReserves}/><br/></div>

  <button type="submit">Add Reservation</button>
</form>}
{availReserves==0 && <h1>Sorry, Fully Booked</h1>}
<button onClick={()=>setShow(false)}>Close Reserve</button></>
}

</div>
    </div>
  );
};

export default MealsDetails;