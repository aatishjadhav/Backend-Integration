import Hotels from './components/Hotels'
import HotelByTitle from './components/HotelByTitle'
import AddNewHotel from './components/AddNewHotel'

function App() {
  
  return (
    <>
      <AddNewHotel/>
      <Hotels />
      <HotelByTitle title="New Hotel1"/>
    </>
  )
}

export default App
