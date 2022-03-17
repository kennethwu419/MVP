const model = require('../models');

const get = (req, res) => {
  model.get((err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  })
}

const post = (req, res) => {
  model.post(rq.body, (err, results) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send();
    }
  })
}

module.exports = {
  get, post
}