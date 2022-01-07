import { useSelector, useDispatch } from 'react-redux';
import { fetchInfo } from '../actions/recieveInfo';
import { fetchPost } from '../actions/recievePost';

function usePosts(postsInclude = false) {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  if (postsInclude && (!posts.posts || !posts.posts[postsInclude]) && posts.info) {
    dispatch(fetchInfo());
    dispatch(fetchPost(postsInclude));
  } else if (!posts.info) {
    dispatch(fetchInfo());
  }

  return posts;
}

export default usePosts;
