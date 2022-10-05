import React from 'react'

import { ArtistCard, Error, Loader, Header } from '../components'
import { useGetTopChartsQuery } from '../redux/service/shazamCore'

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery({ skip: false })

  if (isFetching) return <Loader title='Loading artists...' />

  if (error) return <Error />

  return (
    <div className='flex flex-col'>
      <Header name='Top artists' />

      <div className='flex flex-wrap sm:justify-start justify-center gap-8 mt-10'>
        {data?.map((track: any) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  )
}

export default TopArtists
