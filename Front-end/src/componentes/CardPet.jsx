import styles from './CardPet.module.css'

export function CardPet(props) {
  return (
    <article className={styles.card}>
      <h3>{props.pet.nome}</h3>

      <p><strong>Espécie:</strong> {props.pet.especie}</p>
      <p><strong>Raça:</strong> {props.pet.raca}</p>
      <p><strong>Sexo:</strong> {props.pet.sexo}</p>
      <p><strong>Idade:</strong> {props.pet.idade} ano(s)</p>
      <p><strong>Peso:</strong> {props.pet.peso} kg</p>
      <p><strong>Tutor:</strong> {props.pet.nomeTutor}</p>
    </article>
  )
}
