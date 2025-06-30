import {
  FC
} from 'react'
import TProps from './types'
import {
  Container,
  ListItem,
  ListItemIcon,
  ListItemValue,
  ListItemText
} from './styled-components'

const IconedList: FC<TProps> = ({
  items,
  className
}) => {
  return <Container className={className}>
    {items.map(item => {
      const {
        title,
        icon,
        value
      } = item
      return <ListItem>
        <ListItemIcon>
          {icon}
        </ListItemIcon>

        <ListItemText>
          {title}<ListItemValue>{value}</ListItemValue>
        </ListItemText>
      </ListItem>
    })}
  </Container>
}

export default IconedList