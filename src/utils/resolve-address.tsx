import { defineJSONRPC } from '@/utils'
import { ethers } from 'ethers'

type TResolveAddress = (
  address: string
) => Promise<(null | string)>

const resolveAddress: TResolveAddress = async (
  address
) => {
  if (address.length === 42 && address.startsWith('0x')) {
    return address
  }

  const jsonRpcUrl = defineJSONRPC()
  const provider = new ethers.JsonRpcProvider(jsonRpcUrl, 1, {
    staticNetwork: true
  })

  try {
    const resolve = await provider.resolveName(address)
    return resolve
  } catch (e) {
    console.log(e)
    return null
  }
}

export default resolveAddress