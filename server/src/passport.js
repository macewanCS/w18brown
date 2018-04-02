const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('./config/globals');

module.exports = function (passport) {
    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.authentication.jwtToken
    }, async function (jwtPayload, done) {
        try {
            return done(null, true)
        } catch (err) {
            return done(err, false);
        }
    }))
}