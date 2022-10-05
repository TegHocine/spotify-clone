import { useNavigate } from 'react-router-dom'

const ArtistCard = ({ track }: { track: any }) => {
  const navigate = useNavigate()
  return (
    <div
      className='bg-teal-800/60 p-3 rounded-lg shadow-md w-52 '
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img
        alt='song_img'
        src={track?.images?.coverart}
        className='w-full rounded-lg'
      />
      <p className='mt-4 font-semibold text-lg text-white truncate'>
        {track?.subtitle}
      </p>
    </div>
  )
}

export default ArtistCard
