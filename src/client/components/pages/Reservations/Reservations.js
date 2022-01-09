import React, { useState, useEffect } from "react";
import { getReservations } from "../../../data/reservations";
import "./Reservations.css"

const Reservations = (props) => {
    const [reservations, setReservations] = useState([]);
    const [inputState, setInputstate] = useState(false);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState("");
    const [email, setEmail] = useState("");
    const [mealId, setMealId] = useState("");
    const [date, setDate] = useState("");


    useEffect(() => {
        async function fetchData() {
            const data = await getReservations();
            setReservations(data)
        }
        fetchData()
    }, [])

    function newReservation() {
        if (email !== "") {
            setInputstate(true);
            fetch("/api/reservations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contact_name: name,
                    contact_phonenumber: phoneNumber,
                    contact_email: email,
                    meal_id: mealId,
                    number_of_guests: numberOfGuests,
                    created_date: date,
                }),
            })
                .catch((e) => {
                    setError(e);
                    alert("not valid details");
                })
                .finally(() => {
                    setInputstate(false);
                    alert("Thank you, your reservation is added!");
                });
        }
    }

    return (
        <div className="addReservation">
            <h3>Provide your reservation details </h3>
            <div>
            <div>
                <label>
                    Name* :
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        defaultValue={""}
                        placeholder="Your name"
                        required
                    />
                </label>
                </div>
                <div>
                <label>
                    Telephone Number* :
                    <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="int"
                        defaultValue={""}
                        placeholder="Contact"
                        required
                    />
                </label>
                </div>
                
                <div>
                <label>
                    Email* :
                    <input
                        onChange={(e) => setEmail(e.target.value)}

                        type="text"
                        defaultValue={""}
                        placeholder="email@domain.com"
                        required
                    />
                </label>

                </div>  
                <div>              
                <label>
                    Meal Id* :
                  <input
                        onChange={(e) => setMealId(e.target.value)}

                        type="text"
                        defaultValue={""}
                        placeholder="Meal id"
                        required
                    />
                </label>
                </div>
               
                <div>
                <label>
                    Number Of Guests* :
                  <input
                        onChange={(e) => setNumberOfGuests(e.target.value)}

                        type="int"
                        defaultValue={""}
                        placeholder="number"
                        required
                    />
                </label>
                </div>
                
                <div>
                <label>
                    Reservation date* :
                    <input
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        defaultValue={"yyyy-mm-dd"}
                        placeholder="Date"
                        required
                    />
                </label>
                </div>
               
                <button onClick={newReservation}>Add reservation</button>
            </div>
        </div>
    );
}
export default Reservations;
