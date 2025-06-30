import { ERC20Contract } from '@/abi'
import { ethers } from 'ethers'
import { createAlchemyInstance, defineJSONRPC } from '@/utils'
import { TTokenData } from 'types'

type TGetTokenERC20Data = (
  tokenAddress: string,
  chainId: number | null
) => Promise<
  TTokenData
>

const getTokenERC20Data: TGetTokenERC20Data = async (
  tokenAddress,
  chainId
) => {
  try {
    const alchemy = createAlchemyInstance(chainId)
    if (!alchemy) {
      throw new Error('No Alchemy instance is created')
    }
    const tokenData = await alchemy.core.getTokenMetadata(tokenAddress)
    const {
      symbol,
      decimals,
      logo
    } = tokenData

    return {
      symbol: symbol || 'ERC20 Token',
      decimals: Number(decimals),
      description: '',
      image: logo || undefined,
      standard: 'ERC20',
      address: tokenAddress
    } 
  } catch (err) {
    try {
      const jsonRpcUrl = defineJSONRPC()

      const provider = new ethers.JsonRpcProvider(jsonRpcUrl, chainId as number, {
        staticNetwork: true
      })
    
      const contractInstance = new ethers.Contract(tokenAddress, ERC20Contract, provider)
// 
      const symbol = await contractInstance.symbol()
      // const symbol = 'BRING'

      const decimals = await contractInstance.decimals()
      // const decimals = 18

      return {
        symbol,
        decimals,
        description: '',
        standard: 'ERC20',
        address: tokenAddress
      }
    } catch (err) {
      console.log(err)
      return {
        symbol: 'ERC20 Token',
        decimals: 18,
        description: '',
        standard: 'ERC20',
        address: tokenAddress
      }
    }
  }  
}


export default getTokenERC20Data