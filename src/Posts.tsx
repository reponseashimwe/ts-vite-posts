import { useQuery } from "react-query";
import { useMutation } from "react-query";
import axios from "axios";
import "./App.css";
import Post from "./components/Post";
import { ICreateComment, IPost } from "./types/index";

function Posts() {
  const mutation = useMutation((newComment: ICreateComment) =>
    axios.post("https://dummyjson.com/comments/add", newComment)
  );

  const submit = (data: ICreateComment) => {
    mutation.mutate(data);
  };

  // Fetcher function
  const getPosts = async () => {
    const res = await fetch("https://dummyjson.com/posts");
    return res.json();
  };
  // Using the hook
  const { data, error, isLoading } = useQuery("posts", getPosts);
  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  // Show the response if everything is fine
  return (
    <div className="posts">
      {data.posts.map((post: IPost) => (
        <Post post={post} postComment={submit} key={post.id}></Post>
      ))}
      ;
    </div>
  );
}

export default Posts;
