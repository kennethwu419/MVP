const db = require('../db');
const model = require('../model');

const post = (req, res) => {
  let theDate = req.body.apptdate;
  let theTime = req.body.appttime;
  model.post([theDate, theTime], (err, results) => {
    console.log(req.body);
    if (err) {
      console.log('this is error', err);
      res.status(400).send();
    } else {
      res.status(201).send();
    }
  })
}

const get = (req, res) => {
  model.get(req.query, (err, results) => {
    if (err) {
      console.log('this is get error', err);
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  })
}

module.exports = { post, get }