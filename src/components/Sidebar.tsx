import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup
} from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

import { logo } from '../assets'

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag }
]

const NavLinks = ({ handleClick }: { handleClick?: () => void }) => {
  const param = useParams()
  console.log(param)
  return (
    <div className='mt-10'>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className='flex gap-1.5 justify-start items-center text-sm font-medium my-8 hover:text-teal-500'
          onClick={() => handleClick && handleClick()}
          end>
          <link.icon className='h-6 w-6' />
          {link.name}
        </NavLink>
      ))}
    </div>
  )
}

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      {/* desktop */}
      <div className='hidden md:flex flex-col  py-10 px-4 w-60 bg-gray-900/40'>
        <img
          src={logo}
          alt='logo'
          className='w-full h-14 object-contain'
        />
        <NavLinks />
      </div>
      {/* mobile */}
      <div className='absolute md:hidden block top-6 right-3'>
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className='w-6 h-6 mr-2 text-white'
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className='w-6 h-6 mr-2 text-white'
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3  backdrop-blur-lg z-10 p-6 md:hidden transition-all duration-200 bg-gray-900/40 ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}>
        <img
          src={logo}
          alt='logo'
          className='w-full h-14 object-contain'
        />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default Sidebar
