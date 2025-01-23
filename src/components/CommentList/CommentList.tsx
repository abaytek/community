import React from "react";
import Comment from "../Comment/Comment";
import { CommentData } from "@/types/Ipost";

interface CommentListProps {
  comments: CommentData[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="comment-list mt-4 space-y-4">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
