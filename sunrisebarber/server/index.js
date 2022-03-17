const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./db');
const controller = require('./controller');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/api/appointment', controller.post);
app.get('/api/appointment', controller.get);
// app.get('/api/qrcode');

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
