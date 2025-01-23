import React, { useState } from "react";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import { Post as Ipost } from "@/types/Ipost";
import { FaHeart } from "react-icons/fa6";

interface PostProps {
  post: Ipost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comments, setComments] = useState(post.comments);
  const [isLiked, setIsLiked] = useState(false);
  const addComment = (newComment: any) => {
    setComments([newComment, ...comments]);
    setShowCommentForm(false);
  };
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white dark:bg-slate-900 my-2 dark:text-white p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={post.authorImage || "https://via.placeholder.com/40"}
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h4 className="text-md font-semibold">
            {post.authorName || "John Doe"}
          </h4>
          <span className="text-sm text-gray-500">Posted on {post.date}</span>
        </div>
      </div>

      <div>
        <img
          src={post.image || "https://via.placeholder.com/600x300"}
          alt="Post"
          className="rounded-lg mb-4 w-full h-auto"
        />
        <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
      </div>

      <div className="flex items-center mt-4 space-x-4">
        <button
          onClick={toggleLike}
          className="flex items-center text-gray-600 text-sm hover:text-indigo-600"
        >
          {isLiked ? <FaHeart className={`mr-1 text-sm`} /> : <FaRegHeart className="mr-1 text-sm" />}{"  "}
          {isLiked ? 1 : " 0"}
        </button>
        <button
          onClick={() => setShowCommentForm((prev) => !prev)}
          className="flex items-center text-gray-600 text-sm hover:text-indigo-600"
        >
          <FaRegComment className="mr-1 text-sm" /> {comments.length}
        </button>
      </div>

      {showCommentForm && (
        <div>
          <div className="mt-4">
            <CommentForm onAddComment={addComment} />
          </div>
          <div className="mt-4">
            <CommentList comments={comments} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
