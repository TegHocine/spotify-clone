import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useGetSongsBySearchQuery } from '../redux/service/shazamCore'
import { Error, SongCard, Loader, Header } from '../components'

const Search = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)

  const songs = data?.tracks?.hits.map((song: any) => song.track)

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />

  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <Header name={`Showing results for ${searchTerm}`} />

      <div className='flex flex-wrap sm:justify-start justify-center gap-8 mt-10'>
        {songs.map((song: any, i: number) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
