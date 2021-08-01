'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.string('fullName').notNullable()
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.string('fullName').notNullable()
    })
  }
}

module.exports = UserSchema
