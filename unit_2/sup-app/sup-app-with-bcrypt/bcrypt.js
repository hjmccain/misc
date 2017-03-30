const bcryptUser = (username, password) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return serverError };
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) { return serverError };
      const user = {
        username: username,
        password: hash
      };
    });
  });
}


const strategy = new basicStrategy((username, password, callback) => {

  User.findOne({ username: username })
    .then((user) => {

    })

  User.findOne({
    username: username
  }, ((err, user) => {
    if (err) {
      callback(err);
      return;
    }
    if (!user) {
      return callback(null, false, {
        message: 'Incorrect username.'
      });
    }


    user.validatePassword(password)
      .then((user) => callback(null, user))
      .catch((err, isValid) => {
        if (err) { return callback(err)
        } else if (!isValid) {
          return callback(null, false, {
            message: 'Incorrect password.'
          });
        }
      });



  }));
});
