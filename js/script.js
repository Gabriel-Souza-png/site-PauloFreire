const locais = [

  {
    nome: "Praça",

    descricao:
      "A praça mudou bastante ao longo dos anos, com uma mudança na área verde do local.",

    antiga: "img/praca-antiga.png",

    atual: "img/praca-atual.png"
  },

  {
    nome: "Nova Era",

    descricao:
      "Um dos pontos mais chamativos do bairro, onde tem restaurante, academia, lotérica e uma escola na parte de trás (colégio Nova Era).",

    antiga: "img/novaera-antiga.png",

    atual: "img/novaera-atual.png"
  },

  {
    nome: "Mercado Da Praça",

    descricao:
        "O mercado é um dos pontos mais tradicionais do bairro, e é possível perceber a mudança na estrutura do local.",

    antiga: "img/mercado-antiga.png",

    atual: "img/mercado-atual.png"
  }

];

function mostrarLocal(index){
    document.getElementById("titulo-local").innerText = locais[index].nome;
    document.getElementById("texto-local").innerText = locais[index].descricao;
    document.getElementById("img-antiga").src = locais[index].antiga;
    document.getElementById("img-hoje").src = locais[index].atual;
}