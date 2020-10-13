'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.increments()
      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).nullable()
      table.string('email', 255).notNullable().unique()
      table.string('password', 60).notNullable()
      // relationship from library
      table.integer('country_id').notNullable()
      table.integer('state_id').notNullable()
      table.integer('city_id').notNullable()
      table.timestamps()
      table.date('deleted_at').nullable()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
