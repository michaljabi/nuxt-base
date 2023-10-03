/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('radars').del()
  await knex('radars').insert([
    {id: 1, name: 'my-radar-1', description: 'My first radar'},
  ]);
}
