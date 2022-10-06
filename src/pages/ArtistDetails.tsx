import { useParams } from 'react-router-dom'
import { useGetArtistDetailsQuery } from '../redux/service/shazamCore'
import { DetailsHeader, Error, Loader } from '../components'
import RelatedSongs from '../components/RelatedSongs'
import { useSelector } from 'react-redux'

const ArtistDetails = () => {
  const { id: artistId } = useParams()
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  const {
    data: artistData,
    isFetching,
    error
  } = useGetArtistDetailsQuery(artistId)
  console.log({ artistData, artistId })
  if (isFetching) return <Loader title='Loading artist details...' />

  if (error) return <Error />
  return (
    <div className='flex flex-col'>
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
}

export default ArtistDetails
