const router = require("express").Router()
const getActivities = require("../controllers/get-activities");
const postActivity = require("../controllers/post-activity")


router.post("/", postActivity);
router.get('/', getActivities)


module.exports = router;

