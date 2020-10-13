'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { User } = use('App/Models/')
const Database = use('Database')

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new user.
   * POST users
   * 
   * @swagger
   *  /api/createUser:
   *    post:
   *     tags:
   *       - Users
   *     summary: Create a new user
   *     consumes:
   *      - application/x-www-form-urlencoded
   *      - application/json
   *     parameters:
   *      - name: first_name
   *        type: string
   *        required: true
   *        description: first name of the user
   *        in: formData
   *      - name: last_name
   *        type: string
   *        required: true
   *        description: last name of the user
   *        in: formData
   *      - name: email
   *        type: string
   *        required: true
   *        description: email of the user
   *        in: formData
   *      - name: password
   *        type: string
   *        required: true
   *        description: password of the user
   *        in: formData
   *      - name: password_confirmation
   *        type: string
   *        required: true
   *        description: password confirmation field to the password
   *        in: formData
   *      - name: country_id
   *        type: integer
   *        required: true
   *        description: country id of the user
   *        in: formData
   *      - name: state_id
   *        type: integer
   *        required: true
   *        description: state id of the user
   *        in: formData
   *      - name: city_id
   *        type: integer
   *        required: true
   *        description: city id of the user
   *        in: formData
   *     responses:
   *       200:
   *         description: Return the user object created
   *         schema:
   *           $ref: '#/definitions/User'
   *         example:
   *           success: true
   *           user: 
   *            id: 5909
   *            first_name: John
   *            last_name: Doe
   *            email: johndoe@gmail.com
   *            country_id: 1
   *            state_id: 42
   *            city_id: 4080
   *            created_at: 2020-01-01 18:00:00
   *            updated_at: 2020-01-01 18:00:00
   *
   * @descriptor Create a new user
   * @param {object} request.body data of the user
   * @param {string} request.body.first_name first name of the user
   * @param {string} request.body.last_name last name of the user
   * @param {string} request.body.email email of the user
   * @param {string} request.body.password password of the user
   * @param {string} request.body.password_confirmation validation field to the password of the
   * @param {string} request.body.country_id country id of the user
   * @param {string} request.body.state_id state id of the user
   * @param {string} request.body.city_id city id of the user
   * @param {object} user
   */
  async store ({ request }) {
    console.log(request.body)
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
