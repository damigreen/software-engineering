'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUsernameVueTodoUsersSchema extends Schema {
  up () {
    this.table('vue_todo_users', (table) => {
      // alter table
      table.string('username')
    })
  }
  
  down () {
    this.table('vue_todo_users', (table) => {
      // reverse alternations
      table.string('username')
    })
  }
}

module.exports = AddUsernameVueTodoUsersSchema
