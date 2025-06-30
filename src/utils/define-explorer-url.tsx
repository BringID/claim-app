import chains from '@/app/configs/chains'
import defineNetworkName from './define-network-name'

const defineExplorerURL = (chainId: number): string => {
  const chainConfig =  chains[chainId]
  if (chainConfig) {
    const { blockExplorerUrls } = chainConfig
    if (blockExplorerUrls) {
      const explorerURL = blockExplorerUrls[0]
      if (explorerURL) { return explorerURL }
    }
  }
  const networkName = defineNetworkName(chainId)
  return `https://${networkName}.etherscan.io` 
}

export default defineExplorerURL