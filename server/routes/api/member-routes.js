const router = require('express').Router();
const {
    getMembers,
    getSingleMember,
    createMember,
    updateMember,
    deleteMember,
    activateMember
} = require('../../controllers/member-controller');

// /api/members
router.route('/').get(getMembers).post(createMember);

// /api/members/:memberID
router.route('/:memberId').get(getSingleMember).put(updateMember).delete(deleteMember);

// /api/members/:memberId/statusUpdate
router.route('/:memberId/status/activate').post(activateMember);

module.exports = router;