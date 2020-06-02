/***********************************************************
  ~/cars - router
***********************************************************/

/// tools ///

const { clog } = require ('../../../tools')
const express = require ('express')

/// middleware ///

const {
  respondWithError,
} = require ('../../../middleware')

/***************************************
  setup router
***************************************/

const router = express.Router ()
const database = {
  'cars' : require ('../cars/database'),
}

/***************************************
  requests
***************************************/

router.route ('/')
  .get ([
    (ri, ro, next) => {
      database['cars'].getAll ()
        .then ((value) => {
          // respond...
          ro
            .status (200)
            .json (value)
        })
        .catch ((error) => {
          // respond...
          clog (error)
          respondWithError (500) (ri, ro)
        })
    },
  ])
  .post ([
    (ri, ro, next) => {
      database['cars'].push (ri.body)
        .then ((value) => {
          // respond...
          ro
            .status (201)
            .json (value)
        })
        .catch ((error) => {
          // respond...
          clog (error)
          respondWithError (500) (ri, ro)
        })
    },
  ])

router.route ('/:car_id')
  .all ([
    /* get :car_id if it exists*/
    (ri, ro, next) => {
      database['cars'].get (ri.params.car_id)
      .then ((value) => {
        if (value) {
          ri.locals = {
            car : value,
            ...(ri.locals || {}),
          }
          next ()
        }
        else {
          respondWithError (404) (ri, ro)
        }
      })
      .catch ((error) => {
        // respond...
        clog (error)
        respondWithError (500) (ri, ro)
      })
    }
  ])
  .get ([
    (ri, ro, next) => {
      // respond...
      ro
        .status (200)
        .json (ri.locals.car)
    },
  ])
  .put ([
    (ri, ro, next) => {
      database['cars'].set (ri.params.car_id, ri.body)
        .then ((value) => {
          // respond...
          ro
            .status (201)
            .json (value)
        })
        .catch ((error) => {
          // respond...
          clog (error)
          respondWithError (500) (ri, ro)
        })
    },
  ])
  .delete ([
    (ri, ro, next) => {
      database['cars'].pull (ri.params.car_id)
        .then ((value) => {
          // respond...
          ro
            .status (200)
            .json (ri.locals.car)
        })
        .catch ((error) => {
          // respond...
          clog (error)
          respondWithError (500) (ri, ro)
        })
    },
  ])

router.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = router
