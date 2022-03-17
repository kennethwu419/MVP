const db = require('../db');

const post = (params, callback) => {
  const queryStr = 'INSERT INTO calendar (apptdate, appttime) VALUES ($1, $2)'
  db.query(queryStr, params, callback);
}

const get = (params, callback) => {
  const queryStr = 'SELECT * FROM calendar';
  db.query(queryStr, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

module.exports = { post, get }