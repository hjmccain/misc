const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        match: [/^[a-zA-Z ]*$/,
          'Incorrect field type: username'],
        required: [true,
          'Missing field: username']
    },
    password: {
      type: String,
      required: true
    }
});

UserSchema.methods.validatePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, isValid) => {
    // console.log('is valid?', isValid);
    // console.log('this password', this.password);
    if (err) {
      // console.log('Validate -- err', err);
      callback(err);
      return;
    }
    // console.log('Validate -- is valid?', isValid);
    callback(null, isValid);
  });
};

const User = mongoose.model('User', UserSchema);
module.exports = User;

// bcrypt.compare(password, this.password)
//   .then( isValid => {
//     callback(null, isValid);
//   })
//   .catch(callback);
// };
