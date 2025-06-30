import axios, { AxiosResponse } from 'axios'
import { TZerionERC20Item, TZerionNetworkItem } from '@/types'

type TGetZerionERC20Items = (
  address: string,
  currentNetworkName: string
) => Promise<AxiosResponse<{
  data: TZerionERC20Item[]
}>>

type TGetZerionNetworks = () => Promise<AxiosResponse<{
  data: TZerionNetworkItem[]
}>>

export type {
  TGetZerionERC20Items,
  TGetZerionNetworks
}