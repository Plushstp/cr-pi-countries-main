const { Router } = require("express");
const countriesRoutes = Router();

const getCountries = require("../controllers/getCountries");
const getCountriesByName = require("../controllers/getCountriesByName");
const getCountryById = require("../controllers/getCountryById");

countriesRoutes.get("/", async (req, res) => {
    try {
        const allCountries = await getCountries();
        return res.status(200).json(allCountries);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

countriesRoutes.get("/name", async (req, res) => {
    try {
        const { name } = req.query;
        const countryByName = await getCountriesByName(name);
        res.status(200).json(countryByName);
    } catch (error) {
        res.status(400).json({ error: 'Introducir nombre valido' });
    }
});

countriesRoutes.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const countryById = await getCountryById(id);
        res.status(200).json(countryById);
    } catch (error) {
        res.status(400).json({ error:`No existe pais con el id: ${id}`});
    }
});

module.exports = countriesRoutes;