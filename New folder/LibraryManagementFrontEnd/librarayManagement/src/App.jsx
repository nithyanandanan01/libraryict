import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NavbarComponent />

    <Routes>
      <Route path='/getBook' element={<HomepageComponent />}></Route>
      <Route path='/addBook' element={<Booking />}></Route>
      <Route path='/getAuthors' element={<Authors />}></Route>

    </Routes>
  </div>
  )
}

export default App
