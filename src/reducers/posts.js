import { RECEIVE_INFO } from '../actions/recieveInfo';
import { RECEIVE_POST } from '../actions/recievePost';

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POST:
      if (!state.posts) {
        state.posts = {};
      }
      state.posts[action.filename] = action.post;
      return state;
    case RECEIVE_INFO:
      return { ...state, info: action.info };
    default:
      return state;
  }
}
