export interface ICreateComment {
  body: string;
  postId: number;
  userId: number;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}
