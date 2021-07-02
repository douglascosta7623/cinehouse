const catalogo = require('./catalogo')

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz
  }

  catalogo.push(novoFilme)
  console.log('Filme adicionado com sucesso!')
}

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz
  }

  catalogo.push(novoFilme)
  console.log('Filme adicionado com sucesso!')
}

function buscarFilme(codigo) {
  const filmeProcurado = catalogo[codigo - 1]
  if (!filmeProcurado) {
    return console.log('Código não encontrado')
  }
  console.log(filmeProcurado)
}

buscarFilme(2)

function alterarStatusEmCartaz(codigo, novoStatus) {
  const filmeProcurado = catalogo[codigo - 1]

  if (!filmeProcurado) {
    return console.log('Código não encontrado')
  }

  catalogo[codigo - 1].emCartaz = novoStatus

  console.log('Filme alterado!')
}

let listarFilme = () => {
  for (i = 0; i < catalogo.length; i++) {
    let filme = catalogo[i]
    //console.table("-".repeat(12));
    console.table(filme)
    //console.table("Ano: " + filme.anoDoLancamento);
    //console.table("Elenco: " + filme.atores);
  }
}

listarFilme(catalogo)

const listarFilmesEmCartaz = () => {
  const disponiveis = []
  for (let i = 0; i < catalogo.length; i++) {
    catalogo[i].emCartaz
      ? buscarFilme(catalogo[i].codigo)
      : 'O filme não esta em cartaz'
  }
}

const listarFilmesEmCartazOutro = () => {
  const disponiveis = []
  catalogo.forEach((filme, index) => {
    filme.emCartaz
      ? buscarFilme(catalogo[i].codigo)
      : 'O Filme não esta em cartaz'
  })
}

console.table(catalogo)
