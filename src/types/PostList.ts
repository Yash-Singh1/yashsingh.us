export interface Post {
  title: string;
  subtitle: string;
  filename: string;
  image: string;
  author: string;
  date: string;
  link?: string;
}

export type PostList = Post[];

export default PostList;
