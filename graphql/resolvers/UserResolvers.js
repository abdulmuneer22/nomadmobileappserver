// import UserProxy from '../Proxies/UserProxy'
import User from '../../rest/models/UserModel';


export default {
  signup: (_, args) => {
    const userData = {
      username: args.username,
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      password: args.password,
    };
    return User.create(userData);
  },
  signin: async (_, args) => {
    if (!args.password || !args.username) {
      throw new Error('Provide username and password');
    } else {
      const user = await User.findOne({ username: args.username });

      if (!user) {
        throw new Error('User not registered with us');
      }

      if (!user.authenticateUser(args.password)) {
        throw new Error('username and password doesnot match');
      } else {
        return 'Secret Access Token';
      }
    }
  },
  find: () => User.find(),
};
