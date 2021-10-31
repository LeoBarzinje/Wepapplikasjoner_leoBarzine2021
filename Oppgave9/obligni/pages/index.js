import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
        <h1>Velkommen til oblig 9</h1>
        <h3> På navigasjonsbaren vil du finne "Hjem","Quiz" og "Lag Quiz"  </h3>
        <p> "Vis json" printer ut Json filen</p>
        <p> "Legg til i Json" Tillater deg å skrive inn flere navn til Json filen.</p>
    </div>
  )
}
