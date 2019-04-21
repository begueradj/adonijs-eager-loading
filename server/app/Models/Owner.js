'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Owner extends Model {

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

  houses() {
    return this.hasMany('App/Models/House')
  }
  
}

module.exports = Owner
