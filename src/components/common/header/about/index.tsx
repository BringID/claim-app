import { FC } from 'react'
import {
  DialogStyled,
  DialogContent,
  DialogList,
  DialogListItem,
  DialogListItemText,
  Buttons,
  DialogTitle
} from './styled-components'
import TProps from './types'
import {
  Button
} from '@/components/common'
import {
  docsLink
} from '@/app/configs'
import Cards from './cards'

const items = [
  {
    text: 'Discover airdrops available for your favorite apps'
  },
  {
    text: 'Verify your activity with absolute privacy'
  },
  {
    text: 'Claim tokens'
  }
]

const About: FC<TProps> = ({
  onClose
}) => {
  return <DialogStyled
    onClose={onClose}
  >
    <DialogContent>
      <Cards />
      <DialogTitle>Explore zkTLS-powered airdrops</DialogTitle>
      <DialogList>
        {items.map(item => {
          return <DialogListItem>
            <DialogListItemText>
              {item.text}
            </DialogListItemText>
          </DialogListItem>
        })}
      </DialogList>
      <Buttons>
        <Button
          href={docsLink}
          target='_blank'
        >
          Learn more
        </Button>

        <Button
          onClick={onClose}
          appearance='action'
        >
          Explore airdrops
        </Button>
      </Buttons>
    </DialogContent>
  </DialogStyled>
}

export default About