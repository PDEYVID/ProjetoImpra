
//Funcao adiciona uma nova linha na tabela
function adicionaLinha(idTabela) {

    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2); 
    celula1.innerHTML = 'produto '+ Math.floor((Math.random() * 100) + 1); 
    celula2.innerHTML =  Math.floor((Math.random() * 100) + 1); 
    celula3.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
}

// funcao remove uma linha da tabela
function removeLinha(linha) {
  var i=linha.parentNode.parentNode.rowIndex;
  document.getElementById('tbl').deleteRow(i);
}            
    