import { genres } from '../assets/constante'
import { Header } from '../components'
import Loader from '../components/Loader'
import SongCard from '../components/SongCard'
import { useGetSongsByGenreQuery } from '../redux/service/shazamCore'
const Discover = () => {
  const { data, isFetching, error } = useGetSongsByGenreQuery('POP')

  if (isFetching) return <Loader title='Loading songs...' />
  console.log(data)
  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <Header name={`Discover`} />
        <select
          value={'pop'}
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
          <SongCard key={song?.key} song={song} />
        ))}
      </div>
    </div>
  )
}

export default Discover
