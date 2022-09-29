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
