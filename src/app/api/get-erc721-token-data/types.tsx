import {
  AxiosResponse
} from 'axios'

type TResponse = Promise<
  AxiosResponse<
    {
      name: string
      description: string
      image: string
      animation_url?: string
    }
  >
>

type TRequest = (url: string) => TResponse

export default TRequest