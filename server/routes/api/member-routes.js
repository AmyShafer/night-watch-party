const router = require('express').Router();
const {
    getMembers,
    getSingleMember,
    createMember,
    updateMember,
    deleteMember,
    isMemberActive,
} = require('../../controllers/member-controller');

// /api/members
router.route('/').get(getMembers).post(createMember);

// /api/members/:memberID
router.route('/:memberId').get(getSingleMember).put(updateMember).delete(deleteMember);

// /api/members/:memberId/isMemberActive
router.route('/:memberId/isMemberActive').put(isMemberActive);

module.exports = router;