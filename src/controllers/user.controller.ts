import type { Request, Response } from 'express';
import { UserFormatted } from '../types/user.types';
import { fetchRandomUser } from '../services/user.service';

export const getListFormattedUser = async (req: Request, res: Response) => {
  try {
    const { results, page } = req.query as {
      results?: string;
      page?: string;
    };

    if (!results || !page) {
      return res.status(400).json({
        success: false,
        message: 'results dan page wajib diisi',
      });
    }

    const resultsNum = Number(results);
    const pageNum = Number(page);

    if (isNaN(resultsNum) || isNaN(pageNum)) {
      return res.status(400).json({
        success: false,
        message: 'results dan page harus berupa angka',
      });
    }

    const userFormatted: UserFormatted[] = await fetchRandomUser(resultsNum, pageNum);

    return res.status(200).json({
      success: true,
      message: `Data user berhasil di format`,
      data: userFormatted,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server',
      error: error,
    });
  }
};
