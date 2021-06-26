export interface IMessage {
  title: string
  subtitle: string
  avatar: string
  alt: string
}

export interface IEnvelope {
  text: string
  badge: number
  message: Array<IMessage>
  readMore: string
  readMoreUrl: string
}
