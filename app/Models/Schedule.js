'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {
  static boot(){
    super.boot()

    this.addTrait('@provider:Lucid/SoftDeletes')
  }

  User(){
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Schedule
