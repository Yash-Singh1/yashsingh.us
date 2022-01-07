export const RECEIVE_POST = 'RECEIVE_POST';

function postToAction(post, filename) {
  return {
    type: RECEIVE_POST,
    post,
    filename
  };
}

export function fetchPost(filename) {
  return function (dispatch) {
    import('../data/fileImportMap.js').then((postMap) =>
      postMap.default[filename]().then((post) => {
        dispatch(postToAction(post.default, filename));
      })
    );
  };
}
