/* 
Descricao :
	Exibir lista de livros inseridos respectivamente com
  autor e o link para acesso da página de compra na web.
Aluno :
	Antônio Carlos Ramos Filho
Data :
	10/07/2021
*/

let input = document.querySelectorAll('input')
let botaoDeSalvar = document.querySelector('.save')
let listagemDeLivros = document.querySelector('ul')

botaoDeSalvar.addEventListener('click', function (e){
  let livro={
    titulo: input[0].value,
    autor: input[1].value,
    link: input[2].value,
    lido: input[3].checked,
    id: CriarID(),
  }
  AdicionarLivro(livro)
  e.preventDefault()
})

function CriarID(){
  return Math.floor(Math.random() * 300)
}

function AdicionarLivro(livro){
  let li = criarTAGLI(livro)
  listagemDeLivros.appendChild(li)
  input[0].value = ''
  input[1].value = ''
  input[2].value = ''
  input[3].checked = false
}

function criarTAGLI(livro){
  let li = document.createElement('li')
  li.setAttribute('id', `${livro.id}`)
  if (livro.lido){
    li.classList.add('lido')
  }

  let span = document.createElement('span')
  span.innerHTML = (livro.titulo + ' - ' + livro.autor)
  let div = document.createElement('div')
  let botaoDeComprar = document.createElement('button')
  botaoDeComprar.classList.add('btn-buy')
  botaoDeComprar.innerHTML = `<a class="material-icons" href=${livro.link}> shopping_cart </a>`
  let botaoDeApagar = document.createElement('button')
  botaoDeApagar.classList.add('delete')
  botaoDeApagar.innerHTML = '<span class="material-icons"> delete </span>'
  botaoDeApagar.setAttribute('onclick', 'apagar(' + livro.id + ')')
  div.appendChild(botaoDeComprar)
  div.appendChild(botaoDeApagar)
  li.appendChild(span)
  li.appendChild(div)
  return li
}

function apagar(idLivro){
  let confirm = window.confirm('Deseja realmente apagar este livro?')
  if (confirm) {
    let li = document.getElementById('' + idLivro + '')
    if (li) {
      listagemDeLivros.removeChild(li)
    }
  }
}

function checkEmptyList(){
  if (!document.querySelector('ul').childNodes.length) {
    document.querySelector('ul').innerHTML = 'Adicione um livro abaixo!';
  }
}

checkEmptyList()