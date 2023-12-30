const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 5001;
const app = express();

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static('build'));

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
