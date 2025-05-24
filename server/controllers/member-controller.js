const { Member , Movie , Event } = require('../models');

// get all members
function getMembers(req, res) {
    Member.find()
    .sort({ createdAt: -1 })
    .then((dbMemberData) => {
        res.json(dbMemberData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// get a single member by id
function getSingleMember (req, res) {
    Member.findOne({ _id: req.params.memberId })
    .then((dbMemberData) => {
        if (!dbMemberData) {
            return res.status(404).json({ message: 'No member with the id!' });
        }
        res.json(dbMemberData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// create a member
function createMember (req, res) {
    Member.create(req, res) 
    .then((dbMemberData) => {
        return Event.findOneAndUpdate(
            { _id: req.body.eventId },
            { $push: { events: dbEventData._id } },
            { new: true }
        );
    })
    .then((dbMemberData) => {
        if (!dbMemberData) {
            return res.status(404).json({ message: 'Member was created but no event with this id!' });
        }
        res.json({ message: 'Member was successfully created!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// update a member 
function updateMember(req, res) {
    Member.findOneAndUpdate(
        { _id: req.params.memberId },
        { $set: req.body },
        { runValidators: true, new: true }
    )
    .then((dbMemberData) => {
        if(!dbMemberData) {
            return res.status(404).json({ message: 'No member with this id!' });
        }
        res.json(dbMemberData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// delete a member 
function deleteMember(req, res) {
    Member.findOneAndRemove({ _id: req.params.memberId })
    .then((dbMemberData) => {
        if (!dbMemberData) {
            return res.status(404).json({ message: 'No member with this id!' });
        }
        res.json({ message: 'Member was successfully created!' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

// member activation
function isMemberActive(req, res) {
    Member.findOneAndUpdate(
        { _id: req.params.memberId },
        { $addToSet: { activeMember: req.body } },
        { runValidators: true, new: true }
    )
    .then((dbMemberData) => {
        if (!dbMemberData) {
            return res.status(404).json({ message: 'No member with this id!' });
        }
        res.json(dbMemberData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
}

module.exports = {
  getMembers,
  getSingleMember,
  createMember,
  updateMember,
  deleteMember,
  isMemberActive,
}