import styles from './Cabecalho.module.css'

function Cabecalho({ pagina, setPagina }) {
  return (
    <header className={styles.cabecalho}>
      <div>
        <h1>🐾 PetShop</h1>
        <p>Cadastro e visualização de pets</p>
      </div>

      <nav className={styles.menu}>
        <button
          className={pagina === 'cadastro' ? styles.ativo : ''}
          onClick={() => setPagina('cadastro')}
        >
          Cadastrar
        </button>

        <button
          className={pagina === 'lista' ? styles.ativo : ''}
          onClick={() => setPagina('lista')}
        >
          Visualizar
        </button>
      </nav>
    </header>
  )
}

export default Cabecalho
