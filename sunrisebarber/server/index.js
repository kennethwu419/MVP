const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const controller = require('./controller');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static());
// app.get('/api/appointment',);
app.post('/api/appointment',);
// app.get('/api/qrcode');

app.lisen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
