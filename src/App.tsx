import { useGetTopChartsQuery } from './redux/service/shazamCore'
function App() {
  const { data, isFetching, error } = useGetTopChartsQuery()
  console.log(data)
  return <h1 className='text-3xl font-bold underline'>Hello world!</h1>
}

export default App
