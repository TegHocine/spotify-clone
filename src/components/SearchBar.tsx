import { HiSearch } from 'react-icons/hi'
const SearchBar = () => {
  return (
    <label
      htmlFor='search'
      className='bg-transparent flex items-center py-3 gap-2'>
      <HiSearch className='h-6 w-6' />
      <input
        type='text'
        placeholder='Search...'
        className='bg-transparent outline-none focus:border-b-2 focus:border-gray-900 py-1'
      />
    </label>
  )
}

export default SearchBar
