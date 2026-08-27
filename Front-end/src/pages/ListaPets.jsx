import { useState } from 'react'
import CardPet from '../componentes/CardPet'
import styles from './ListaPets.module.css'

function ListaPets({ pets }) {
  // Já deixado preparado para quando o GET for conectado.
  const [carregando] = useState(false)
  const [erro] = useState('')

  if (carregando) {
    return <p>Carregando pets...</p>
  }

  if (erro) {
    return <p className={styles.erro}>{erro}</p>
  }

  return (
    <section>
      <div className={styles.titulo}>
        <h2>Pets cadastrados</h2>
        <p>Visualize os animais cadastrados no sistema.</p>
      </div>

      {pets.length === 0 ? (
        <div className={styles.vazio}>
          <p>Nenhum pet cadastrado ainda.</p>
        </div>
      ) : (
        <div className={styles.lista}>
          {pets.map((pet) => (
            <CardPet key={pet.id} pet={pet} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ListaPets
