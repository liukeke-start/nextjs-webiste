/*
 * @Author:  
 * @Date: 2024-06-24 15:16:14
 * @LastEditors:  
 * @LastEditTime: 2025-05-02 09:05:51
 * @FilePath: /nextjs-webiste/src/constants/constant.ts
 */
import { createThirdwebClient } from "thirdweb"

const client = createThirdwebClient({
  clientId: "c314462d640afb28b22f419feb527158",
})

const BSCTESTNET_CHAIN = 97
const BSC_CHAIN = 56

const PAGE_SIZE = 10

export { client, PAGE_SIZE, BSCTESTNET_CHAIN, BSC_CHAIN }
