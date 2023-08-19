import "./App.css";
import ExcelExportar from "./ExcelExportar";

function App() {
  const DadosDoArquivo = [
    {
      nome: "Pedro",
      idade: 10,
    },
    {
      nome: "João",
      idade: 20,
    },
    {
      nome: "Mariana",
      idade: 3,
    },
    {
      nome: "Julano",
      idade: 69,
    },
  ];
  const NomeDoArquivo = "PlanilhaTeste";

  return (
    <div className="App">
      <header className="App-header">
        <div>POC para criação e download de planilha</div>
        <ExcelExportar
          dadosDoArquivo={DadosDoArquivo}
          nomeDoArquivo={NomeDoArquivo}
        />
      </header>
    </div>
  );
}

export default App;
