import { post } from '../../interfaces/wp.interface';
import FeatureMedia from '../FeatureMedia/FeatureMedia';
import classes from './PostCard.module.css';

interface props {
  readonly post: post;
}

export default function PostCard({ post }: props) {
  return (
    <article className={classes.container}>
  
        <FeatureMedia post={post} />


      <div className="cid">
        <h2>{post.title.rendered}</h2>

        <div
          className={classes.desc}
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />
      </div>
    </article>
  );
}
