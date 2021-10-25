import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/recievePosts';

function usePosts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  if (!posts) {
    dispatch(fetchPosts());
  }

  return posts;
}

export default usePosts;
