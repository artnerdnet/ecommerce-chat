import options from './config';
// const knex = require('knex')(options);

// knex.schema.createTable('messages', table => {
//   table.increments('id');
//   table.string('email');
//   table.timestamp('date', { useTz: true }).notNullable().defaultTo(knex.fn.now());
//   table.string('message');
// }).then(() => {
//   console.log('messages table has been created');
// }).catch(error => {
//   console.log('error:', error);
//   throw error;
// }).finally(() => {
//   console.log('closing connection...');
//   process.exit(0);
// });

module.exports = knex;