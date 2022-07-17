const express = require('express');
const { UserRoute } = require('./module/userRoute');

const app = express();
const port = 3000;

var router = express.Router();

app.use(express.json());

//Route for user module

app.use('/express', UserRoute);

app.listen(port, () => {
  console.log(`application listening at http://localhost:${port}`);
});