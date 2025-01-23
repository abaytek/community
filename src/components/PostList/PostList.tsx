import React from 'react';
import Post from '../Post/Post';
import { Post as Ipost } from '@/types/Ipost';

interface PostListProps {
  posts: Ipost[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;