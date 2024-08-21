// aplicacao do js para o sorteia numeros 
// selecionar uma id do HTML e pega o valor que vai ser digitado por isso value para pegar o valor dentro do input 
function sortear(){
                    // numero inteiro,documento, selecionar o elemento
    let quantidade= parseInt(document.getElementById('quantidade').value);
    let de= parseInt(document.getElementById('de').value);
    let ate= parseInt(document.getElementById('ate').value);
    // lista vazia para colocar os numeros
    let Sorteados= [];
    // variavel numero 
    let numero;
    // repeticao comeca em 0 tem que ser menor que quantidade e cada vez soma mais 1
    for(let i=0; i<quantidade; i++){
        // atribui valor para a variavel numero 
        numero=ObterNumeroAleatorio(de,ate);
        // nesta parte ele nao vai deixar aparecer o mesmo numero duas o mais vezes mantendo o loop ate ser diferente 
        // vai incluir dento da variavel numero do ponto (de) (ate) e mostrar na tela o valor
        while(Sorteados.includes(numero)){
            numero=ObterNumeroAleatorio(de,ate);
        }
        // adicionar valores para a lista que esta vazia a (Array)
        Sorteados.push(numero);
    }
    // nesta parte ele pega o valor e atribui na variavel resultado
    let resultado=document.getElementById('resultado');
    // nesta parte ele coloca o valor dentro do html para apresentar na tela 
    resultado.innerHTML=`<label class="texto__paragrafo">Números sorteados: ${Sorteados}</label>`;
    alterarStatusBotao();
}

//gera numero aleatorio  com valores (de) (ate)
function ObterNumeroAleatorio(min,max){
    // retorna o valor para a variavel e usa este comanado Math.floor para aparecer valor inteiro 
    return Math.floor(Math.random() * (max-min+1))+min;
}
// nesta funcao habilita o botao reiniciar nao vai funcionar apenas com este codigo mas ja habilita para comecar sem mexer no html e css
function alterarStatusBotao(){
    let botao =document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
// botao reniciar funciona desta forma e colocamos valores vazio '' para declarar que nada existe
function reiniciar(){
    document.getElementById('quantidade').value='';
    document.getElementById('de').value='';
    document.getElementById('ate').value='';
    document.getElementById('resultado').innerHTML=`<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}