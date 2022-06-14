import classes from "./LastPosts.module.css";
import useWp from "../../hooks/useWp";
import { post } from "../../interfaces/wp.interface";
import PostCard from '../PostCard/PostCard';

export default function LastPosts() {
  const { data: posts, isLoading, pagination } = useWp("/posts");

  return (
    <div className={classes.container}>
      {posts.map((post: post) => (
        <PostCard post={post} key={post.id}/>
      ))}
    </div>
  );
}
