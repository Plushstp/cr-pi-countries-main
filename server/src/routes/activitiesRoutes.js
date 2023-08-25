const { Router } = require("express");
const activitiesRoutes = Router();

//Activities Routes OK
const getActivities = require("../controllers/getActivities");
const postActivities = require("../controllers/postActivities");

activitiesRoutes.get("/", async (req, res) => {
    try {
        const allActivities = await getActivities();
        return res.status(200).json(allActivities);
    } catch (error) {
        res.status(400).json({ error: 'No hay actividades cargadas en la BD' });
    }
});

activitiesRoutes.post("/", async (req, res) => {
    try {
        const response = req.body;
        const activityPost = await postActivities(response);
        res.status(201).json(activityPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = activitiesRoutes;