import { Routes, Route } from 'react-router-dom'
import { Sidebar } from './components'
import { SearchBar } from './components'
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
  return (
    <div className='bg-gradient-to-r from-gray-900 to-teal-900 min-h-screen flex text-gray-400'>
      <Sidebar />
      <div className='px-4 w-full'>
        <SearchBar />
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
    </div>
  )
}

export default App
