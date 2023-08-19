import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const ExcelExportar = ({ dadosJson, nomeDoArquivo }) => {
  const tipo =
    "application/vnd.openxmlformats-officedocument.sheet;charset=UTF-8";
  const extensaoArquivo = ".xlsx";

  async function exportarParaExcel() {
    const dadosPlanilha = XLSX.utils.json_to_sheet(dadosJson);
    const planilha = { Sheets: { data: dadosPlanilha }, SheetNames: ["data"] };
    const buffer = XLSX.write(planilha, { bookType: "xlsx", type: "array" });
    const arquivo = new Blob([buffer], { type: tipo });
    FileSaver.saveAs(arquivo, nomeDoArquivo + extensaoArquivo);
  }

  return (
    <button
      type="button"
      onClick={() => exportarParaExcel()}
      style={{
        margin: "1rem",
        padding: "1rem",
        backgroundColor: "#505050",
        color: "inherit",
        border: "0px",
        borderRadius: "3px",
      }}
    >
      Baixar imagem
    </button>
  );
};

export default ExcelExportar;
