import User from '../../rest/models/UserModel';

export default {
  signUpUser({
    username, firstName, lastName, email,
  }) {
    return new Promise((resolve, reject) => {
      User.create({
        username, firstName, lastName, email,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
