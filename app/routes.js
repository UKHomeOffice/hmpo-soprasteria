const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line

router.get('/v1/login', function (req, res) {
  res.render('v1/login')
})

router.post('/v1/login', function (req, res) {
  res.redirect('/v1/index')
})

router.get('/v1/index', function (req, res) {
  console.log(req.session.data)
  res.render('v1/index', {
    newApplications: req.session.data.newApplications,
    user: req.session.data.username
  })
})

router.get('/v1/archive', function (req, res) {
  console.log(req.session.data)
  res.render('v1/archive', {
    newApplications: req.session.data.newApplications,
    user: req.session.data.username
  })
})

router.get('/v1/reports', function (req, res) {
  console.log(req.session.data)
  res.render('v1/reports', {
    reports: req.session.data.reports,
    user: req.session.data.username
  })
})

module.exports = router