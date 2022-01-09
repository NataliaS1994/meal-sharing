import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Meals from './components/pages/MealsPage/Meals';
import AddMeals from './components/pages/AddMeal/AddMeal';
import Reservations from './components/pages/Reservations/Reservations';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/meals" exact component={Meals} />
        <Route path="/add-meal" exact component={AddMeals} />
        <Route path="/reservations" exact component={Reservations} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
