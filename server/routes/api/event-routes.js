const router = require('express').Router();
const {
    getEvents,
    getSingleEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    addRSVP,
    removeRSVP,
} = require('../../controllers/event-controller');

// /api/events
router.route('/').get(getEvents).post(createEvent);

// /api/events/:eventId
router/route('/:eventId').get(getSingleEvent).put(updateEvent).delete(deleteEvent);

// /api/events/:eventId/RSVPs
router.route('/:eventId/RSVPs').post(addRSVP);

// /api/events/:eventId/RSVPs/:RSVPid
router.route('/:eventId/RSVPs/:RSVPid').delete(removeRSVP);

module.exports = router;