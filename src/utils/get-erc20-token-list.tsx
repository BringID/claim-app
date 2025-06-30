import { defineNetworkZerionId } from '@/utils'
import { TTokenData, TTokenStandard } from '@/types'
import { zerion } from '@/app/api'

type TGetTokenERC20Data = (
  address: string,
  chainId: number | null
) => Promise<
  TTokenData[]
>

const getERC20TokenList: TGetTokenERC20Data = async (
  address,
  chainId
) => {
  try {
    const currentNetworkName = defineNetworkZerionId(chainId)
    const networks = await zerion.getNetworks()

    if (networks.data.data.find(item => item.id === currentNetworkName)) {
      const zerionItems = await zerion.getERC20Item(
        address,
        currentNetworkName
      )

      const zerionData = zerionItems.data.data

      if (zerionData.length > 0) {
        const dataConverted = zerionData.map(item => {
          const decimals = item.attributes.quantity.decimals
          const quantity = item.attributes.quantity.int
          const symbol = item.attributes.fungible_info.symbol
          const icon = (item.attributes.fungible_info.icon || {}).url

          const implementation = item.attributes.fungible_info.implementations.find(impl => impl.chain_id === currentNetworkName)
          const address = (implementation || {}).address

          return {
            amount: quantity,
            decimals,
            symbol,
            address: address || '',
            standard: 'ERC20' as TTokenStandard,
          }

        }).filter(item => item)

        return dataConverted
      }
      return []
    }
    return []
  } catch (err) {
    console.log(err)
    return []
  }  
}


export default getERC20TokenList