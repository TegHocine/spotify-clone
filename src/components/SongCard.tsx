type SongCardProps = {
  song: any
}
const songCard = ({ song }: SongCardProps) => {
  const { images, subtitle, title } = song
  return (
    <div className='bg-teal-900/80 p-3 rounded-lg shadow-md w-56'>
      <img
        src={images?.coverart}
        alt={title}
        className=' rounded-lg object-cover'
      />
      <div className='py-2' />
      <h1 className='text-xl font-semibold text-white truncate'>{title}</h1>
      <h4 className='truncate text-gray-400'>{subtitle}</h4>
    </div>
  )
}

export default songCard
