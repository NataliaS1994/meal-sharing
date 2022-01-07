const { request, response } = require("express");
const express = require("express");
const Knex = require("knex");
const router = express.Router();
const knex = require("../database");


router.post("/", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const idMeal = await knex("meals")
        const meals = await knex("meals")
            .insert({
                id: Math.max(0, ...idMeal.map((item) => item.id)) + 1,
                title: request.body.title,
                description: request.body.description,
                location: request.body.location,
                max_reservations: request.body.max_reservations,
                when: request.body.when,
                price: request.body.price,
            })
            .then(function(result) {
                response.json({ success: true, message: "ok" }); // respond back to request
            });
        //response.json(meals);
    } catch (error) {
        throw error;
    }
});

<<
<< << < HEAD
router.get("/:id", async(request, response) => {
            try {
                // knex syntax for selecting things. Look up the documentation for knex for further info
                const meals = await knex("meals").where("id", request.params.id);
                response.json(meals); ===
                === =
                //Returns all meals
                router.get("/", async(request, response) => {
                    try {
                        const querys = [
                            "maxPrice",
                            "title",
                            "createdAfter",
                            "limit",
                            "availableReservations",
                        ];
                        const requestQuerys = Object.keys(request.query);
                        const matchQuerys = [];
                        requestQuerys.some((item) => {
                            if (querys.includes(item)) {
                                matchQuerys.push(item);
                            }
                        });

                        let sortedMeals = knex("meals")
                            .select(...selectFields)
                            .sum("reservations.number_of_guests as reserved")
                            .groupBy("idmeals")
                            .leftJoin("reservations", "reservations.meal_id", "meals.idmeals");

                        const { availableReservations, maxPrice, title, createdAfter, limit } =
                        request.query;

                        //get meals that still has available reservations     Boolean: api/meals?availableReservations=true
                        if (matchQuerys.length === requestQuerys.length) {
                            if (availableReservations) {
                                sortedMeals
                                    .having(knex.raw("max_number_of_guests > `reserved`"))
                                    .orHavingNull(`reserved`);
                            }
                            // get meals that has price smaller than maxPrice     Number: /api/meals?maxPrice=90
                            if (maxPrice) {
                                sortedMeals.where("price", "<", `${maxPrice}`);
                            }
                            // get meals that match the title	    String: /api/meals?title=Indian%20platter
                            if (title) {
                                sortedMeals.where("title", "like", `%${title}%`);
                            }
                            // get meals createdAfter the date	Date: /api/meals?createdAfter=2019-04-05
                            if (createdAfter) {
                                sortedMeals.where("created_date", ">", `${createdAfter}`);
                            }
                            // get only specific number of meals (limit)	Number: /api/meals?limit=4
                            if (limit) {
                                sortedMeals.limit(`${limit}`);
                            }
                            if (sortedMeals < 1) {
                                return response.status(200).json({ Message: "No meals found" });
                            }

                            const data = await sortedMeals;

                            response.json(data);
                        } else {
                            response.status(400).json({ error: "Request parameters not found" });
                        } >>>
                        >>> > 6e d01b3(add changes)
                    } catch (error) {
                        throw error;
                    }
                });

                <<
                << << < HEAD
                router.put("/:id", async(request, response) => {
                            try {
                                // knex syntax for selecting things. Look up the documentation for knex for further info
                                const meals = await knex("meals")
                                    .update({
                                        title: request.body.title,
                                        description: request.body.description,
                                        location: request.body.location,
                                        max_reservations: request.body.max_reservations,
                                        when: request.body.when,
                                        price: request.body.price,
                                    })
                                    .where("id", request.params.id)
                                    .then(function(result) {
                                        response.json({ success: true, message: "ok" }); // respond back to request
                                    });
                                //response.json(meals);
                                ===
                                === =
                                //Adds a new meal
                                router.post("/", async(request, response) => {
                                    try {
                                        const newMeal = await knex("meals").insert(request.body);
                                        response.json(newMeal);
                                    } catch (error) {
                                        response.status(500).end();
                                        throw error;
                                    }
                                });

                                //Updates the meal by id
                                router.put("/:id", async(request, response) => {
                                    try {
                                        const updateMeal = await knex("meals")
                                            .where({ idmeals: request.params.id })
                                            .update(request.body, ["id", ...Object.keys(request.body)]);
                                        response.json(updateMeal); >>>
                                        >>> > 6e d01b3(add changes)
                                    } catch (error) {
                                        throw error;
                                    }
                                });

                                <<
                                << << < HEAD
                                router.delete("/:id", async(request, response) => {
                                    try {
                                        // knex syntax for selecting things. Look up the documentation for knex for further info
                                        const meals = await knex("meals")
                                            .where("id", request.params.id)
                                            .del()
                                            .then(function(result) {
                                                response.json({ success: true, message: "ok" }); // respond back to request
                                            });
                                        //response.json(meals);
                                    } catch (error) {
                                        throw error;
                                    }
                                });

                                router.get("/", async(request, response) => {
                                            try {

                                                // knex syntax for selecting things. Look up the documentation for knex for further info
                                                const meals = await knex("meals");

                                                const maxPrice = request.query.maxPrice;
                                                const titles = request.query.title;
                                                const createdAfter = request.query.createdAfter;
                                                const availableReservations = request.query.availableReservations;
                                                const limit = request.query.limit;

                                                if (limit !== undefined && limit !== "" && maxPrice !== undefined && maxPrice !== "") {
                                                    const filteredMeals = meals.filter((meals) => meals.price < maxPrice);
                                                    const newMeals = [];
                                                    console.log(limit);
                                                    for (let i = 0; i < limit; i++) {
                                                        console.log(i);
                                                        newMeals.push(filteredMeals[i]);
                                                    }
                                                    response.send(newMeals);

                                                } else if (maxPrice !== undefined && maxPrice !== "") {
                                                    console.log("maxPrice");
                                                    const filteredMeals = meals.filter((meals) => meals.price < maxPrice);
                                                    response.send(filteredMeals);
                                                } else if (titles !== undefined && titles !== "") {
                                                    console.log("titles");
                                                    const filteredTitle = meals.filter((meals) => meals.title.includes(titles));
                                                    response.send(filteredTitle);

                                                } else if (availableReservations !== undefined && availableReservations !== "") {
                                                    const filteredReservations = await knex("meals")
                                                        .join('reservations', 'meals.id', '=', 'reservations.meals_id')
                                                        //.select('meals_id','max_reservations','number_of_guests')
                                                        .where('max_reservations', '>', 'number_of_guests');
                                                    response.send(filteredReservations);
                                                } else if (createdAfter !== undefined && createdAfter !== "") {
                                                    console.log(createdAfter);
                                                    //console.log(meals);
                                                    // const result = await knex("meals").where("created_date", ">", createdAfter);
                                                    // response.send(result);

                                                    const filteredMeals = meals.filter((meals) => meals.created_date > new Date(createdAfter));
                                                    console.log(filteredMeals);
                                                    response.send(filteredMeals);
                                                } else if (limit !== undefined && limit !== "") {
                                                    console.log("limit");
                                                    const newMeals = [];
                                                    for (let i = 0; i < limit; i++) {
                                                        console.log(i);
                                                        newMeals.push(meals[i]);
                                                    }
                                                    response.send(newMeals);
                                                } else {
                                                    let undefinedQueryParam = false;
                                                    for (const key in request.query) {
                                                        undefinedQueryParam = true;
                                                    }
                                                    console.log(undefinedQueryParam);
                                                    if (undefinedQueryParam) {
                                                        response.send("{ Error : Request contains undefined query parameter}");
                                                    } else {
                                                        response.send(meals);
                                                    }
                                                } ===
                                                === =
                                                //Deletes the meal by id
                                                router.delete("/:id", async(request, response) => {
                                                    try {
                                                        const deleteMeal = await knex("meals")
                                                            .where({ idmeals: request.params.id })
                                                            .delete();
                                                        response
                                                            .status(200)
                                                            .send(`Meal with id = ${request.params.id} was deleted`); >>>
                                                        >>> > 6e d01b3(add changes)
                                                    } catch (error) {
                                                        throw error;
                                                    }
                                                });



                                                module.exports = router;