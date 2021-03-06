'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomsSchema extends Schema {
  up () {
    this.create('rooms', (table) => {
      table
        .increments()
      table
        .boolean('is_available')
        .notNullable()
      table
        .integer('house_id', 10)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('houses')
    })
  }

  down () {
    this.drop('rooms')
  }
}

module.exports = RoomsSchema
