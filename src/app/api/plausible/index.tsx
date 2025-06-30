import axios, { AxiosResponse } from 'axios'
import Plausible from 'plausible-tracker-linkdrop'
import { plausibleDomain } from '@/app/configs'

export const plausible = Plausible({
  domain: plausibleDomain
})

type TEventData = {
  eventName: string
  data?: {
    [dataTitle: string]: string
  }
}

type TInvokeEvent = (eventData: TEventData) => Promise<void | AxiosResponse>

const invokeEvent: TInvokeEvent = async ({
  eventName, data
}) => {
  try {
    return plausible.trackEvent(
      eventName,
      {
        callback: () => console.log(`Plausible event sent: ${eventName}`),
        props: data,
      },
      {
        url: window.location.origin
      }
    )
  } catch (err) {
    console.error(err)
  }
}

export default {
  invokeEvent
}