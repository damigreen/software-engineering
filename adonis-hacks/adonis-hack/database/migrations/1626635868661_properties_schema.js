'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropertiesSchema extends Schema {
  up () {
    this.table('properties', (table) => {
      // alter table
      table.string('image').alter()
    })
  }

  down () {
    this.table('properties', (table) => {
      // reverse alternations
      table.string('image').alter()
    })
  }
}

module.exports = PropertiesSchema
