import Head from 'next/head'
import style from "../styles/index.less"
import Header from './components/Header'


export default function Home() {
  return (
    <div >
      <Head>
        <title>My Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <div className={style.main}>
      <h1 >
        Party is today
        </h1>
        <Header/>
        </div>
        </main>
    </div>
  )
}
