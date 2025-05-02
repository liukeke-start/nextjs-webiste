/*
 * @Author:  
 * @Date: 2025-05-02 09:08:23
 * @LastEditors:  
 * @LastEditTime: 2025-05-02 09:08:39
 * @FilePath: /nextjs-webiste/src/constants/function.ts
 */
import { getContract } from "thirdweb"
import { CHAIN_ID } from 'constants/setting'
import { BSCTESTNET_CHAIN, BSC_CHAIN} from 'constants/constant'
import { bscTestnet, bsc } from 'thirdweb/chains'

export const getBscChain = () => {
  let bsc_chain
  if (CHAIN_ID === BSCTESTNET_CHAIN) {
    bsc_chain = bscTestnet
  } else if (CHAIN_ID === BSC_CHAIN) {
    bsc_chain = bsc
  }
  return bsc_chain
}