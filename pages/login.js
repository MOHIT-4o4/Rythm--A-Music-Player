import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'
import Head from 'next/head'
import spotifylogo from '../public/images/Spotify_Logo1.png'

export default function login({ providers }) {
  console.log(providers)

  return (
    <div className="flex min-h-screen w-full select-none flex-col items-center justify-center bg-black">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="spotifyico.ico" />
      </Head>
      <Image
        draggable="false"
        className="mb-5 p-5"
        src={spotifylogo}
        width="500px"
        height="150px"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            className="rounded-full bg-[#18bd7c] p-2 font-bold text-black"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
