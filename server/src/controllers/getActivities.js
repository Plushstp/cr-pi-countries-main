const { Activity } = require('../db');

const getActivities = async () => {
    const activitiesInDB = await Activity.findAll();
    if (activitiesInDB.length > 0) {
        return activitiesInDB;
    }
};

module.exports = getActivities;