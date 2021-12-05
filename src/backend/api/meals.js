const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const titles = await knex("meals").select("title");
        response.json(titles);
    } catch (error) {
        throw error;
    }
});

//Returns all meals
router.get("/titles", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const titles = await knex("meals").select("title");
        response.json(titles);
    } catch (error) {
        throw error;
    }
});
//Adds a new meal
router.post("/", async(request, response) => {
    try {
        console.log(request.body)
        const newMeal = await knex("meals").insert(request.body);
        response.send(`New meal: ${request.body.title}`);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Returns meal by id
router.get("/:id", async(request, response) => {
    try {
        const mealById = await knex("meals").where("id", parseInt(request.params.id));
        response.json(mealById);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Updates the meal by id	
router.put("/:id", async(request, response) => {
    try {
        const updateMealById = await knex("meals")
            .where("id", parseInt(request.params.id))
            .update(request.body);
        response.json(updateMealById);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Deletes the meal by id
router.delete("/:id", async(request, response) => {
    try {
        const deleteMealById = await knex("meals")
            .where("id", parseInt(request.params.id))
            .del();
        response.json(`Deleted meal: ${deleteMealById}`);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});

//Query. Get meals that has a price smaller than maxPrice

//Query Parameters
//	Get meals that has a price smaller than maxPrice
router.get("/", async(request, response) => {

    //     '   if ('
    //     maxPrice ' in request.query) {
    //     meals = meals.where('price', '<=', parseInt(request.query.maxPrice))
    //     response.send()
    // }

    //Get meals that still has available reservations
    // if ('availableReservations' in request.query) {
    //     meals = meals
    //         .select('meals.id')
    //         .leftJoin('reservations', { 'meals.id': 'reservations.meal_id' })
    //         .count({ 'reservations': 'reservations.meal_id' })
    //         .groupBy('meals.id')
    //         .having(knex.raw('meals.max_reservations > reservations'));
    // }
    //Get meals that partially match a title.
    // if ('title' in request.query) {
    //     meals = meals.where("meals.title", "like", `%${request.query.title}%`)
    // }
    // //Get meals that has been created after the date	
    // if ('createdAfter' in request.query) {
    //     meals = meals.where("meals.createdAfter", ">", request.query.createdAfter);
    // }
    // //Only specific number of meals
    // if ('limit' in request.query) {
    //     meals = meals.limit(parseInt(request.query.limit));
    // }
    try {
        let meals = knex('meals');

        response.json(meals);
    } catch (error) {
        console.log(error);
        throw (error);
    }
});

module.exports = router;