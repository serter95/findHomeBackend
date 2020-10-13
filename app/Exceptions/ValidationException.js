'use strict'

// eslint-disable-next-line import/no-extraneous-dependencies
const { LogicalException } = require('@adonisjs/generic-exceptions')

const HS = require('http-status-codes')

class ValidationException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(error, { response }) {
    return response.status(HS.UNPROCESSABLE_ENTITY).json(error.message)
  }
}

module.exports = ValidationException
