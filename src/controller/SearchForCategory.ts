import { Request, Response } from 'express';
import { ApiConstants } from '../constants';
import { ContentTransducer } from '../helper';
import { MainAxios } from '../lib';
export const SearchForCategory = async (req: Request, res: Response) => {
  try {
    const { q, limit = 10 } = req.query;
    if (!q || q === '') {
      return res.status(400).json({
        status: 'Failure',
        errors: [
          {
            name: 'missing query',
            field: 'q',
          },
        ],
        requestTime: new Date().toISOString(),
      });
    }
    const unsplashRes = await MainAxios({
      method: 'GET',
      url: `${ApiConstants.SEARCH_IMAGES}?query=${q}&per_page=${limit}`,
    });
    return res.status(200).json({
      status: 'Success',
      message: 'Images were fetched successfully',
      images: ContentTransducer(unsplashRes?.data?.results),
      requestTime: new Date().toISOString(),
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: 'Internal Server Error',
        error: err.message,
        requestTime: new Date().toISOString(),
      });
    }
  }
};
