const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A primeira capital brasileira foi?",
        alternativas: [
            {
                texto: "Salvador",
                afirmacao: "Acertou! Salvador foi a primeira capital brasileira em 1549."
            },
            {
                texto: "São Paulo",
                afirmacao: "Errou! São Paulo NUNCA foi capital do Brasil."
            },
            {
                texto: "Rio de Janiero",
                afirmacao: "Errou! O Rio somente foi capital do Brasil em 1763"
            },
        ]
    },
    {
        enunciado: "Qual era a casa(Familia) de Dom Pedro II",
        alternativas: [
            {
                texto: "Casa de Bragança",
                afirmacao: "Acertou! Dom Pedro II era da familia de Bragancia."
            },
            {
                texto: "Casa de Bourbon",
                afirmacao: "Errou! Bourbon pertenceu a familia real espanhola."
            }
        ]
    },
    {
        enunciado:"Em 15 de novembro de 1889 o Brasil deixava a mornarquia e se plocamava a república do Brasil. Logo, quem foi o primeiro presidente do Brasil república?",
        alternativas: [
            {
                texto: "Deodoro da Fonseca",
                afirmacao: "Acertou! Deodoro foi o primeiro presidente brasileiro com seu governo sendo marcado por revoltas e crise."
            },
            {
                texto: "Hermes da Fonseca",
                afirmacao: "Errou! Hermes so seria presidente em 1910 - 1914."
            },
            {
                texto: "Floriano Peixoto",
                afirmacao: "Errou! Floriano foi o segundo presidente do Brasil."
            }
        ]
    },
    {
        enunciado: "Junto com a proclamação da república, Minas Gerais e São Paulo fizeram um acordo, chamado de acordo café com leite, uma união entre oligarquia. Logo, qual dos dois era o café e qual era o leite?",
        alternativas: [
            {
                texto: "São Paulo era produtor de leite e Minas Gerais de Café.",
                afirmacao: "Errou! São Paulo era protudor de café e Minas Gerais de leite."
            },
            {
                texto: "São Paulo era produtor de café e Minas Gerais de leite.",
                afirmacao: "Acertou! São Paulo era o maior protudor de café e Minas Gerais de leite."
            }
        ]
    },
    {
        enunciado: "O que foi a batalha das toninhas?",
        alternativas: [
            {
                texto: "Foi uma das maiores batalhas aérias com a participação de pilotos brasileiros em solo francês durante 1917.",
                afirmacao: "Errou! O Brasil deve sim participação na primeira guerra mundial e chegou a enviar pilotos para combater os alemães, mas nunca houve uma grande batalha."
            },
            {
                texto: "Foi quando o encouraçado brasileiro (São Paulo), enfrentou ,junto com a marinha britanica, o navio alemão Kaiser em 1944.",
                afirmacao: "Errou! O Brasil participou da segunda guerra mundial, mas nunca exestiu um navio Kaiser."
                
            },
            {
                texto: "Foi quando a FEB(Força Espedicionaria Brasilera), entrou em combate na Itália, contra o exercito alemão e italiano pela capital Roma.",
                afirmacao: "Errou! A FEB lutou na Itália, mas a maior batalha brasileira foi contra Monte Castelo e Roma já era americana antes mesmo da FEB chegar na Itália"

            },
            {
                texto: "Foi quando a marinha do Brasil, confundiu um cardume de toninhas e acabaram por abrir fogo contra os animais. Matando 200 toninhas.",
                afirmacao: "Acertou! Parece mentira, mas a Marinha do Brasil, durante a primeira guerra mundial, cofundiu um cardume de toninhas e acabaram por abrir fogo contra elas. Logo a então 'batalha' foi nomeada e reticularizada por esse momento."

            },
        ]
    },
    {
        enunciado: "Estou saindo da vida, para entrar para a historia!. Quem disse essa frase?",
        alternativas: [
            {
                texto: "Foi falada pelo soladado brasileiro Matheus Henrique da Costa, que em vez de se render decidiu lutar até a ultima gota de sangue contra os alemães em 1945.",
                afirmacao: "Errou! Ele nunca existiu."
            },
            {
                texto: "Foi falada pelo então presidente Getúlio Vargas.",
                afirmacao: "Acertou! Em sua carta de suicidio, ele escrevou a famosa frase."
                
            },
            {
                texto: "Foi quando o então imperador brasileiro, Dom pedro II, se alistou como comandade e disse a frase como uma forma mais filosofica que séria.",
                afirmacao: "Errou! Dom pedro II, de fato quis se alistar como voluntario da pátria, mas ele nunca disse a frase."

            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Respostas:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();