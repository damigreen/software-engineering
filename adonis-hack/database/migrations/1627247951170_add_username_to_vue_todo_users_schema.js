'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUsernameToVueTodoUsersSchema extends Schema {
  up () {
    this.table('add_username_to_vue_todo_users', (table) => {
      // alter table
    })
  }

  down () {
    this.table('add_username_to_vue_todo_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddUsernameToVueTodoUsersSchema
