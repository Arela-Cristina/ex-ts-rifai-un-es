import './App.css'
import { useEffect, useState, useMemo, useCallback } from 'react';
import Card from "./components/Card"
import SearchForm from './components/SearchForm';


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

  const [character, setCharacter] = useState<Character[]>([])

  const [query, setQuery] = useState('')
  // console.log(query)

  async function fetchCharacters(): Promise<void> {
    try {

      const data = await fetch(`https://rickandmortyapi.com/api/character`);

      if (!data.ok) {
        throw new Error(`Errore nella chiamata`)
      }
      const response: ApiResponse = await data.json()
      const characters: Character[] = response.results
      // console.log('response', characters)
      setCharacter(characters)

    }
    catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
      console.error(error)

    }

  }

  const filteredElements = useMemo(() => character.filter(el =>
    el.name.toLowerCase().includes(query.toLowerCase()) ||
    el.species.toLowerCase().includes(query.toLowerCase())

  ), [character, query])


  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    fetchCharacters()
  }, [])


  return (
    <>
      <SearchForm
        value={query}
        onChange={handleSearchChange}
      />

      <section>
        {filteredElements.map(el =>
          <Card
            key={el.id}
            id={el.id}
            image={el.image}
            name={el.name}
            species={el.species}
            status={el.status} />
        )}
      </section>
    </>
  )
}

export default App
