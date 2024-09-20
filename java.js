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

//Verifica se o CEP é válido. Esse código tem a função de verificar se o que foi digitado são apenas números.
const Enumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do CEP. Esse código tem a função de verificar se o tamanho do código possui 8 digitos.
const cepValido = (cep) => cep.length == 8 && Enumero(cep);

// Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;    //Coloca o valor de logradouro da API dentro do campo rua do formulario
    document.getElementById('bairro').value = endereco.bairro;    //Coloca o valor de bairro da API dentro do campo bairro do formulario
    document.getElementById('cidade').value = endereco.localidade;    //Coloca o valor de localidade da API dentro do campo cidade do formulario
    document.getElementById('estado').value = endereco.uf;  //Coloca o valor de uf da API dentro do campo estado do formulario


}