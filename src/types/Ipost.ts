export interface Post {
  id: number;
  authorName: string;
  authorImage: string;
  date: string;
  image: string;
  title: string;
  body: string;
  comments: any[];
}

export interface Comment {
  id: number;
  body: string;
  replies: Comment[];
}

export interface CommentData {
    id: number;
    body: string;
    replies: CommentData[];
  }
  