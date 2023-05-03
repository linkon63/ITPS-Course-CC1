import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <h1>Hello Next JS</h1>
      <Link href="/dashboard">Dashboard</Link>
      <br />
      <Link href="/login">Login</Link>
    </main>
  )
}
