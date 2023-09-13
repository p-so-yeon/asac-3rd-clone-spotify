import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}
export default function ContentCardInfo({ children }: Props) {
  return <div>{children}</div>
}
