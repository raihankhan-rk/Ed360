import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layouts/Layout'



export default function App({ Component, pageProps }: AppProps) {
  
  
  return(
    <>
      <Head>
      </Head>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
