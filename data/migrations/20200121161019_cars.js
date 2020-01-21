
exports.up = (knex) => (
  knex.schema.createTable ('cars', (table) => {

  })
)

exports.down = (knex) => (
  knex.schema.dropTableIfExists ('cars')
)
