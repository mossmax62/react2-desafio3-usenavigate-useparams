import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Pokemon from './views/Pokemon'

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/pokemones'
          element={<Pokemones />}
        />
        <Route
          path='pokemon/:id'
          element={<Pokemon />}
        />
      </Routes>
    </div>
  )
}
export default App
