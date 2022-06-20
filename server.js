const express = require('express');
const usersRouter = require('./module/userRoute');

const app = express();
const port = 3000;

var router = express.Router();

app.use(express.json());

//Route for user module
usersRouter.routesConfig(router);

app.use('/express', router);

app.listen(port, () => {
  console.log(`application listening at http://localhost:${port}`);
});