import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SearchBar, Sidebar, MusicPlayer, TopPlay } from './components'
import {
  AroundYou,
  ArtistDetails,
  Discover,
  SongDetails,
  TopArtists,
  TopCharts,
  Search
} from './pages'

const App = () => {
  const { pathname } = useLocation()

  console.log(pathname)
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  const { activeSong } = useSelector((state: any) => state.player)
  return (
    <div className='relative flex bg-gradient-to-r from-gray-900 to-teal-900 text-gray-400'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <SearchBar />
        <div className='px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex'>
          <div className='flex-1 h-fit pb-40'>
            <Routes>
              <Route path='/' element={<Discover />} />
              <Route path='/top-artists' element={<TopArtists />} />
              <Route path='/top-charts' element={<TopCharts />} />
              <Route path='/around-you' element={<AroundYou />} />
              <Route path='/artists/:id' element={<ArtistDetails />} />
              <Route path='/songs/:songid' element={<SongDetails />} />
              <Route path='/search/:searchTerm' element={<Search />} />
            </Routes>
          </div>
          <div className='hidden xl:flex xl:sticky relative top-0 h-fit'>
            <TopPlay />
          </div>
        </div>
      </div>
      {activeSong?.title && (
        <div className='absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-teal-900 backdrop-blur-lg rounded-t-3xl z-10 '>
          <MusicPlayer />
        </div>
      )}
    </div>
  )
}

export default App
