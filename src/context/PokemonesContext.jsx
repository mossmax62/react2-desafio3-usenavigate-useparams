import { createContext, useEffect, useState } from 'react'

export const PokemonesContext = createContext()

const PokemonesContextProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([])
  const getPokemones = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()
    setPokemones(data.results)
  }
  useEffect(() => {
    getPokemones()
  }, [])
  return (
    <PokemonesContext.Provider value={{ pokemones }}>
      {children}
    </PokemonesContext.Provider>
  )
}
export default PokemonesContextProvider
