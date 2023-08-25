const { Activity } = require('../db');

//GET Activities Funcionando OK

const getActivities = async () => {
    const activitiesInDB = await Activity.findAll();
    if (activitiesInDB.length > 0) {
        return activitiesInDB;
    }
};

module.exports = getActivities;