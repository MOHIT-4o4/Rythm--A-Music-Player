import logo from '../public/rythmlogo.png'
import Image from 'next/image'
import { SearchIcon, LibraryIcon } from '@heroicons/react/outline'
import { HomeIcon, HeartIcon, PlusCircleIcon } from '@heroicons/react/solid'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../Atoms/PlayListAtom'
import useSpotify from '../Hooks/useSpotify'

export default function Sidebar(props) {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  console.log('You picked Playlist >>>', playlistId)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  const handleC = () => {
    props.showCenter()
  }
  const handleS = () => {
    props.showSearch()
  }
  const handleL = () => {
    props.showLibrary()
  }
  const handleCP = () => {
    props.showPlaylist()
  }
  const handleLS = () => {
    props.showLiked()
  }

  return (
    <div className="text-bold hidden select-none flex-wrap border-r border-gray-900 p-5 pb-36 text-xs text-gray-400 scrollbar-hide sm:max-w-[12rem] md:inline-flex lg:max-w-[15rem] lg:text-base">
      <div className="flex-grow-0 space-y-3">
        <Image
          src={logo}
          className=""
          width={120}
          height={30}
          draggable="false"
        />
        <hr className="boder-t-[0.1px] space-x-2 border-black" />
        <button
          className="flex items-center space-x-2 font-semibold hover:text-white"
          onClick={handleC}
        >
          <HomeIcon className="sidebar-container h-5 w-5" />
          <p>Home</p>
        </button>
        <button
          className="flex items-center space-x-2 font-semibold hover:text-white"
          onClick={handleS}
        >
          <SearchIcon className="sidebar-container h-5  w-5" />
          <p>Search</p>
        </button>
        <button
          className="flex items-center space-x-2 font-semibold hover:text-white"
          onClick={handleL}
        >
          <LibraryIcon className="sidebar-container h-5  w-5" />
          <p>Library</p>
        </button>
        <hr className="boder-t-[0.1px] border-black" />
        <button
          className="flex items-center space-x-2 font-semibold hover:text-white"
          onClick={handleCP}
        >
          <PlusCircleIcon className="sidebar-container h-5  w-5" />
          <p>Create Playlist</p>
        </button>
        <button
          className="flex items-center space-x-2 font-semibold text-blue-500 hover:text-white"
          onClick={handleLS}
        >
          <HeartIcon className="sidebar-container h-5  w-5" />
          <p>Liked Songs</p>
        </button>
        <hr className="boder-t-[0.1px] border-gray-900 " />
        <br />
      </div>

      <div
        onClick={handleCP}
        className="h-screen space-y-4 overflow-y-scroll scroll-auto scrollbar-hide"
      >
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className="cursor-pointer items-center truncate p-1 hover:text-white "
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}
