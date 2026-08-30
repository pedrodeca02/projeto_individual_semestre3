import { useState } from 'react'
import axios from 'axios'

import styles from './CadastroPet.module.css'

export function CadastroPet() {

  const [nome, setNome] = useState('')
  const [especie, setEspecie] = useState('')
  const [raca, setRaca] = useState('')
  const [sexo, setSexo] = useState('')
  const [idade, setIdade] = useState('')
  const [peso, setPeso] = useState('')
  const [nomeTutor, setNomeTutor] = useState('')

  const [mensagem, setMensagem] = useState('')

  function cadastrarPet() {

    if (nome === '' || especie === '' || raca === '' || sexo === '' 
      || idade === '' || peso === '' || nomeTutor === ''
    ) {
      setMensagem('Preencha todos os campos!')
      return
    }

    if (Number(idade) < 0) {
      setMensagem('A idade não pode ser negativa!')
      return
    }

    if (Number(peso) <= 0) {
      setMensagem('O peso deve ser maior que zero!')
      return
    }

    const novoPet = {
      nome: nome,
      especie: especie,
      raca: raca,
      sexo: sexo,
      idade: Number(idade),
      peso: Number(peso),
      nomeTutor: nomeTutor
    }

    axios.post("http://localhost:8080/pets", novoPet)
      .then((response) => {
        console.log(response)
        setMensagem('Pet cadastrado com sucesso!')
      })

  }

  return (

    <section>

      <div className={styles.titulo}>
        <h2>Cadastrar Pet</h2>
        <p>Preencha os dados do animal.</p>
      </div>

      <div className={styles.formulario}>
        <label>
          Nome
          <input
            type="text"
            placeholder="Ex: Thor"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />
        </label>

        <label>
          Espécie
          <input
            type="text"
            placeholder="Ex: Cachorro"
            value={especie}
            onChange={(evento) => setEspecie(evento.target.value)}
          />
        </label>

        <label>
          Raça
          <input
            type="text"
            placeholder="Ex: Labrador"
            value={raca}
            onChange={(evento) => setRaca(evento.target.value)}
          />
        </label>

        <label>
          Sexo
          <input
            type="text"
            placeholder="Ex: Macho"
            value={sexo}
            onChange={(evento) => setSexo(evento.target.value)}
          />
        </label>

        <label>
          Idade
          <input
            type="number"
            placeholder="Ex: 4"
            value={idade}
            onChange={(evento) => setIdade(evento.target.value)}
          />
        </label>

        <label>
          Peso
          <input
            type="number"
            placeholder="Ex: 32.5"
            value={peso}
            onChange={(evento) => setPeso(evento.target.value)}
          />
        </label>

        <label>
          Nome do Tutor
          <input
            type="text"
            placeholder="Ex: Pedro"
            value={nomeTutor}
            onChange={(evento) => setNomeTutor(evento.target.value)}
          />
        </label>

        <button onClick={cadastrarPet}>
          Cadastrar
        </button>
        <p className={
          mensagem === 'Pet cadastrado com sucesso!'
            ? styles.mensagemSucesso
            : styles.mensagemErro
        }>
          {mensagem}
        </p>

      </div>

    </section>

  )

}