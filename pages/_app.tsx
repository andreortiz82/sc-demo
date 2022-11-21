import '../styles/foundation/foundation.css'
import '../styles/globals.css'
import '../styles/customStyles.scss';

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { access } = router.query;
  return (access === 'true') ? <Component {...pageProps} /> : <div>No access to this demo</div>
}
