'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersVueTodoSchema extends Schema {
  up () {
    this.create('users_vue_todos', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users_vue_todos')
  }
}

module.exports = UsersVueTodoSchema
