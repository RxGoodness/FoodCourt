import * as Knex from 'knex';

export async function up(knex: any): Promise<void> {
  return knex.schema.createTable('brand', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });
}

export async function down(knex: any): Promise<void> {
  return knex.schema.dropTable('brand');
}
