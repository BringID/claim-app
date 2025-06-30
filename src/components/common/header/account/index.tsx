import {
  Account,
  Address,
  Profile,
  Logout
} from './styled-components'
import { NetworkIndicator } from '../..'
import {
  shortenString
} from '@/utils'
import {
  LogoutIcon
} from '@/components/icons'
import {
  ConnectButton
} from '@/components/common'
import { useDisconnect } from "wagmi"
import {
  useAppDispatch,
  useAppSelector
} from '@/lib/hooks'
import {
  setUserAddress
} from '@/lib/slices'


const AccountComponent = () => {
  const { disconnect } = useDisconnect()
  const dispatch = useAppDispatch()
  const {
    user: {
      address,
      chainId
    },
  } = useAppSelector(state => ({
    user: {
      chainId: state.user.chainId,
      address: state.user.address
    },
  }))

  if (!address) {  
    return <Profile>
      <ConnectButton size='small' appearance='default'/>
    </Profile>
  }

  return <Profile>
      <Account>
        <Address>
          {shortenString(address)}
        </Address>
      </Account>
      <Logout
        onClick={() => {
          dispatch(setUserAddress(null))
          disconnect()
        }}
      >
        <LogoutIcon />
      </Logout>
    </Profile>
}

export default AccountComponent