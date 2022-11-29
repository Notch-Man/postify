import * as yup from "yup";

const PostSchema = yup.object({
  title: yup
    .string()
    .min(5, "Title is too short!")
    .max(50, "Title is too long!")
    .required("All posts have a title!"),

  description: yup
    .string()
    .min(10, "Description is too short!")
    .max(5000, "Description is too long!")
    .required("All posts have a description!"),
});

export default PostSchema;
