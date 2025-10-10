import { JsonRpcSigner, ethers } from 'ethers'
import {
  BringSDK
} from 'zkbring-sdk'
import {
  defineJSONRPC
} from '@/utils'
import TransgateConnect from "@zkpass/transgate-js-sdk"
import * as configs from '@/app/configs'

type TCreateSDKArgs = {
  signer?: JsonRpcSigner,
  transgateModule?: typeof TransgateConnect
}

type TCreateSDK = (args: TCreateSDKArgs) => Promise<BringSDK | null>

const createSDK: TCreateSDK = async ({
  signer,
  transgateModule
}) => {
  try {
    if (signer) {
      if (transgateModule) {
        return await BringSDK.initialize({
          walletOrProvider: signer,
          transgateModule: transgateModule
        })
      }

      return await BringSDK.initialize({
        walletOrProvider: signer
      })
    }

    const jsonRpcUrl = defineJSONRPC(configs.networkId)

    const provider = new ethers.JsonRpcProvider(jsonRpcUrl, Number(configs.networkId), {
      staticNetwork: true
    })

  
    if (!transgateModule) {
      const sdk = await BringSDK.initialize({
        walletOrProvider: provider
      })
  
      return sdk
    }
  
    return await BringSDK.initialize({
      walletOrProvider: provider,
      transgateModule: transgateModule
    })
  } catch (err) {
    return null
  }
  
}

export default createSDK