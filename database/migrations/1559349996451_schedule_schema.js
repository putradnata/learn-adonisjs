'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleSchema extends Schema {
  up() {
    this.create('schedules', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.date('date')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
      table.datetime('deleted_at')
    })
  }

  down() {
    this.drop('schedules')
  }
}

module.exports = ScheduleSchema
