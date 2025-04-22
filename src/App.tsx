import './App.css'
import { useEffect, useState } from 'react';


type Character = {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;

}

type ApiResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
};

function App() {

  async function fetchCharacters(): Promise<Character[]> {
    try {

      const data = await fetch(`https://rickandmortyapi.com/api/character`);

      if (!data.ok) {
        throw new Error(`Errore nella chiamata`)
      }
      const response: ApiResponse = await data.json()
      const characters: Character[] = response.results
      console.log('response', characters)
      return characters

    }
    catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
      console.error(error)
      return []
    }

  }


  const [character, setCharacter] = useState<Character | null>(null)

  const [query, setQuery] = useState('')
  console.log(query)

  useEffect(() => {
    fetchCharacters()
  }, [])


  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} />
    </>
  )
}

export default App
