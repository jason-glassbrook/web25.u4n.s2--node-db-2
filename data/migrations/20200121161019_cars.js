
exports.up = (knex) => (
  knex.schema.createTable ('cars', (table) => {
    table
      .timestamps (true, true)
    table
      .uuid ('id')
      .primary ()
      .index ()
    table
      .string ('vin', 255)
      .notNullable ()
      .unique ()
    table
      .string ('make', 255)
      .notNullable ()
      .index ()
    table
      .string ('model', 255)
      .notNullable ()
      .index ()
    table
      .float ('distance_driven_value')
      .notNullable ()
    table
      .string ('distance_driven_scale')
      .defaultTo ('miles')
      .notNullable ()
    table
      .enum ('transmission_type', [
        'automatic',
        'manual',
      ])
      .nullable ()
    table
      .string ('title_status', 255)
      .nullable ()
  })
)

exports.down = (knex) => (
  knex.schema.dropTableIfExists ('cars')
)
