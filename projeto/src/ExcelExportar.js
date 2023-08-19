import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const ExcelExportar = ({ dadosDoArquivo, nomeDoArquivo }) => {
  const tipo =
    "application/vnd.openxmlformats-officedocument.sheet;charset=UTF-8";
  const extensaoArquivo = ".xlsx";

  async function exportarParaExcel() {
    const ws = XLSX.utils.json_to_sheet(dadosDoArquivo);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const bufferExcel = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const arquivo = new Blob([bufferExcel], { type: tipo });
    FileSaver.saveAs(arquivo, nomeDoArquivo + extensaoArquivo);
  }

  return (
    <button
      type="button"
      onClick={() => exportarParaExcel()}
      style={{
        margin: "1rem",
        padding: "1rem",
        backgroundColor: "#696969",
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
