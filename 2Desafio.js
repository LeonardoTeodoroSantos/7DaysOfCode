function desafio2(){
    let nome = prompt("Qual o seu nome?");
    while (nome == null || nome ==''){
        alert('Erro, digite seu nome!');
        nome = prompt("Qual o seu nome?");
    }

    let idade = prompt("Quantos anos você tem?");
    while (idade == null || idade ==''){
        alert('Erro, digite sua idade!');
        idade = prompt("Quantos anos você tem?");
    }

    let linguagem = prompt("Qual linguagem de programação você está estudando?");
    while (linguagem == null || linguagem ==''){
        alert('Erro, digite a linguagem que esta estudando!');
        linguagem = prompt("Qual linguagem esta estudando?");
    }
    
    alert(`Olá ${nome} , você tem ${idade} anos e já está aprendendo ${linguagem}!`);
    let resposta = prompt(`Você gosta de estudar ${linguagem} ? Responda com o número 1 para SIM ou 2 para Não`);

    if (resposta == 1) {
        alert("Muito bom! Continue estudando e você terá muito sucesso!")
        }   
        
    if (resposta == 2) {
            alert("Ahh que pena... Já tentou aprender outras lingagens?")
    }
    alert('FIM');
}