interface IUrl {
  regular: string;
  thumb: string;
  small: string;
}
export interface IImage {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  alt: string;
  urls: IUrl;
}
