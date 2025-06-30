import axios, { AxiosResponse } from 'axios'
import { TGetZerionERC20Items, TGetZerionNetworks } from './types'
import { createQueryString } from '@/utils'
import { zerionApiKey } from '@/app/configs'



const getERC20Item: TGetZerionERC20Items = (
  address: string,
  currentNetworkName: string
) => {
  const query = createQueryString({
    'filter[chain_ids]': currentNetworkName,
    'filter[trash]': 'only_non_trash'
  })
  return axios.get(
    `https://api.zerion.io/v1/wallets/${address}/positions/?${query}`, {
      headers: {
        accept: 'application/json',
        authorization: `Basic ${btoa(zerionApiKey as string)}`
      }
    })
}


const getNetworks: TGetZerionNetworks = () => axios.get(
  `https://api.zerion.io/v1/chains/`, {
    headers: {
      accept: 'application/json',
      authorization: `Basic ${btoa(zerionApiKey as string)}`
    }
  }
)

export default {
  getERC20Item,
  getNetworks
}