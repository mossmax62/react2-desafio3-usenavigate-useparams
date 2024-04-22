import { useNavigate } from 'react-router-dom'
import { PokemonesContext } from '../context/PokemonesContext'
import { useContext } from 'react'

const Pokemones = () => {
  const { pokemones } = useContext(PokemonesContext)
  const navigate = useNavigate()
  const handleChange = (e) => {
    console.log(e.target.value)
    navigate(`/pokemon/${e.target.value}`)
  }

  return (
    <>
      <h2>Ver detalle de un Pokemon</h2>

      <select name='pokemones' id='pokemones' onChange={handleChange} className='form-select'>
        <option value=''>Selecciona tu pokemon</option>
        {
            pokemones.map((pokemon, index) => (
              <option key={index} value={pokemon.name}>{pokemon.name}</option>
            ))
          }
      </select>

    </>
  )
}

export default Pokemones
