const { Router } = require("express");

//Index Routes
const countriesRoutes = require("./countriesRoutes");
const activitiesRoutes = require("./activitiesRoutes");

const router = Router();

router.use("/countries", countriesRoutes);
router.use("/activities", activitiesRoutes);

module.exports = router;