import {useState} from "react"
import Head from 'next/head'
import {connect} from "react-redux"
import {setInfo} from "../redux/actions/main"
import style from "../styles/index.less"
import Header from './components/Header'

 function Weather(props) {

const {userInfo, setInfo} = props;
const [name, setName] = useState('')

  return (
    <div >
      <Head>
        <title>My Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <div className={style.main}>
       <h1 >
        Today is looking good for {userInfo.name}
        </h1>
        <Header/>
        <input 
        name="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        />
        <button
        onClick={()=>setInfo(name)}>
        </button>
        </div>
        </main>
    </div>
  )
}

const mapStateToProps = state => ({
  userInfo: state.main
})

const mapDispatchToProps = {
  setInfo:setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)


