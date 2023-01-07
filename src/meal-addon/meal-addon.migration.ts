import * as Knex from 'knex';

export async function up(knex: any): Promise<void> {
  return knex.schema.createTable('meal_addon', table => {
    table.increments('id').primary();
    table.integer('brandId').unsigned().notNullable();
    table.string('name').notNullable();
    table.string('description').nullable();
    table.decimal('price').notNullable();
    table.string('category').nullable();

    table.foreign('brandId').references('id').inTable('brand');
  });
}

export async function down(knex: any): Promise<void> {
  return knex.schema.dropTable('meal_addon');
}
