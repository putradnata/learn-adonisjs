'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {
  User(){
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Schedule
