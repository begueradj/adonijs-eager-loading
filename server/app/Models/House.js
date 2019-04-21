'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class House extends Model {

  static get createdAtColumn() {
    return null
  }

  static get updatedAtcolumn() {
    return null
  }

  static get incrementing() {
    return false
  }

  static get primaryKey() {
    return 'name'
  }

  rooms() {
    return this.hasMany('App/Models/Room')
  }
}

module.exports = House
