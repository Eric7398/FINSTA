import Head from 'next/head'
import Header from "../components/Header"
import Feed from "../components/Feed"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>FINSTA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER */}
      <Header />
      {/* FEED */}
      <Feed />
      {/* MODEL */}

    </div>
  )
}
