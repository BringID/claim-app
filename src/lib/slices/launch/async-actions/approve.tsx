import { createAsyncThunk } from '@reduxjs/toolkit'
import type { TInitialState } from '../types'
import { ethers } from 'ethers'
import { JsonRpcSigner } from 'ethers'
import {
  ERC20Contract
} from '@/abi'

import { checkApproveTransaction } from '@/utils'

type TArgs = {
  address: string,
  factoryAddress: string,
  signer: JsonRpcSigner
  totalAmount: string
}

const approve = createAsyncThunk(
  'launch/approve',
  async ({
    address,
    totalAmount,
    factoryAddress,
    signer
  }: TArgs, { getState }) => {
    const state = getState() as {
      launch: TInitialState
    }
    const {
      launch: {
        tokenAddress
      }
    } = state

    const contractInstance = new ethers.Contract(tokenAddress as string, ERC20Contract, signer)

    let iface = new ethers.Interface(ERC20Contract)

    let data = iface.encodeFunctionData('approve', [
      factoryAddress, String(totalAmount)
    ])

    await signer.sendTransaction({
      to: tokenAddress,
      from: address,
      value: 0,
      data: data
    })

    const checkTransaction = checkApproveTransaction(
      contractInstance,
      address,
      factoryAddress,
      BigInt(totalAmount)
    )

    await checkTransaction()

    return true
    
  }
)

export default approve