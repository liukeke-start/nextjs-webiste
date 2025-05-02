/*
 * @Author:  
 * @Date: 2022-10-13 11:06:46
 * @LastEditors:  
 * @LastEditTime: 2025-05-02 09:12:26
 * @FilePath: /nextjs-webiste/src/constants/setting.ts
 */

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

// export const CHAIN_ID = parseInt(import.meta.env.VITE_CHAIN_ID || '97')
export const CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID)
