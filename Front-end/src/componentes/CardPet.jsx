import styles from './CardPet.module.css'

function CardPet({ pet }) {
  return (
    <article className={styles.card}>
      <h3>{pet.nome}</h3>

      <p><strong>Espécie:</strong> {pet.especie}</p>
      <p><strong>Raça:</strong> {pet.raca}</p>
      <p><strong>Sexo:</strong> {pet.sexo}</p>
      <p><strong>Idade:</strong> {pet.idade} ano(s)</p>
      <p><strong>Peso:</strong> {pet.peso} kg</p>
      <p><strong>Tutor:</strong> {pet.nomeTutor}</p>
    </article>
  )
}

export default CardPet
