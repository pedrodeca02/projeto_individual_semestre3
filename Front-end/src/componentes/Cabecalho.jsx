import styles from './Cabecalho.module.css'

export function Cabecalho(props) {

  function abrirCadastro() {
    props.setPagina('cadastro')
  }

  function abrirLista() {
    props.setPagina('lista')
  }

  return (
    <header className={styles.cabecalho}>
      <div>
        <h1>🐾 PetShop</h1>
        <p>Cadastro e visualização de pets</p>
      </div>

      <nav className={styles.menu}>
        <button onClick={abrirCadastro}>
          Cadastrar
        </button>

        <button onClick={abrirLista}>
          Visualizar
        </button>

      </nav>
    </header>
  )
}