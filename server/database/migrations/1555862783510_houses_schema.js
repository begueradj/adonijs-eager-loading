'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HousesSchema extends Schema {
  up () {
    this.create('houses', (table) => {
      table.increments()
      table.string('type', 30).notNullable()
      table
        .string('owner_name', 30)
        .notNullable()
        .references('name')
        .inTable('owners')
    })
  }

  down () {
    this.drop('houses')
  }
}

module.exports = HousesSchema
