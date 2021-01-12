import Link from 'next/link'
import style from "../../styles/index.less"


export default function Home() {
  return (
    <nav>
          <Link href="/">Home</Link>
          <Link href="/weather">Weather</Link>
          <Link href="/todo">To Do</Link>   
    </nav>
  )
}
