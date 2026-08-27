import { useState } from 'react'
import styles from './CadastroPet.module.css'

function CadastroPet({ adicionarPet }) {
  const [nome, setNome] = useState('')
  const [especie, setEspecie] = useState('')
  const [raca, setRaca] = useState('')
  const [sexo, setSexo] = useState('')
  const [idade, setIdade] = useState('')
  const [peso, setPeso] = useState('')
  const [nomeTutor, setNomeTutor] = useState('')

  const [carregando, setCarregando] = useState(false)
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')

  function cadastrar(event) {
    event.preventDefault()

    setMensagem('')
    setErro('')

    if (
      !nome ||
      !especie ||
      !raca ||
      !sexo ||
      !idade ||
      !peso ||
      !nomeTutor
    ) {
      setErro('Preencha todos os campos.')
      return
    }

    const novoPet = {
      nome,
      especie,
      raca,
      sexo,
      idade: Number(idade),
      peso: Number(peso),
      nomeTutor,
    }

    setCarregando(true)

    // Nesta etapa o cadastro é local.
    // Depois este ponto será trocado pelo POST para a API.
    adicionarPet(novoPet)

    setNome('')
    setEspecie('')
    setRaca('')
    setSexo('')
    setIdade('')
    setPeso('')
    setNomeTutor('')

    setCarregando(false)
    setMensagem('Pet cadastrado com sucesso!')
  }

  return (
    <section className={styles.container}>
      <div className={styles.titulo}>
        <h2>Cadastrar Pet</h2>
        <p>Preencha os dados abaixo para cadastrar um animal.</p>
      </div>

      <form className={styles.formulario} onSubmit={cadastrar}>
        <label>
          Nome
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Ex.: Thor"
          />
        </label>

        <label>
          Espécie
          <input
            type="text"
            value={especie}
            onChange={(event) => setEspecie(event.target.value)}
            placeholder="Ex.: Cachorro"
          />
        </label>

        <label>
          Raça
          <input
            type="text"
            value={raca}
            onChange={(event) => setRaca(event.target.value)}
            placeholder="Ex.: Labrador"
          />
        </label>

        <label>
          Sexo
          <select
            value={sexo}
            onChange={(event) => setSexo(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </label>

        <label>
          Idade
          <input
            type="number"
            min="0"
            value={idade}
            onChange={(event) => setIdade(event.target.value)}
            placeholder="Ex.: 4"
          />
        </label>

        <label>
          Peso
          <input
            type="number"
            min="0"
            step="0.1"
            value={peso}
            onChange={(event) => setPeso(event.target.value)}
            placeholder="Ex.: 12.5"
          />
        </label>

        <label>
          Nome do tutor
          <input
            type="text"
            value={nomeTutor}
            onChange={(event) => setNomeTutor(event.target.value)}
            placeholder="Ex.: João"
          />
        </label>

        <button type="submit" disabled={carregando}>
          {carregando ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>

      {mensagem && <p className={styles.sucesso}>{mensagem}</p>}
      {erro && <p className={styles.erro}>{erro}</p>}
    </section>
  )
}

export default CadastroPet
