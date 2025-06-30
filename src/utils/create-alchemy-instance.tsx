import { Alchemy } from 'alchemy-sdk'
import { defineAlchemyNetwork } from '@/utils'
import {
  alchemyApiKey
} from '@/app/configs'

const createAlchemyInstance = (chainId: number | null) : Alchemy | void => {
  const alchemyNetwork = defineAlchemyNetwork(chainId)
  if (!alchemyNetwork) {
    return 
  }

  const alchemy = new Alchemy({
    apiKey: alchemyApiKey,
    network: alchemyNetwork
  })

  return alchemy
}

export default createAlchemyInstance