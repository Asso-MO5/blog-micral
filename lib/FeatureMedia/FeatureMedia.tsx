import Image from 'next/image';
import { post } from '../../interfaces/wp.interface';
import classes from './FeatureMedia.module.css';

interface props {
  readonly post: post;
}

export default function FeatureMedia({ post }: props) {
  return (
    <div className={classes.container}>
      <Image
        layout="responsive"
        sizes="100vw"
        loading="lazy"
        quality={100}
        className={classes.img}
        width={
          post.featured_media === 0
            ? 300
            : post._embedded['wp:featuredmedia'][0].media_details.width
        }
        height={
          post.featured_media === 0
            ? 225
            : post._embedded['wp:featuredmedia'][0].media_details.height
        }
        src={
          post.featured_media === 0
            ? '/default.webp'
            : post._embedded['wp:featuredmedia'][0].source_url
        }
        alt={post.title.rendered}
      />
    </div>
  );
}
