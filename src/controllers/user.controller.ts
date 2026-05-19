import type { Request, Response } from 'express';
import { UserFormatted } from '../types/user.types';
import { fetchRandomUser } from '../services/user.service';

export const getListFormattedUser = async (req:Request, res: Response)=>{
    try{
        const {results, page, search} = (req.body ?? {}) as {results?:number, page?:number, search?:string}
        if (results === undefined || page === undefined) {
            return res.status(400).json({
                success: false,
                message: 'results dan page wajib diisi',
            });
        }

        const userFomatted:UserFormatted[] = await fetchRandomUser(results, page, search)

        return res.status(200).json({
            success: true,
            message: `Data user berhasil di format`,
            data: userFomatted
        });

    } catch (error:any){
        return res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan pada server',
            error: error,
        });
    }
}