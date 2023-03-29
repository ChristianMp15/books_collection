import Header from '@/components/Header'
import '@/styles/globals.css'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  return <Fragment>
    <Header/>
     <Component {...pageProps} />
     </Fragment>
}
