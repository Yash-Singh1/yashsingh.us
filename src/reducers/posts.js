import { RECIEVE_POSTS } from '../actions/recievePosts';

export default function posts(state = null, action) {
  switch (action.type) {
    case RECIEVE_POSTS:
      return action.posts;
    default:
      return state;
  }
}
