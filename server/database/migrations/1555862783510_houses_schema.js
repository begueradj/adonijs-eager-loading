'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HousesSchema extends Schema {
  up () {
    this.create('houses', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('houses')
  }
}

module.exports = HousesSchema
