let dados = {
    titulo:'',
    ano:0,
    categoria:'',
    link:''
}
const atualizarDados = () => {

    dados = {
        titulo:document.getElementById('titulo').value,
        link:document.getElementById('link').value,
        categoria:document.getElementById('categoria').value,
        ano:document.getElementById('ano').value
    }
}

const listaItem = () => {
const item = document.createElement('tr')
const id = new Date().getTime();
item.insertAdjacentHTML('beforeEnd', ` 
    <td>${dados.titulo}</td>
    <td>${dados.categoria}</td>
    <td>${dados.ano}</td>
    <td class="text-right">
    <button class="btn btn info" data-ulr="${dados.link}">Acessar</button>
    <button class="btn btn danger"data-id="${id}" >Excluir</button>
    </td>`
    );
    return item;
};

const cadastrar = () => {
document.getElementById('lista_filme').appendChild(listaItem());
dados = {};
}
