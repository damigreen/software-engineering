'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserVueTodoSchema extends Schema {
  up () {
    this.create('user_vue_todos', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_vue_todos')
  }
}

module.exports = UserVueTodoSchema
