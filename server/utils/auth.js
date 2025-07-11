const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const expiration = '2hr';

module.exports = {
    authMiddleware: function ({ req }) {
      let token = req.body.token || req.query.token || req.headers.authorization;

      if (req.headers.authorization) {
        token = token
          .split(' ')
          .pop()
          .trim();
      }
      console.log('token', token)

      if (!token) {
        return req;
      }

      try {
        const { data } = jwt.verify(token, secret, {maxAge: expiration });
      }
      catch {
        console.log('Invalid token');
      }

      return req;
    },
    signToken: function ({ userName, email, _id }) {
      const payload = { userName, email, _id };

      return jwt.sign(
        { data: payload },
        secret,
        { expiresIn: expiration }
    );
  }
};