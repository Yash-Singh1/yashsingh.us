export interface Post {
  title: string;
  subtitle: string;
  filename: string;
  image: string;
  author: string;
  date: string;
  link?: string;
  keywords?: string[];
  draft?: boolean;
}

type PostList = Post[];

export default PostList;
