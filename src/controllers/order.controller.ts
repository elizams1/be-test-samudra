import type { Request, Response } from 'express';
import { calculateDiscount } from '../services/order.service';

export const getDiscount = async (req: Request, res: Response) => {
  try {
    const { discount, hargaBarang } = (req.body ?? {}) as { discount?: number; hargaBarang?: number };

    if (discount === undefined || hargaBarang === undefined) {
      return res.status(400).json({
        success: false,
        message: 'discount dan hargaBarang wajib diisi',
      });
    }

    const { totalShopping, percentagePoint } = calculateDiscount(discount, hargaBarang);

    return res.status(200).json({
      success: true,
      message: `Belanja anda setelah diskon sebesar ${totalShopping} dan mendapatkan point sebesar ${percentagePoint}`,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server',
      error: error,
    });
  }
};
