import * as Yup from "yup";

export const PostSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .max(100, "Title cannot exceed 100 characters"),
  body: Yup.string()
    .required("Body is required")
    .min(10, "Body must be at least 10 characters"),
});
export const CommentSchema = Yup.object({
  body: Yup.string()
    .required("")
    .min(5, "Comment must be at least 5 characters")
    .max(500, "Comment cannot exceed 500 characters"),
});
