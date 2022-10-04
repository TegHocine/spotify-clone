import { genres } from '../assets/constante'
import { Header, Error } from '../components'
import Loader from '../components/Loader'
import SongCard from '../components/SongCard'

import { useDispatch, useSelector } from 'react-redux'
import { selectGenreListId } from '../redux/features/playerSlice'
import { useGetSongsByGenreQuery } from '../redux/service/shazamCore'
const Discover = () => {
  const dispatch = useDispatch()
  const { genreListId } = useSelector((state: any) => state.player)
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || 'POP'
  )
  console.log(data)
  if (isFetching) return <Loader title='Loading songs...' />
  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <Header name={`Discover`} />
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'POP'}
          className='bg-gray-900 text-gray-300 p-2 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8 w-full pb-10'>
        {data?.map((song: any, i: number) => (
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

export default Discover
