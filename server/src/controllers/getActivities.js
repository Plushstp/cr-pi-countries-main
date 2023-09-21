const { Activity, Country } = require('../db');

//GET Activities Funcionando OK

const getActivities = async () => {
    const activitiesInDB = await Activity.findAll({
        include:{
            model:Country, // asociacion con el modelo Country
            //attributes:["name"], //solo mostrar el atributo name, para q no me llene de info
            through:{ // de la tabla intermedia
                attributes:[] // para q no muestre nada
            }
        }
    });
    if (activitiesInDB.length > 0) {
        return activitiesInDB;
    }
};

module.exports = getActivities;