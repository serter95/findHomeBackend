'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  // Coutries, states and cities data
  Route.get('/getCountries', 'CountryController.getCountries')
  Route.get('/getStates/:countryId', 'CountryController.getStatesOfCountry')
  Route.get('/getCities/:stateId', 'CountryController.getCitiesOfState')
  // Create an user
  Route.post('/createUser', 'UserController.store')
}).prefix('api')
