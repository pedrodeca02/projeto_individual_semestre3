import { useState } from 'react'
import Cabecalho from './componentes/Cabecalho'
import CadastroPet from './pages/CadastroPet'
import ListaPets from './pages/ListaPets'
import styles from './App.module.css'

function App() {
  const [pagina, setPagina] = useState('cadastro')

  // Por enquanto a lista fica no front.
  // Depois ela será preenchida pelo GET da API.
  const [pets, setPets] = useState([])

  function adicionarPet(pet) {
    setPets([...pets, { ...pet, id: pets.length + 1 }])
  }

  return (
    <>
      <Cabecalho pagina={pagina} setPagina={setPagina} />

      <main className={styles.conteudo}>
        {pagina === 'cadastro' ? (
          <CadastroPet adicionarPet={adicionarPet} />
        ) : (
          <ListaPets pets={pets} />
        )}
      </main>
    </>
  )
}

export default App
