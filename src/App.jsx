import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

export default function App() { 

  const MATERIAS = [
    { nome: "Matemática", emoji: "📐"},
    { nome: "Português", emoji: "📚"},
    { nome: "História", emoji: "🏛️"},
    { nome: "Ciências", emoji: "🧪"},
  ];

  const [nome, setNome] = useState(""); //texto
  const [nota, setNota] = useState(10);  //número
  const [aprovado, setAprovado] = useState(true); //boolean
  const [materia, setMateria] = useState(MATERIAS[0]); //objeto

  const diminuirNota = () => {
    const novaNota = Math.max(0, nota - 1);
    setNota(novaNota);
    setAprovado(novaNota >= 6);
  }

  const recuperar = () => {
    setNota(10);
    setAprovado(true);
  }

  const pct = nota / 10;
  const corBarra = pct > 0.6 ? "#5DCAA5" : pct > 0.4 ? "#EF9F27" : "#E24B4A";

  return (
    <>
      <main>
        <section>

          <img src={logo} alt="Logo" className="logo" />

          <div className="thumb">
            {aprovado ? materia.emoji : "❌"}
          </div>

          <input
            type="text"
            className='nome'
            placeholder='Nome do Aluno'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <div className="status">
            <p>Status</p>
            <p>Aprovado (boolean)</p>
            <span>{aprovado ? "APROVADO" : "REPROVADO"}</span>
            <span>{aprovado ? "true" : "false"}</span>
          </div>

          <p id='pontosVida'>Nota: {nota}/10</p>
          <div className="barra" style={{background: corBarra}}></div>

          <button className='BTcura' onClick={diminuirNota}>
            Receber Dano
          </button>

          <button className='BTcura' onClick={recuperar}>
            Curar
          </button>

          <div className="classes">
            <button onClick={() => setMateria(MATERIAS[0])}>📐 Matemática</button>
            <button onClick={() => setMateria(MATERIAS[1])}>📚 Português</button>
            <button onClick={() => setMateria(MATERIAS[2])}>🏛️ História</button>
            <button onClick={() => setMateria(MATERIAS[3])}>🧪 Ciências</button>
          </div>

        </section>
      </main>
    </>
  )
}