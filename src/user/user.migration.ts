import * as Knex from 'knex';

export async function up(knex: any): Promise<void> {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.enum('role', ['USER', 'ADMIN']).defaultTo('USER');
  });
}

export async function down(knex: any): Promise<void> {
  return knex.schema.dropTable('user');
}
