const express = require("express");
const router = express.Router();
const knex = require("../database");

// Return all reviews 
router.get("/", async(request, response) => {
    try {
        const reviews = await knex("reviews").select("*");
        response.json(reviews);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Adds a new review
router.post("/", async(request, response) => {
    try {
        const newReview = await knex("reviews").insert(request.body);
        response.send(`New review: ${request.body.title}`);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Returns review by id
router.get("/:id", async(request, response) => {
    try {
        const reviewById = await knex("reviews").where("id", parseInt(request.params.id));
        response.json(reviewById);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Updates the review by id	
router.put("/:id", async(request, response) => {
    try {
        const updatereview = await knex("reviews")
            .where("id", parseInt(request.params.id))
            .update(request.body);
        response.json(updatereview);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});
//Deletes the review by id
router.delete("/:id", async(request, response) => {
    try {
        const deleteReviewById = await knex("reviews")
            .where("id", parseInt(request.params.id))
            .del();
        response.json(`Deleted review: ${deleteReviewById}`);
    } catch (error) {
        console.log(error);
        response.send(error);
    }
});

module.exports = router;