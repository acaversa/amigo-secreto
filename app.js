//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

/**
 * Adicione um novo amigo à lista de amigos..
 * Valide se o nome não está vazio antes de adicioná-lo e atualize a lista visual.
 */
function insereAmigo() {
  let nomeAmigo = document.getElementById("amigo").value;

  if (nomeAmigo.trim() === "") {
    alert("Por favor, insira um nome");
  } else {
    amigos.push(nomeAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

/**
 * Atualiza a exibição da lista de amigos, criando elementos para cada amigo.
 */
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

/**
 * Mostre aleatoriamente um amigo da sua lista de amigos.
 * Verifique se a lista não está vazia antes de realizar o sorteio.
 */
function sortearAmigo() {
  let qtdeAmigos = amigos.length;
  if (qtdeAmigos === 0) {
    alert("Por favor insira um nome antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * qtdeAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}
