'use strict'

class UtcDate {
  register(Model, customOptions = {}) {
    const defaultOptions = {}
    // const options = Object.assign(defaultOptions, customOptions)

    // Add a static method
    Model.formatDates = function(field, value) {
      return new Date(value).toISOString()
    }
  }
}

module.exports = UtcDate
