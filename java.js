'use strict'; //ativa o modo restrito
// Código para consumo de API da ViaCEP
// https://viacep.com.br

// Limpar consulta do form já realizada
const limparformulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairo').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//Verifica se o CEP é válido
const Enumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do CEP
const cepValido = (cep) => cep.length == 8 && Enumero(cep);
