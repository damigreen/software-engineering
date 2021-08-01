'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VueTodoUsersSchema extends Schema {
  up () {
    this.create('vue_todo_users', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('vue_todo_users')
  }
}

module.exports = VueTodoUsersSchema
