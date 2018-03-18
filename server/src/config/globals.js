const path = require('path')

module.exports = {
  authentication: {
    jwtToken: process.env.JWT_SECRET || "test123"
  }
}
