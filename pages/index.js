import Head from 'next/head'
import Profile from '../components/Profile'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Isabelle Yim</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://use.fontawesome.com/releases/v5.15.3/css/svg-with-js.css"
          rel="stylesheet"
        ></link>

        <script
          src="https://kit.fontawesome.com/fa3635a591.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Profile src="/profile-picture.jpg" alt="Isabelle Yim" marginTop={30} />
      <About />
      <Footer />
    </>
  )
}
