const express = require("express");
const router = express.Router();
const knex = require("../database");

//Returns all reservations 
router.get("/titles", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const titles = await knex("reservations").select("title");
        response.json(titles);
    } catch (error) {
        throw error;
    }
});

//Adds a new reservation
router.post("/", async(request, response) => {
    try {
        const newReservation = await knex("reservations").insert(request.body);
        response.send(`New reservation: ${request.body.title}`);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Returns reservation by id
router.get("/:id", async(request, response) => {
    try {
        const reservationById = await knex("reservations").where("id", parseInt(request.params.id));
        response.json(reservationById);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Updates the reservation by id	
router.put("/:id", async(request, response) => {
    try {
        const updateReservationById = await knex("reservations")
            .where("id", parseInt(request.params.id))
            .update(request.body);
        response.json(updateReservationById);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Deletes the reservation by id
router.delete("/:id", async(request, response) => {
    try {
        const deleteReservationById = await knex("reservations")
            .where("id", parseInt(request.params.id))
            .del();
        response.json(`Deleted reservation: ${deleteReservationById}`);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});

module.exports = router;