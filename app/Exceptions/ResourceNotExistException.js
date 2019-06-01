'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResouceNotExistException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
  handle(error, {response}){
    return response.status(404).json({
      error: "Resource Not Exist"
    })
  }
}

module.exports = ResouceNotExistException
