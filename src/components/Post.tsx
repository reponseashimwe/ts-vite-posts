import { useForm, Resolver } from "react-hook-form";
import { ICreateComment, IPost } from "../types";

type FormValues = {
  body: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.body ? values : {},
    errors: !values.body
      ? {
          body: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

interface props {
  post: IPost;
  postComment: (data: ICreateComment) => void;
}

const Post = ({ post, postComment }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    const submitData = { ...data, postId: post.id, userId: 1 };
    postComment(submitData);
  });

  return (
    <div
      className="flex bg-white shadow-2xl rounded-lg mx-4 md:mx-auto my-10 max-w-md md:max-w-xl "
      key={post.id}
    >
      <div className="flex items-start px-4 py-6">
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 -mt-1">
              {post.title}
            </h2>
          </div>
          <p className="mt-5 text-gray-700 text-sm">{post.body}</p>
          <div className="flex my-8 space-x-2 items-center">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-muted-1 bg-muted-1 px-2 py-1 text-xs font-semibold text-heading shadow-md"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 8 8"
                  className="mr-1 h-2 w-2 text-green-500"
                >
                  <circle cx={4} cy={4} r={3} />
                </svg>
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex items-center">
            <div className="flex mr-2 text-green-500 font-md text-sm mr-8">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span>{post.reactions}</span>
            </div>
            <form className="w-full" onSubmit={onSubmit}>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <input
                    {...register("body")}
                    className="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your comment..."
                    required={true}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-green-500 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {errors?.body && <p>{errors.body.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
