import Image from 'next/image';
import { post } from '../../interfaces/wp.interface';
import classes from './FeatureMedia.module.css';

interface props {
    readonly post: post
}
export default function FeatureMedia({post}:props){


    return <div className={classes.img}>
        <Image
          layout="responsive"
          sizes="100vw"
          placeholder="blur"
          loading='lazy'
          quality={100} 
          blurDataURL={'base64ImgBlur'}
          width={
            post.featured_media === 0 ? 240 : post._embedded['wp:featuredmedia'][0].media_details.width
          }
          height={
            post.featured_media === 0 ? 320 : post._embedded['wp:featuredmedia'][0].media_details.height
          }
          className={classes.img}
          src={
            post.featured_media === 0
              ? "/doom-bg.webp"
              : post._embedded['wp:featuredmedia'][0].source_url
          }
          alt={post.title.rendered}
        />
      </div>
}