import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {getMeals} from "../../../data/meals";
import "./Meals.css"

const Meals = (props) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getMeals();
      setMeals(data)
    }
    fetchData()
  }, [])

  return (
    <div className="meals">
      <h1> Our Meals</h1>
      <div className="mealsRow">
      <ul>
        {meals.map((meal, i) => (
          <li key={(meal.id, i)}>
            <div className="column card">
                <div className="container">
                  <h3 className="title">
                     <span>{meal.title}</span>
                  </h3><hr></hr>
                  <p>
                    Description: <span>{meal.description}</span>
                  </p><hr></hr>
                  <p>
                    Price: <span>{meal.price}</span>
                  </p><hr></hr>
                  <p className="reserve">
                    <Link to={`/meals/${meal.id}`}>
                      <button>Reserve</button>
                    </Link>
                  </p>
              </div>
            </div>
          </li>
        ))}
      </ul></div>
    </div>
  );
};

export default Meals;