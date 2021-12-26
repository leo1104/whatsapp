import Head from 'next/head'
import Image from 'next/image'
import Vertical from '../components/Vertical'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Antleria</title>
        <meta name="description" content="A general chat app for one-to-one interaction" />
        <link rel="icon" href="/antleria_logo.svg" />
      </Head>

<Vertical/>    
    </div>
  )
}
