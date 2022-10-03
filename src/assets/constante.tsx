import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiHashtag,
  HiOutlinePhotograph
} from 'react-icons/hi'

type sidebarItemsProps = {
  title: string
  icon: JSX.Element
}[]

export const sidebarItems: sidebarItemsProps = [
  {
    title: 'Discover',
    icon: <HiOutlineHome />
  },
  {
    title: 'Around You',
    icon: <HiOutlinePhotograph />
  },
  {
    title: 'Top Artiste',
    icon: <HiOutlineUserGroup />
  },
  {
    title: 'Top Charts',
    icon: <HiHashtag />
  }
]

type genresProps = {
  title: string
  value: string
}[]

export const genres: genresProps = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' }
]
