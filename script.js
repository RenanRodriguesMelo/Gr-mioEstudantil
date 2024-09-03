const chapas = [];
const votos = {};

document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    const nomeChapa = document.getElementById('nomeChapa').value;
    const numeroChapa = document.getElementById('numeroChapa').value;
    
    chapas.push({ nome: nomeChapa, numero: numeroChapa });
    votos[numeroChapa] = 0;

    atualizarChapas();
});

function atualizarChapas() {
    const select = document.getElementById('chapaSelect');
    select.innerHTML = '<option value="">Selecione uma chapa</option>';

    chapas.forEach(chapa => {
        const option = document.createElement('option');
        option.value = chapa.numero;
        option.textContent = `${chapa.nome} - ${chapa.numero}`;
        select.appendChild(option);
    });
}

document.getElementById('form-votacao').addEventListener('submit', function(e) {
    e.preventDefault();
    const numeroChapa = document.getElementById('chapaSelect').value;
    
    if (numeroChapa) {
        votos[numeroChapa]++;
        atualizarResultados();
    }
});

function atualizarResultados() {
    const listaResultados = document.getElementById('lista-resultados');
    listaResultados.innerHTML = '';

    chapas.forEach(chapa => {
        const li = document.createElement('li');
        li.textContent = `${chapa.nome} (${chapa.numero}) - ${votos[chapa.numero]} votos`;
        listaResultados.appendChild(li);
    });
}