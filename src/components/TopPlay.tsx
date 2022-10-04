import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'

import PlayPause from './PlayPause'
import Header from './Header'

import { playPause, setActiveSong } from '../redux/features/playerSlice'
import { useGetTopChartsQuery } from '../redux/service/shazamCore'

import 'swiper/css'
import 'swiper/css/free-mode'

type TopChartCardProp = {
  song: any
  i: number
  isPlaying: boolean
  activeSong: any
  handlePauseClick: () => void
  handlePlayClick: () => void
}
const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick
}: TopChartCardProp) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-gray-400 ${
      activeSong?.title === song?.title ? 'bg-gray-400' : 'bg-transparent'
    } py-2 px-4 rounded-lg cursor-pointer mb-1`}>
    <h3 className='font-semibold text-base text-white mr-3'>{i + 1}.</h3>
    <div className='flex-1 flex flex-row justify-between items-center'>
      <img
        className='w-16 h-16 rounded-lg'
        src={song?.images?.coverart}
        alt={song?.title}
      />
      <div className='flex-1 flex flex-col justify-center mx-3'>
        <Link to={`/songs/${song.key}`}>
          <p className='text-lg font-semibold text-white'>{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className='text-base text-gray-300 mt-1'>{song?.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
)

const TopPlay = () => {
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state: any) => state.player)
  const { data } = useGetTopChartsQuery({ skip: false })
  const topPlays = data?.slice(0, 5)

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song: any, i: number) => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }

  return (
    <div className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[350px] max-w-full flex flex-col h-fit'>
      <div className='w-full flex flex-col mb-8'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>Top Artists</h2>
          <Link to='/top-artists'>
            <p className='text-gray-300 text-base cursor-pointer'>See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView='auto'
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className='mt-4'>
          {topPlays?.slice(0, 5).map((artist: any) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: '20%', height: 'auto' }}
              className='shadow-lg rounded-full animate-slideright'>
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img
                  src={artist?.images?.background}
                  alt='Name'
                  className='rounded-full w-full object-cover'
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
          <Header name='Top Charts' />
          <Link to='/top-charts'>
            <p className='text-gray-300 text-base cursor-pointer'>See more</p>
          </Link>
        </div>

        <div className='mt-2 flex flex-col gap-1'>
          {topPlays?.map((song: any, i: number) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopPlay
