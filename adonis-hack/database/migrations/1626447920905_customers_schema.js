'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.string('fullName')
      table.string('phoneNumber')
      table.string('email')
      table.string('type')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomersSchema
