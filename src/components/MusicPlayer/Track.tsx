type Track = {
  isPlaying: boolean
  isActive: boolean
  activeSong: any
}

const Track = ({ isPlaying, isActive, activeSong }: Track) => (
  <div className='flex-1 flex items-center justify-start w-[50%]'>
    <div
      className={`hidden sm:flex h-16 w-16 mr-4  items-center justify-center`}>
      <img
        src={activeSong?.images?.coverart}
        alt='cover art'
        className={`rounded-full w-full ${
          isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''
        }`}
      />
    </div>
    <div className='w-full'>
      <p className='truncate text-white font-bold text-lg'>
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className='truncate text-gray-300'>
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
)

export default Track
