import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar justify-content-between'>
      <i className='bi bi-geo-alt-fill h1' />

      <div className='h1'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'activo' : undefined)}> Home </NavLink>
        | <NavLink to='/pokemones' className={({ isActive }) => (isActive ? 'activo' : undefined)}> Pokemones </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
