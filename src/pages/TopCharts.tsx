import { useSelector } from 'react-redux'

import { Error, Header, Loader, SongCard } from '../components'
import { useGetTopChartsQuery } from '../redux/service/shazamCore'

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery({ skip: false })
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)

  if (isFetching) return <Loader title='Loading Top Charts' />

  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <Header name='Discover Top Charts' />
      <div className='flex flex-wrap sm:justify-start justify-center gap-8 mt-10'>
        {data.map((song: any, i: number) => (
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

export default TopCharts
