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
  res.render('v1/index', {
    newApplications: req.session.data.newApplications,
    user: req.session.data.username || 'user'
  })
})

router.post('/v1/index', function (req, res) {
  res.redirect('/v1/applications')
})

router.get('/v1/applications', function (req, res) {
  res.render('v1/applications', {
    location: req.session.data.office,
    newApplications: req.session.data.newApplications,
    user: req.session.data.username || 'user'
  })
})

router.get('/v1/archive', function (req, res) {
  res.render('v1/archive', {
    location: req.session.data.office,
    newApplications: req.session.data.newApplications,
    user: req.session.data.username || 'user'
  })
})

router.get('/v1/reports', function (req, res) {
  res.render('v1/reports', {
    location: req.session.data.office,
    reports: req.session.data.reports,
    user: req.session.data.username || 'user'
  })
})

module.exports = router