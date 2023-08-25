const { Country, Activity } = require("../db");

//GET Countries Por ID Funcionando OK

const getCountryById = async (id) => {
    const countryId = id.toUpperCase();
	console.log(countryId);
    const countryIdBD = await Country.findOne({
        where: { id: countryId },
        include:{
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: [],
            },
        },
    });
    return countryIdBD;
};

module.exports = getCountryById;