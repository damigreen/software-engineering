'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropertiesSchema extends Schema {
  up () {
    this.table('properties', (table) => {
      // alter table
        table.string('propertyName').notNullable().alter()
        table.integer('value').notNullable().alter()
        table.integer('tenants').notNullable().alter()
        table.integer('rent').notNullable().alter()
    })
  }

  down () {
    this.table('properties', (table) => {
      // reverse alternations
      table.string('propertyName').notNullable().alter()
      table.integer('value').notNullable().alter()
      table.integer('tenants').notNullable().alter()
      table.integer('rent').notNullable().alter()
    })
  }
}

module.exports = PropertiesSchema
