import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiSearch } from 'react-icons/hi'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    navigate(`/search/${searchTerm}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className='p-2 text-gray-400 focus-within:text-gray-600 flex items-center'>
      <label htmlFor='search-field' className='bg-transparent  py-3 gap-2 '>
        <HiSearch aria-hidden='true' className='h-6 w-6' />
      </label>
      <input
        type='search-field'
        id='search-field'
        autoComplete='off'
        placeholder='Search...'
        className='flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  )
}

export default SearchBar
