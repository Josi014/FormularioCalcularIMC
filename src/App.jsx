import "./App.css";
import { useState } from "react";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [clImc, setClImc] = useState(null);
  const [erro, setErro] = useState(false);

  const calcularIMC = (e) => {
    e.preventDefault();

    if (!peso || !altura) {
      setErro(true);
      alert("Preencha todos os campos!");
      return;
    } else if (peso <= 0 || altura <= 0) {
      setErro(true);
      alert("Peso e altura devem ser maior que 0!");
      return;
    }

    setErro(false);

    const imcCalculado = peso / (altura * altura);

    if (imcCalculado < 18.5) {
      setClImc({ texto: "MAGREZA", cor: "orange" });
    } else if (imcCalculado < 25) {
      setClImc({ texto: "NORMAL", cor: "green" });
    } else if (imcCalculado < 30) {
      setClImc({ texto: "SOBREPESO", cor: "blue" });
    } else if (imcCalculado < 40) {
      setClImc({ texto: "OBESIDADE", cor: "orange" });
    } else {
      setClImc({ texto: "OBESIDADE GRAVE", cor: "red" });
    }
    setImc(imcCalculado.toFixed(2));

  }

  return (
    <div>
      <h1 contentEditable>IMC</h1>
      <form onSubmit={calcularIMC}>
        <input type="number" placeholder="Digite seu peso" value={peso} onChange={e => setPeso(e.target.value)} style={{border: erro ? "2px solid red" : "1px solid #ccc"}}/>
        <input type="number" placeholder="Digite sua altura" value={altura} onChange={e => setAltura(e.target.value)} style={{border: erro ? "2px solid red" : "1px solid #ccc"}}/>
        <button type="submit">Calcular</button>
      </form>
      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p style={{color: clImc.cor }}>{clImc.texto}</p>
        </div>
      )}
    </div>
  );
}

export default App;
