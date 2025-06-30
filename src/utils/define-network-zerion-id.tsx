const defineNetworkZerionId = (chainId: number | null) : string => {
  switch (chainId) {
    case 8453: return 'base'
    case 84532: return 'base_sepolia'
    default: return 'base'
  }
}
export default defineNetworkZerionId