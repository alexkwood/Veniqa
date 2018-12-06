import express from 'express';
import passportAuth from '../authentication/passportAuth'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Inside home page", req.sessionID);
  res.render('index', { title: 'Veniqa' });
});

module.exports = router;