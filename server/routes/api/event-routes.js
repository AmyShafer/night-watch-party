const router = require('express').Router();
const {
    getEvents,
    getSingleEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    updateRSVP
} = require('../../controllers/event-controller');

// /api/events
router.route('/').get(getEvents).post(createEvent);

// /api/events/:eventId
router.route('/:eventId').get(getSingleEvent).put(updateEvent).delete(deleteEvent);

// /api/events/:eventId/RSVPs
router.route('/:eventId/RSVPs').put(updateRSVP);

// /api/events/:eventId/RSVPs/:RSVPid
router.route('/:eventId/RSVPs/:RSVPid').delete(updateRSVP);

module.exports = router;