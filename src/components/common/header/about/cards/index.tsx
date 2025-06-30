import { FC } from 'react'
import {
  Container,
  Card,
  CardImageWrapper,
  CardText,
  CardTitle
} from './styled-components'
import {
  CardAirbnbIcon,
  CardRedditIcon,
  CardSpotifyIcon
} from '@/components/icons'

const data = [
  {
    title: 'Reddit Contributor',
    text: 'Claim tokens for 5 karma',
    color: '#FF5500',
    icon: <CardRedditIcon />
  }, {
    title: 'Spotify Fan',
    text: 'Earn tokens for listening to music',
    color: '#18C04D',
    icon: <CardSpotifyIcon />
  }, {
    title: 'Airbnb Guest',
    text: 'Claim tokens for 3 stays',
    color: '#FF385C',
    icon: <CardAirbnbIcon />
  }
]

const Cards: FC = () => {
  return <Container>
    {data.map(item => {
      return <Card style={{ backgroundColor: item.color }}>
        <CardImageWrapper>
          {item.icon}
        </CardImageWrapper>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.text}</CardText>
      </Card>
    })}
    
  </Container>
}

export default Cards
