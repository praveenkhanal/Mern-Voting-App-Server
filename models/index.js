const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vote', { useNewUrlParser: true });


module.exports.User = require('./user');
module.exports.Poll = require('./poll');


