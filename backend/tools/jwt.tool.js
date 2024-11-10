const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// this file is about all the methods that are used to handle jwt
const jwtTool = {

  // ! method to generate the token
  generate: function (data) {
    // secret key
    const secret = process.env.JWT_SECRET;

    // must have options for token
    const options = {
      algorithm: "HS512",
      expiresIn: "1h",
      audience: process.env.JWT_AUDIENCE,
      issuer: process.env.JWT_ISSUER,
    };

    // return the token
    return jwt.sign(data, secret, options);
  },


  // ! method to read the token
  read: function (token) {
    const secret = process.env.JWT_SECRET;
    const options = {
      audience: process.env.JWT_AUDIENCE,
      issuer: process.env.JWT_ISSUER
    };

    // create promise because this methods crashes if token is valid then ok if not null is returned
    try {
      return jwt.verify(token, secret, options);
    }
    catch {
      return null;
    }
  }
};

module.exports = jwtTool;