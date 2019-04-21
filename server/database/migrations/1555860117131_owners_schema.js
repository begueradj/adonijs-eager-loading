'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnersSchema extends Schema {
  up () {
    this.create('owners', (table) => {
      table.string('name', 30).primary()
    })
  }

  down () {
    this.drop('owners')
  }
}

module.exports = OwnersSchema
