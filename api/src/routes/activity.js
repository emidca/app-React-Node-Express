const router = require("express").Router()
const postActivity = require("../controllers/post-activity")


router.post("/", postActivity);


module.exports = router;

