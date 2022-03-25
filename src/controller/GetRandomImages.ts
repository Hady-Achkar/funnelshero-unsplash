import { Request, Response } from 'express';
import { ApiConstants } from '../constants';
import { ContentTransducer } from '../helper';
import { MainAxios } from '../lib';
export const GetRandomImages = async (req: Request, res: Response) => {
  try {
    const unsplashRes = await MainAxios({
      method: 'GET',
      url: ApiConstants.GET_RANDOM,
    });
    return res.status(200).json({
      status: 'Success',
      message: 'Images were fetched successfully',
      images: ContentTransducer(unsplashRes?.data),
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
