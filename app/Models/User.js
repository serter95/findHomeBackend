'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    User:
*      type: object
*      properties:
*        id:
*          type: integer
*        first_name:
*          type: string
*        last_name:
*          type: string
*        email:
*          type: string
*        password:
*          type: string
*        country_id:
*          type: integer
*        state_id:
*          type: integer
*        city_id:
*          type: string
*      required:
*        - first_name
*        - last_name
*        - email
*        - password
*        - country_id
*        - state_id
*        - city_id
*/
class User extends Model {
  static boot () {
    super.boot()
    this.addTrait('SoftDeletes')
    this.addTrait('UtcDate')
    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
