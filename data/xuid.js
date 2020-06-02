/***********************************************************
  xuid -- custom nanoid generator
***********************************************************/

const _generate = require ('nanoid/generate')

/***************************************
  settings
***************************************/

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const count = 8

/***************************************
  functions
***************************************/

const generate = () => _generate (alphabet, count)

/**************************************/

module.exports = {
  alphabet,
  count,
  generate,
}
