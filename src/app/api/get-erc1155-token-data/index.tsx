import axios from 'axios'
import TRequest from './types'
import { metadataUrlResolve } from '@/utils'

const getERC1155TokenData: TRequest = (url: string, tokenId: string) => {
  const tokenDataURL = url.replace('0x{id}', tokenId)
  return axios(metadataUrlResolve(tokenDataURL, tokenId), { timeout: 1500 })
}

export default getERC1155TokenData
