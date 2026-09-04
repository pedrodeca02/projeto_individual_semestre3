import { useState } from 'react'
import { Cabecalho } from './componentes/Cabecalho'
import { CadastroPet } from './pages/CadastroPet'
import { ListaPets } from './pages/ListaPets'
import styles from './App.module.css'

function App() {

  const [pagina, setPagina] = useState('cadastro')
  let conteudo
  if (pagina === 'cadastro') {
    conteudo = <CadastroPet />
  } else {
    conteudo = <ListaPets />
  }

  return (
    <>
      <Cabecalho
        pagina={pagina}
        setPagina={setPagina}
      />

      <main className={styles.conteudo}>
        {conteudo}
      </main>
    </>
  )
}

export default App