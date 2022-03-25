import { IImage, RandomImages } from '../types';

export const ContentTransducer = (
  RawContent: RandomImages.RootObject[]
): IImage[] => {
  return RawContent.map((item) => {
    return {
      id: item.id,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      alt: item.alt_description,
      urls: {
        regular: item.urls.regular,
        small: item.urls.small,
        thumb: item.urls.thumb,
      },
    };
  });
};
