import LaunchSlice, {
  setLaunchAssets,
  setLaunchDescription,
  setLaunchTitle,
  setLaunchTokenAddress,
  setLaunchTokenStandard,
  setZKTLSOptions,
  setTokenData,
  setDropData,
  approve,
  createDrop,
  setLoading,
  clearLaunch
} from './launch'

import UserSlice, {
  setUserChainId,
  setUserAddress,
  setSigner,
  setConnectedUserData,
  setAuthorizationStep
} from './user'

import VerifySlice, {
  setEphemeralKey,
  setVerifyLoading,
  setVerified,
  setWebproof
} from './verify'

import TokenSlice, {
  setTokenAddress,
  setTokenDecimals,
  setTokenImage,
  setTokenStandard,
  setTokenSymbol,
  setTokenAmount
} from './token'


import ClaimSlice, {
  setClaimed,
  setTxHash
} from './claim'



export {
  VerifySlice,
  setEphemeralKey,
  setVerifyLoading,
  setVerified,
  setWebproof,

  UserSlice,
  setUserChainId,
  setUserAddress,
  setSigner,
  setConnectedUserData,
  setAuthorizationStep,

  ClaimSlice,
  setClaimed,
  setTxHash,

  TokenSlice,
  setTokenAmount,
  setTokenAddress,
  setTokenDecimals,
  setTokenImage,
  setTokenStandard,
  setTokenSymbol,

  LaunchSlice,
  setLaunchAssets,
  setLaunchDescription,
  setLaunchTitle,
  setLaunchTokenAddress,
  setLaunchTokenStandard,
  setZKTLSOptions,
  setTokenData,
  setDropData,
  approve,
  setLoading,
  createDrop,
  clearLaunch
}
