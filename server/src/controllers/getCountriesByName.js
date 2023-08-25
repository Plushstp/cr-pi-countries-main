//const { Sequelize } = require("sequelize");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountriesByName = async (name) => {
    const countryInDB = await Country.findAll({
        where: {
            name: {
                [Op.iLike]:`%${name}%`,
            }
        },
        include: {
            model: Activity,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });
    return countryInDB;
};

module.exports = getCountriesByName;