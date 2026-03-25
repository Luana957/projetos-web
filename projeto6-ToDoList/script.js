function adicionarTarefa() {
  const input = document.getElementById('tarefaInput');
  const lista = document.getElementById('lista');

  if (input.value !== '') {
    const li = document.createElement('li'); // Cria o item
    li.innerHTML = `${input.value} <button onclick="this.parentElement.remove()">❌</button>`;
    lista.appendChild(li); // Adiciona na tela
    input.value = ''; // Limpa o campo
  }
}