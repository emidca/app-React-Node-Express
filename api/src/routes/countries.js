const router = require("express").Router()
const { getCountriesQuery, getAllCountries, getCountryId } = require("../controllers/get-all-countries")



router.get("/",getCountriesQuery)
router.get("/", getAllCountries)
router.get("/:id", getCountryId)



module.exports = router;


