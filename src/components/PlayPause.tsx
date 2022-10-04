import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

type PlayPauseProps = {
  isPlaying: boolean
  activeSong: { [key: string]: any }
  song: { [key: string]: any }
  handlePause: () => void
  handlePlay: () => void
}

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay
}: PlayPauseProps) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className='text-gray-300' onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className='text-gray-300' onClick={handlePlay} />
  )

export default PlayPause
