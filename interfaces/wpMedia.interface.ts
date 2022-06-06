export interface WP_MEDIA {
  readonly id: number;
  readonly date: Date;
  readonly slug: string;
  readonly source_url: string;
  readonly sizes: {
    readonly full: sizeMedia;
    readonly thumbnail: sizeMedia;
  };
}

interface sizeMedia {
  readonly file: string;
  readonly height: number;
  readonly source_url: string;
  readonly width: number;
  readonly mime_type: string;
}
