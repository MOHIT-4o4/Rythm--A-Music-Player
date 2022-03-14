import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { shuffle } from 'lodash'
import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { playlistIdState, playlistState } from '../Atoms/PlayListAtom'
import useSpotify from '../Hooks/useSpotify'
import Songs from '../Components/Songs'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
]


export default function Center() {
  const { data: session } = useSession()
  const spotifyApi = useSpotify()
  const [color, setColor] = useState(null)
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [playlistId])

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body)
      })
      .catch((err) => console.log('Something went wrong!', err))
  }, [spotifyApi, playlistId])
  console.log(playlist)

  function handleClick(e) {
    if (e.target.id === 'hide') {
      document.getElementById('user').style.display = 'none'
      document.getElementById('logout').style.display = 'flex'
    } else {
      e.stopPropagation()
      document.getElementById('logout').style.display = 'none'
      document.getElementById('user').style.display = 'flex'
      console.log('person logget out')
    }
  }

  return (
    <div className="h-screen flex-grow select-none overflow-y-scroll text-white scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div className="cursor-pointer flex-col items-center space-x-3 rounded-full bg-black p-1 pr-2 text-white opacity-80 hover:opacity-100">
          <div id="user" className="flex items-center space-x-3 text-white">
            <img
              draggable="false"
              className="h-10 w-10 rounded-full opacity-100"
              src={session?.user.image}
            />
            <h2>{session?.user.name}</h2>
            <ChevronLeftIcon
              className="h-5 w-5 rounded-full hover:bg-gray-800"
              onClick={handleClick}
              id="hide"
            />
          </div>

          <div
            id="logout"
            className="hidden flex-wrap items-center space-x-3 p-2"
            onClick={() => signOut()}
          >
            <h2>Logout</h2>
            <ChevronRightIcon
              className="h-5 w-5 rounded-full hover:bg-gray-800"
              onClick={handleClick}
            />
          </div>
        </div>
      </header>
      <section
        className={`flex h-80 items-end space-x-7 bg-gradient-to-b to-black  p-5 ${color} text-white`}
      >
        <img
          className="h-44 w-44 shadow-2xl"
          src={playlist?.images?.[0]?.url}
          alt=""
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">
            {playlist?.name}{' '}
          </h1>
        </div>
      </section>
      <div className="mb-20">
        <Songs />
      </div>
    </div>
  )
}
