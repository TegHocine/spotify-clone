import SongBar from './SongBar'

type RelatedSongsProps = {
  data?: any
  artistId?: string
  isPlaying?: boolean
  activeSong?: any
  handlePauseClick?: () => void
  handlePlayClick?: (arg0: any, arg1: number) => void
}

const RelatedSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick
}: RelatedSongsProps) => (
  <div className='flex flex-col'>
    <h1 className='font-bold text-3xl text-white'>Related Songs:</h1>

    <div className='mt-6 w-full flex flex-col'>
      {data?.map((song: any, i: number) => (
        <SongBar
          key={`${artistId}-${song.key}-${i}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
)

export default RelatedSongs
