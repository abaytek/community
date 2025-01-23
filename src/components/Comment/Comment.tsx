import React, { useState } from "react";
import { FaReply } from "react-icons/fa";
import CommentForm from "../CommentForm/CommentForm";
import { CommentData } from "@/types/Ipost";


interface CommentProps {
  comment: CommentData;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replies, setReplies] = useState<CommentData[]>(comment.replies);

  const addReply = (newReply: CommentData) => {
    setReplies([newReply, ...replies]);
    setIsReplying(false);
  };

  return (
    <div className="comment bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="text-gray-700">{comment.body}</p>

      <div className="flex items-center mt-2 space-x-4">
        <button
          onClick={() => setIsReplying(!isReplying)}
          className="flex items-center text-gray-600 text-xs hover:text-indigo-600"
        >
          <FaReply className="mr-2" /> Reply
        </button>
        {replies.length > 0 && (
          <button
            onClick={() => setShowReplies((prev) => !prev)}
            className="text-gray-600 hover:text-indigo-600 text-xs"
          >
            {showReplies
              ? `Hide Replies (${replies.length})`
              : `See Replies (${replies.length})`}
          </button>
        )}
      </div>

      {/* Toggle Reply Form */}
      {isReplying && <CommentForm onAddComment={addReply} />}

      {/* Toggle Replies */}
      {showReplies && (
        <div className="space-y-1 pl-4">
          {replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
