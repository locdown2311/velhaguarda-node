'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClanSchema extends Schema {
  up () {
    this.create('clans', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.integer('trofeus').notNullable()
      table.integer('doacoes').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clans')
  }
}

module.exports = ClanSchema
