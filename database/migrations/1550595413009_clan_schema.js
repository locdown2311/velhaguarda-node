'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClanSchema extends Schema {
  up () {
    this.create('clans', (table) => {
      table.increments()
      table.string('nome')
      table.integer('trofeus')
      table.integer('doacoes')
      table.timestamps()
    })
  }

  down () {
    this.drop('clans')
  }
}

module.exports = ClanSchema
