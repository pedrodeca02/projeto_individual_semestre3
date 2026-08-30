import { useState } from 'react'
import CardPet from '../componentes/CardPet'
import styles from './ListaPets.module.css'
import axios from 'axios'
export function ListaPets() {
  const [pets, setPets] = useState([])

  function buscarPets() {
    axios.get("http://localhost:8080/pets")
      .then((response) => {
        setPets(response.data)
      })
  }

  const petsMapeados = pets.map((pet) =>
    <CardPet pet={pet} />
  )

  return (

    <section>
      <div className={styles.titulo}>
        <h2>Pets cadastrados</h2>
        <p>Visualize os animais cadastrados no sistema.</p>
      </div>

      <button className={styles.botaoListar} onClick={buscarPets}>
        Listar Pets
      </button>

      <div className={styles.lista}>
        {petsMapeados}
      </div>

    </section>

  )
}
