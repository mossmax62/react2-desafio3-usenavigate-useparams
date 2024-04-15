import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div >
      <Link to='/'> Home </Link> | <Link to='/favoritos'> Favoritos </Link> | Max Mussuto 2024
      </div>
    </nav>
  )
}
export default Navbar
