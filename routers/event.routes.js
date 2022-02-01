const express = require("express");
const router = express.Router();

const eventController = require("../controllers/event.controller");

/**
 * @Path /event
 */

router.route("/")
    .get(eventController.getAllEvents)
    .post(eventController.createEvent);


router.route("/:id")
    .get(eventController.getEventById)
    .put(eventController.updateEvent)
    .delete(eventController.deleteEvent);


module.exports = router;