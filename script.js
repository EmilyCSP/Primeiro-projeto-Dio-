function calcularNivel() {
    // Obtendo os valores do formulário
    let nomeDoHeroi = document.getElementById('nome').value;
    let XP = parseInt(document.getElementById('XP').value);

    // Validando se a entrada é um número
    if (isNaN(XP)) {
        alert("Por favor, insira um valor numérico para a experiência do herói.");
        return;
    }

    // Definindo variáveis
    let nivel = XP;

    // Estrutura de decisão
    if (XP < 1000) {
        nivel = "Ferro";
    } else if (XP <= 2000) {
        nivel = "Bronze";
    } else if (XP <= 5000) {
        nivel = "Prata";
    } else if (XP <= 7000) {
        nivel = "Ouro";
    } else if (XP <= 8000) {
        nivel = "Platina";
    } else if (XP <= 9000) {
        nivel = "Ascendente";
    } else if (XP <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibindo resultado na página
    document.getElementById('nivelresultado').innerText = `O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}`;
}
