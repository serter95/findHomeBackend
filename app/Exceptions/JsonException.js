'use strict'

// eslint-disable-next-line import/no-extraneous-dependencies
const { LogicalException } = require('@adonisjs/generic-exceptions')

const Logger = use('Logger')
const Env = use('Env')
const HS = require('http-status-codes')

class JsonException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  async handle(error, { response, request, auth }) {
    let data
    const defaults = {
      code: HS.UNPROCESSABLE_ENTITY,
      route: request.url(),
      error: undefined,
      message: 'process_failed'
    }

    // Si el parametro es un simple string que se use los defaults y se añada el mensaje
    if (typeof error.message === 'string') {
      data = Object.assign(defaults, { message: error.message })
    } else {
      // Mezclo los defaults con los que vienen del parametro
      data = Object.assign(defaults, error.message)
    }

    if (data.message === 'not_found') data.code = 404
    if (data.error) {
      if (Env.get('NODE_ENV') === 'development') {
        // En modo de desarrollo me interesa que los errores estén en consola
        Logger.transport('console').error(data.error)
      }

      await Logger.error({
        url: request.url(),
        user: auth.user ? auth.user.email : undefined,
        message: data.message,
        // Esto se permite que esté en undefined para que si
        // no se pasa como parametro no se logee
        error: data.error,
        organization: auth.user ? auth.user.organization_id : undefined
      })
    }
    return response.status(data.code).json(data)
  }
}

module.exports = JsonException
