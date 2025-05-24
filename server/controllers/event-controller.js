const { Event, Movie , Member } = require('../models');

// get all events
function getEvents(req, res) {
    Event.find()
    .sort({ createdAt: -1 })
    .then((dbEventData) => {
        res.json(dbEventData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// get a single event by id
function getSingleEvent(req, res) {
    Event.findOne({ _id: req.params.eventId })
    .then((dbEventData) => {
        if (!dbEventData) {
            return res.status(404).json({ message: 'No event with this id!' });
        }
        res.json(dbEventData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// create an event
function createEvent(req, res) {
    Event.create(req, res)
    .then((dbEventData) => {
        return Movie.findOneAndUpdate(
            { _id: req.body.eventId },
            { $push: { events: dbEventData._id } },
            { new: true }
        );
    })
    .then((dbEventData) => {
        if (!dbEventData) {
            return res.status(404).json({ message: 'Event created but no movie with this id!' });
        }
        res.json({ message: 'Event was successfully created!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// update an event
function updateEvent(req, res) {
    Event.findByIdAndUpdate({ _id: req.params.eventId }, {$set: req.body }, { runValidators: true, new: true })
    .then((dbEventData) => {
        if(!dbEventData) {
            return res.status(404).json({ message: 'No event with this id!' });
        }
        res.json(dbEventData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    }); 
}

// delete an event
function deleteEvent(req, res) {
    Event.findOneAndRemove({ _id: req.params.eventId })
    .then((dbEventData) => {
        if (!dbEventData) {
            return res.status(404).json({ message: 'No event with this id!' });
        }
        res.json({ message: 'Event was removed!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);  
    });
}

// update an rsvp to an event
function updateRSVP(req, res) {
    Event.findByIdAndUpdate(
        { _id: req.params.eventId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
    )
    .then((dbEventData) => {
        if(!dbEventData) {
            return res.status(404).json({ message: 'No event with this id!' });
        }
        res.json(dbEventData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

module.exports = {
    getEvents,
    getSingleEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    updateRSVP,
};