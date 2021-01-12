import Head from 'next/head'
import image from './assets/logo.jpeg'
import style from "../styles/index.less"
import Header from './components/Header'


export default function Home() {
  return (
    <div >
      <Head>
        <title>My Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className={style.main}>
      <h1>Welcome to my app</h1>
        <Header/>
        <img src={image} style={{width: '20px'}}/>
        </div>
      </main>
    </div>
  )
}
