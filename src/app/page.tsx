'use client'
import Home from '@/app/home/page'
import useSetAccessToken from '@/lib/hooks/redux/useSetAccessToken'

export default function App() {
  //accesstoken은 앱 켜자마자 셋되어야할 것 같아서 여기에 불렀는데 괜찮은지 모르겠네요.
  useSetAccessToken()

  return <Home />
}
