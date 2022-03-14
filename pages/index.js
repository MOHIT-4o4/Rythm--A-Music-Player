import Head from 'next/head'
import Sidebar from '../Components/Sidebar'
import Center from '../Components/Center'
import Player from '../Components/Player'
import ChangeAble from '../Components/ChangeAble'
import Search from '../Components/Search'
import { getSession } from 'next-auth/react'
export default function Home() {

  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="spotifyico.ico" />
      </Head>
      <main className="flex">
        <Sidebar />
        {/* <Center /> */}
        <ChangeAble />
        {/* <Search /> */}
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
