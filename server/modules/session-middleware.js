// No changes should be required in this file

const expressSession = require('express-session');
const PgSession = require('connect-pg-simple')(expressSession);
const pool = require('./pool.js');
const warnings = require('../constants/warnings');

/*
  The session makes it so a user can enters their username and password one time,
  and then we can keep them logged in.
*/

const serverSessionSecret = () => {
  if (
    !process.env.SERVER_SESSION_SECRET ||
    process.env.SERVER_SESSION_SECRET.length < 8 ||
    process.env.SERVER_SESSION_SECRET === warnings.exampleBadSecret
  ) {
    // Warning if user doesn't have a good secret
    console.log(warnings.badSecret);
  }

  return process.env.SERVER_SESSION_SECRET;
};

let pruneSessionInterval = 60;
if (process.env.NODE_ENV === 'test') {
    pruneSessionInterval = false;
}
module.exports = expressSession({
    store: new PgSession({
        pool,
        pruneSessionInterval,
        createTableIfMissing: true,
    }),
    secret: serverSessionSecret() || 'secret', // please set this in your .env file
    name: 'user', // this is the name of the req.variable. 'user' is convention, but not required
    saveUninitialized: false,
    signed: true,
    resave: false,
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days by default
    // This isn't currently being used but should be left in for future proofing
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30 },
});
