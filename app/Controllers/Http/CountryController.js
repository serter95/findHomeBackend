'use strict'
const csc = require('country-state-city').default
const { validateAll } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')

class CountryController {

  /**
  * @swagger
  * /api/getCountries:
  *   get:
  *     tags:
  *       - Countries
  *     summary: Get all Countries
  *     responses:
  *       200:
  *         description: Return an array of countries
  *         example:
  *           id: 1
  *           sortname: AF
  *           name: Afghanistan
  *           phonecode: 93
  * @descriptor Method that return a list of countries.
  * @return {Array} return an array of countries
  */
  getCountries() {
    return csc.getAllCountries()
  }

  /**
  * @swagger
  * /api/getStates/{countryId}:
  *   get:
  *     tags:
  *       - Countries
  *     summary: Get all States of a country
  *     parameters:
  *       - name: countryId
  *         description: id of the country
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Return an array of states
  *         example:
  *           id: 42
  *           name: Badakhshan
  *           country_id: 1
  * @descriptor Method that return a list of states.
  * @param {integer} countryId id of the country
  * @return {Array} return an array of states
  */
  async getStatesOfCountry({ params }) {
    const { countryId } = params
    const rules = { countryId: 'required|integer' }
    const validation = await validateAll({ countryId }, rules)
    if (validation.fails()) {
      throw new ValidationException(validation.messages())
    }

    return csc.getStatesOfCountry(countryId)
  }

  /**
  * @swagger
  * /api/getCities/{stateId}:
  *   get:
  *     tags:
  *       - Countries
  *     summary: Get all Cities of a state
  *     parameters:
  *       - name: stateId
  *         description: id of the state
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Return an array of cities
  *         example:
  *           id: 5909
  *           name: Eshkashem
  *           state_id: 42
  * @descriptor Method that return a list of cities.
  * @param {integer} stateId id of the state
  * @return {Array} return an array of cities
  */
  async getCitiesOfState({ params }) {
    const { stateId } = params
    const rules = { stateId: 'required|integer' }
    const validation = await validateAll({ stateId }, rules)
    if (validation.fails()) {
      throw new ValidationException(validation.messages())
    }

    return csc.getCitiesOfState(stateId)
  }
}

module.exports = CountryController