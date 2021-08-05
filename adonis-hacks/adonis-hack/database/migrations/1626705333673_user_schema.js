'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.string('confirmation_token')
      table.boolean('is_active').defaultTo(0)
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.string('confirmation_token')
      table.boolean('is_active').defaultTo(0)
    })
  }
}

module.exports = UserSchema
