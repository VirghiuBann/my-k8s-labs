const express = require('express')
const router = express.Router()
const os = require('os')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Payment App', hostname: os.hostname() })
})

module.exports = router
