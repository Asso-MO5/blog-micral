import { post } from "../../interfaces/wp.interface";
import FeatureMedia from "../FeatureMedia/FeatureMedia";
import classes from "./PostCard.module.css";

interface props {
  readonly post: post;
}

export default function PostCard({ post }: props) {
  return (
    <article className={classes.container}>
      <h2>{post.title.rendered}</h2>
      <FeatureMedia post={post} />
    </article>
  );
}
