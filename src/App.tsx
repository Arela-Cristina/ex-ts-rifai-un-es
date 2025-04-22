import './App.css'

function App() {

  type Politicians = {
    id: number,
    name: string,
    age: number,
    username: string,
    email: string,
    adress: {
      street: string,
      city: string,
      zip: number
    },
    phone: string,
    website: string,
    ocupation: string,
    hobbies: string[],

  }


  async function fetchPoliticians(): Promise<Politicians[]> {
    try {

      const data = await fetch(`https://boolean-spec-frontend.vercel.app/freetestapi/users`);
      if (!data.ok) {
        throw new Error(`Errore nella chiamata`)
      }
      const response: Politicians[] = await data.json()
      return response
    }
    catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
      console.error(error)
      return []
    }

  }


  return (
    <>
      <div>Hello </div>
    </>
  )
}

export default App
