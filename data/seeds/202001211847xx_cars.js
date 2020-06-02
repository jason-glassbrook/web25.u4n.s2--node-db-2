const name = 'cars'

exports.seed = (knex) => (
  // Deletes ALL existing entries
  knex (name)
  .truncate ()
  .then (() => {
    // Inserts seed entries
    return (
      knex (name)
      .insert ([
        {
          'id' : 1,
          'vin' : 'd7a17051-9b10-4a22-8966-739f5d80f824',
          'make' : 'Subaru',
          'model' : 'Impreza',
          'year' : 2014,
          'distance_driven' : 45309,
          'distance_driven_scale' : 'miles',
          'transmission' : 'automatic',
          'title_status' : 'clean',
        },
        {
          'id' : 2,
          'vin' : '71070bfb-0d85-46a3-8c27-beab217cbc24',
          'make' : 'Honda',
          'model' : 'Civic',
          'year' : 2000,
          'distance_driven' : 225311,
          'distance_driven_scale' : 'kilometers',
          'transmission' : 'automatic',
          'title_status' : 'clean',
        },
        {
          'id' : 3,
          'vin' : '11b36bc6-8773-4a1c-bcd7-b644ef568f29',
          'make' : 'Toyota',
          'model' : 'Previa',
          'year' : 1993,
          'distance_driven' : 265149873,
          'distance_driven_scale' : 'meters',
          'transmission' : 'manual',
          'title_status' : 'destroyed',
        },
      ])
    )
  })
)
