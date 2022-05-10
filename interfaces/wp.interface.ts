enum taxonomy {
  category,
  post_tag,
  nav_menu,
  link_category,
  post_format,
}

export interface TagInterface {
  readonly id: number;
  readonly filter: string;
  readonly name: string;
  readonly description: string;
  readonly count: number;
  readonly slug: string;
  readonly taxonomy: string;
  readonly term_id: number;
  readonly term_taxonomy_id: number;
  readonly term_group: number;
}

interface contentPost {
  rendered: string;
  protected: string;
}

interface rendered {
  rendered: string;
}

enum mediaType {
  image,
  file,
}

interface mediaSize {
  mime_type: string;
  source_url: string;
  height: number;
  width: number;
}

export interface media {
  id: number;
  alt_text: string;
  caption: rendered;
  date: Date;
  media_type: mediaType;
  source_url: string;
  height: number;
  width: number;
  media_details: {
    width: number;
    height: number;
  };
  sizes: {
    full: mediaSize;
    medium: mediaSize;
    thumbnail: mediaSize;
  };
}

export interface categorie {
  cat_ID: number;
  id: number;
  count: 2;
  description: string;
  name: string;
  parent: number;
  slug: string;
  taxomomy: taxonomy;
}

export interface post {
  date: Date;
  modified: Date;
  id: number;
  slug: string;
  title: rendered;
  sticky: boolean;
  content: contentPost;
  excerpt: contentPost;
  featured_media: number;
  Categories: Array<categorie> | false;
  Tags: Array<TagInterface> | false;
  _embedded?: {
    "wp:featuredmedia": Array<media>;
  };
}

export interface menu {
  count: number;
  description: string;
  name: string;
  parent: number;
  slug: string;
  taxonomy: taxonomy;
}

export interface user {
  readonly id: number;
  readonly name: string;
  readonly slug: number;
  readonly avatar_urls: {
    24: string;
    48: string;
    96: string;
  };
}
