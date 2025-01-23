import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useFormik } from "formik";
import { Formatter } from "@/utilities/formatters";
import { CONSTANTS } from "@/utilities/constants";
import { Post } from "@/types/Ipost";
import { PostSchema } from "@/utilities/validation";



interface PostFormProps {
  onAddPost: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onAddPost }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validationSchema: PostSchema,
    onSubmit: (values, { resetForm }) => {
      const date = new Date();
      const newPost: Post = {
        id: Date.now(),
        authorName: CONSTANTS.DUMMY_USER_NAME,
        authorImage: CONSTANTS.DUMMY_USER_IMAGE,
        date: Formatter.fromNow(date),
        image: CONSTANTS.DUMMY_POST_IMAGE,
        title: values.title,
        body: values.body,
        comments: [],
      };
      onAddPost(newPost);
      resetForm(); 
    },
  });

  return (
    <form className="post-form" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          className={`border dark:bg-black border-gray-300 dark:border-gray-800 px-2 py-2 w-full outline-none ${
            formik.touched.title && formik.errors.title ? "border-red-500" : ""
          }`}
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title && (
          <p className="text-red-500 text-xs">{formik.errors.title}</p>
        )}
        <textarea
          name="body"
          className={`border px-2 py-1 dark:border-gray-800 border-gray-300 dark:bg-black outline-none w-full h-16 resize-none ${
            formik.touched.body && formik.errors.body ? "border-red-500" : ""
          }`}
          placeholder="Body"
          value={formik.values.body}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.body && formik.errors.body && (
          <p className="text-red-500 text-xs">{formik.errors.body}</p>
        )}
      </div>

      <button
        className="flex bg-blue-600 text-white font-bold justify-center items-center text-sm px-4 py-2 rounded-sm my-2"
        type="submit"
      >
        <FaPlusCircle className="mr-2 text-xs" />
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
