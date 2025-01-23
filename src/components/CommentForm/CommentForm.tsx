import React from "react";
import { useFormik } from "formik";
import { Comment } from "@/types/Ipost";
import { CommentSchema } from "@/utilities/validation";

interface CommentFormProps {
  onAddComment: (comment: Comment) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const formik = useFormik({
    initialValues: {
      body: "",
    },
    validationSchema: CommentSchema,
    onSubmit: (values, { resetForm }) => {
      const newComment: Comment = {
        id: Date.now(),
        body: values.body,
        replies: [],
      };
      onAddComment(newComment);
      resetForm(); 
    },
  });

  return (
    <form
      className="comment-form mt-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-200 p-1 flex flex-col justify-end items-end"
      onSubmit={formik.handleSubmit}
    >
      <textarea
        name="body"
        className={`w-full p-2 bg-transparent resize-none rounded-md focus:outline-none ${
          formik.touched.body && formik.errors.body ? "border-red-500" : ""
        }`}
        placeholder="Write a comment..."
        value={formik.values.body}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>
      {formik.touched.body && formik.errors.body && (
        <p className="text-red-500 text-sm">{formik.errors.body}</p>
      )}

      <button
        type="submit"
        className="mt-2 flex text-black rounded-md transition text-xs dark:text-white px-4 py-2"
      >
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
