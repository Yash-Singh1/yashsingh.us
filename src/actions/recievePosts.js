export const RECIEVE_POSTS = 'RECIEVE_POSTS';

function postsToAction(posts) {
  return {
    type: RECIEVE_POSTS,
    posts
  };
}

function manipulatePosts(posts) {
  let newPosts = {};

  newPosts.default = posts.default
    .map((post, index) => ({ ...post, index }))
    .sort(({ date: date1 }, { date: date2 }) => new Date(date2) - new Date(date1));
  newPosts.filenames = newPosts.default.map(
    ({ index }) => /\/([^/]*?)\.[^/.]*?$/.exec(posts.filenames[index])[1]
  );

  return newPosts;
}

export function fetchPosts() {
  return function (dispatch) {
    return import('../../content/*.mdx').then((posts) =>
      dispatch(postsToAction(manipulatePosts(posts)))
    );
  };
}
