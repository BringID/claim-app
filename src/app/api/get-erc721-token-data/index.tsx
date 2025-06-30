import axios from 'axios'
import TRequest from './types'

const getERC721TokenData: TRequest = (url: string) => {
  return axios(url)
}

export default getERC721TokenData
