import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})

  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    console.log(data)
    setPokemon(data)
  }
  const handleBack = () => {
    window.history.back()
  }

  useState(() => {
    getPokemon()
  }, [])

  return (
    <>

      <div>Pokemon</div>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{pokemon.name}</h5>
          <img src={pokemon.sprites?.front_shiny} alt={pokemon.name} />
        </div>
        <div className='card-footer'>
          <h6>Abilities</h6>
          <ul>
            {
                pokemon.abilities?.map((ability, index) => (
                  <li key={index}>{ability.ability.name}</li>
                ))
                }
          </ul>
        </div>

        <button className='btn btn-success' type='button' onClick={handleBack}>Volver</button>
      </div>

    </>
  )
}

export default Pokemon
