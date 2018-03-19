// Used when we want to hash passwords
// const Promise = require("bluebird");
// const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));

module.exports = (object) => {
    const User = {
        accountID: object.accountID,
        type: object.type,
        bonusHours: object.bonusHours,
        bonusComment: object.bonusComment,
        phone: object.phone,
        emails: object.emails,
        historic: object.historic,
        faciltiators: [],
        children: [],
        futureReservations: []
    }

    User.prototype.getFacilitators = function(accountID) {
        //Do Stuff
    }
    User.prototype.getChildren = function(accountID) {
        //Do more stuff
    }
    User.prototype.getFutureReserves = function(accountID) {
        //Get stuff
    }
    return User;
}