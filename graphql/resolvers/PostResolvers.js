
import Post from '../../rest/models/PostsModel';

export default {
  createPost: (_, args) => Post.create(args),
  find: () => Post.find(),
};
