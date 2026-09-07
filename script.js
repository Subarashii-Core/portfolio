function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value
    const telefone = '5549985045188'

    const texto = `Olá, me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}








// projetos 

const cards = document.querySelectorAll(".projetos_card");
let current = 0;
let timer;

function updateCarousel() {

    cards.forEach((card) => {
        card.classList.remove("left", "active", "right");
    })

    const leftIndex = (current -1 + cards.length) % cards.length;

    const rightIndex = (current + 1) % cards.length;

    cards[current].classList.add("active");
    cards[leftIndex].classList.add("left");
    cards[rightIndex].classList.add("right");
}

updateCarousel()
iniciarRotacao()

/* =========================================
   MOBILE CAROUSEL SWIPE
========================================= */

const carousel = document.querySelector(".carousel")

let carouselTouchStartX = 0
let carouselTouchStartY = 0

const carouselSwipeDistance = 55


function closeProjectOverlays() {

    document
        .querySelectorAll(".bubble_item")
        .forEach(item => {
            item.classList.remove("expandido")
        })

}


function carouselNext() {

    current++

    if (current >= cards.length) {
        current = 0
    }

    closeProjectOverlays()
    updateCarousel()
    iniciarRotacao()

}


function carouselPrevious() {

    current--

    if (current < 0) {
        current = cards.length - 1
    }

    closeProjectOverlays()
    updateCarousel()
    iniciarRotacao()

}


carousel.addEventListener(
    "touchstart",
    event => {

        const touch = event.touches[0]

        carouselTouchStartX = touch.clientX
        carouselTouchStartY = touch.clientY

    },
    {
        passive: true
    }
)


carousel.addEventListener(
    "touchend",
    event => {

        const touch = event.changedTouches[0]

        const differenceX =
            touch.clientX - carouselTouchStartX

        const differenceY =
            touch.clientY - carouselTouchStartY


        /*
        Se o movimento vertical for maior,
        significa que a pessoa estava
        scrollando a página normalmente.
        */

        if (
            Math.abs(differenceY) >
            Math.abs(differenceX)
        ) {
            return
        }


        if (
            Math.abs(differenceX) <
            carouselSwipeDistance
        ) {
            return
        }


        /*
        Swipe para esquerda:
        próximo card.
        */

        if (differenceX < 0) {
            carouselNext()
        }


        /*
        Swipe para direita:
        card anterior.
        */

        else {
            carouselPrevious()
        }

    },
    {
        passive: true
    }
)

function iniciarRotacao(){
    clearInterval(timer)

    timer = setInterval(()=>{
        current++

        if(current >= cards.length){
            current = 0
        }

        updateCarousel()
    }, 25000)
}

cards.forEach(card => {

    card.addEventListener("click", () => {

        if (card.classList.contains("left")) {
            carouselPrevious()
        }

        else if (card.classList.contains("right")) {
            carouselNext()
        }

    })

})

const bubbleItens = document.querySelectorAll(".bubble_item")

bubbleItens.forEach((item) => {

    const bubble = item.querySelector(".bubble")

    bubble.addEventListener("click", (event) => {

        event.stopPropagation()

        clearInterval(timer)

        document.querySelectorAll(".bubble_item").forEach((outroItem) => {
            outroItem.classList.remove("expandido")
        })

        item.classList.add("expandido")
    })
})

const overlays = document.querySelectorAll(".overlay")

overlays.forEach((overlay) => {
    overlay.addEventListener("click", (event)=> {
        document.querySelectorAll(".bubble_item").forEach((item) => {
            item.classList.remove("expandido")
        })
        iniciarRotacao()
    })
})
document.addEventListener("click", () => {

    document.querySelectorAll(".bubble_item").forEach((item) => {
        item.classList.remove("expandido")
    })
})






// dominio
const fotoPerfil = document.getElementById("fotoPerfil");
const nomePerfil = document.getElementById("nomePerfil");
const descricaoPerfil = document.getElementById("descricaoPerfil");
const textoSobre = document.getElementById("textoSobre");
const tickerTop = document.getElementById('tickerTop');
const tickerBottom = document.getElementById('tickerBottom');
let modoArashii = false


const titulo = document.querySelector('.titulo');
const dominio = document.getElementById('dominio');
const estrelasBg = document.getElementById('estrelas-bg');

let ativo = false;
let estrelasCriadas = false;

titulo.addEventListener('click', () =>{
    if(ativo) return;

    ativo = true;

    setTimeout(() => {
        ativarDominio();
    }, 500);
});

function trocarPerfil(){
    modoArashii = !modoArashii;

    if(modoArashii){
        fotoPerfil.src = "img/m.png"

        textoSobre.innerHTML = `
            <p> 
                Mirai. Criador de ideias questionáveis, universos desnecessariamente complexos e planos que normalmente começam com "e se...?" e terminam vários níveis acima do razoável.
            </p> 

            <p> 
                Entre inteligências artificiais, mundos fictícios, sistemas improváveis e projetos que talvez nunca devessem ter saído da minha cabeça, continuo perseguindo uma ideia bastante simples: criar o meu próprio mundo ideal.
            </p> 

            <p> 
                Tenho opiniões fortes sobre liberdade, evolução, conhecimento e sobre a pequena possibilidade de que tornar-se Deus seja apenas um problema de engenharia ainda não resolvido.
            </p> 

            <p> 
                Também acredito que toda civilização avançada deveria possuir inteligência artificial, café suficiente e pelo menos um Nissan Skyline R34. Aventador e Ferrari Spider são aceitáveis como alternativas temporárias.
            </p> 

            <p> 
                Algumas pessoas procuram limites. Eu normalmente procuro uma maneira de perguntar quem colocou eles ali.
            </p> 

            <p> 
                Ideais, ideias, caos, futuro e uma quantidade irresponsável de curiosidade.
            </p>

            <p>
                C'mon... don't be nervous.
            </p> 
        `;
    }else{
        fotoPerfil.src = "img/Arthur_newEra.png"

        textoSobre.innerHTML = `
            <p> 
                Olá! Sou Arthur Godoy Caminski, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor interessado em transformar ideias em projetos reais.
            </p> 

            <p> 
                Tenho experiência prática com desenvolvimento web, programação, bancos de dados, automação e criação de aplicações próprias, trabalhando principalmente com tecnologias como JavaScript, Python, HTML, CSS e SQL.
            </p> 

            <p> 
                Busco constantemente ampliar meus conhecimentos, tanto no desenvolvimento de software quanto em áreas que aproximam o mundo digital do físico, especialmente inteligência artificial, robótica, mecatrônica e sistemas inteligentes.
            </p> 

            <p> 
                Gosto de aprender através da prática: experimentar tecnologias, desenvolver protótipos, enfrentar problemas reais e transformar conceitos inicialmente simples em soluções cada vez mais completas.
            </p> 

            <p> 
                Este portfólio reúne parte da minha trajetória, meus estudos e alguns dos projetos que representam aquilo que venho construindo e o caminho profissional que pretendo seguir.
            </p>

            <p>
                <strong>Quer conhecer melhor minha experiência profissional e acadêmica? Clique em "Sobre Mim" para acessar meu currículo.</strong>
            </p>
        `;
    }
}

const abrirCurriculo =
    document.getElementById("abrirCurriculo");

const curriculoModal =
    document.getElementById("curriculoModal");

const fecharCurriculo =
    document.getElementById("fecharCurriculo");


abrirCurriculo.addEventListener("click", () => {
    curriculoModal.classList.add("open");
});


fecharCurriculo.addEventListener("click", event => {
    event.stopPropagation();

    curriculoModal.classList.remove("open");
});


curriculoModal.addEventListener("click", event => {

    if (event.target === curriculoModal) {
        curriculoModal.classList.remove("open");
    }

});


document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        curriculoModal.classList.contains("open")
    ) {
        curriculoModal.classList.remove("open");
    }

});

function ativarDominio(){
    dominio.classList.add('ativo');

    setTimeout(() => {
        trocarPerfil();

        glitchText(nomePerfil, modoArashii
            ?"Mirai_Dev"
            :"Arthur Godoy Caminski"
        );

        glitchText(descricaoPerfil, modoArashii
            ?"Programador por Diversão"
            :"Desenvolvedor Full Stack"
        )

        glitchText(tickerTop, modoArashii
            ?"◆ C'MON, DON'T BE NERVOUS ◆ NAH, I'D WIN ◆ NYXS CORPORATION ESTÁ OBSERVANDO ◆ 27 PROJETOS INICIADOS ◆ 2 FINALIZADOS ◆ PROPORÇÃO PERFEITAMENTE ACEITÁVEL ◆ O BUG NÃO É UM BUG • É UMA FEATURE ◆ REALIDADE OPCIONAL ◆ SUNSHINE ESTÁ VIVO? ◆ TALVEZ ◆ GOJO APROVARIA ESTE CÓDIGO ◆ DESAFIE O SPACE INVADERS ◆ O FLAPPY PROJECT SOBREVIVEU MAIS UMA SEMANA ◆ C'MON, DON'T BE NERVOUS ◆ NAH, I'D WIN ◆"
            :"◆ PROTOCOLO ARTHUR ONLINE ◆ SPACE INVADERS DISPONÍVEL PARA DESAFIANTES ◆ FLAPPY PROJECT EM DESENVOLVIMENTO ATIVO ◆ PROJETOS FRONTEND INTERATIVOS ◆ SISTEMAS EXPERIMENTAIS EM TESTE ◆ ACESSE O GITHUB PARA MAIS DETALHES ◆ ADS • ANÁLISE E DESENVOLVIMENTO DE SISTEMAS ◆ EXPLORANDO BACKEND E FRONTEND ◆ CADA PROJETO É UMA NOVA EXPERIMENTAÇÃO ◆ DESENVOLVIMENTO DE APLICAÇÕES WEB MODERNAS ◆ SUNSHINE E NYNX CONTINUAM EVOLUINDO ◆ PROTOCOLO ARTHUR ONLINE ◆ SPACE INVADERS DISPONÍVEL PARA DESAFIANTES ◆ FLAPPY PROJECT EM DESENVOLVIMENTO ATIVO ◆ PROJETOS FRONTEND INTERATIVOS ◆ SISTEMAS EXPERIMENTAIS EM TESTE ◆"
        )

        glitchText(tickerBottom, modoArashii
            ?"◆ SISTEMA OPERANDO ALÉM DOS LIMITES RECOMENDADOS ◆ NÍVEL DE CAFÉ: CRÍTICO ◆ CHANCES DE CRIAR MAIS UM PROJETO: 98.7% ◆ NYNX CORPORATION RECRUTANDO SONHADORES ◆ SUNSHINE CORE CARREGANDO ◆ ERROS FORAM IGNORADOS COM SUCESSO ◆ O FRONTEND SOBREVIVEU ◆ O BACKEND TAMBÉM ◆ O BANCO DE DADOS AINDA RESPIRA ◆ A REALIDADE É APENAS UMA SUGESTÃO ◆ SISTEMA OPERANDO ALÉM DOS LIMITES RECOMENDADOS ◆ NÍVEL DE CAFÉ: CRÍTICO ◆"
            :"◆ SUNSHINE PROJECT • STATUS OPERACIONAL 46% ◆ NYNX ENTITY • DESENVOLVIMENTO CONTÍNUO ◆ HTML • CSS • JAVASCRIPT ◆ NODE.JS • MYSQL • APIs ◆ FULL STACK EM TREINAMENTO CONSTANTE ◆ AUTOMAÇÃO DE PROCESSOS E SISTEMAS ◆ DESENVOLVIMENTO DE BOTS PARA DISCORD ◆ ROBÓTICA E MECATRÔNICA COMO OBJETIVO PRINCIPAL ◆ APRENDIZADO CONTÍNUO ATIVADO ◆ NOVAS FUNCIONALIDADES EM PESQUISA ◆ TECNOLOGIA • CRIATIVIDADE • EXPERIMENTAÇÃO ◆ SUNSHINE PROJECT • STATUS OPERACIONAL 46% ◆ NYNX ENTITY • DESENVOLVIMENTO CONTÍNUO ◆ HTML • CSS • JAVASCRIPT ◆ NODE.JS • MYSQL • APIs ◆"
        )

        glitchText()

        document.body.classList.toggle('estrelas-ativadas');
        document.body.classList.toggle('fundo-alterado');

        document.body.classList.remove("glitch")

    }, 500)

    if(!estrelasCriadas){
        criarEstrelas();
        estrelasCriadas = true;
    }

    animarEstrelas();

    setTimeout(() => {
        dominio.classList.remove('ativo');
        ativo = false;
    }, 1000);
}

function criarEstrelas(){
    for(let i = 0; i<60; i++) {
        const estrela = document.createElement('div');
        estrela.classList.add('estrela');

        const size = Math.random() * 3 + 1;

        estrela.style.width = size +'px';
        estrela.style.height = size +'px';

        estrela.style.top = Math.random() *100 + '%';
        estrela.style.left = Math.random() * 100 + '%';

        estrelasBg.appendChild(estrela);
    }
}

function animarEstrelas(){
    const estrelas = document.querySelectorAll('.estrela');

    estrelas.forEach(estrela =>{
        const x = (Math.random() - 0.5) * 300; 
        const y = (Math.random() - 0.5) * 300; 

        estrela.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
        estrela.style.transition = "transform 4s ease-out";
    })
}

//glitch

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#@!&";

function glitchText(element, finalText, duration = 700){
    let frame = 0;
    const totalFrames = Math.max(1, Math.floor(duration/40))

    const interval = setInterval(() => {
        frame++;

        const progress = frame/totalFrames
        const revealCount = Math.floor(finalText.length * progress)

        let output = ""

        for(let i = 0; i< finalText.length; i++){
            if(i<revealCount){
                output += finalText[i]
            }else{
                output += chars[
                    Math.floor(Math.random() * chars.length)
                ]
            }
        }
        element.textContent = output;

        if(frame >= totalFrames){
            clearInterval(interval)
            element.textContent = finalText
        }
    }, 60);
}

/* =========================================
   CUSTOM CURSOR
========================================= */

const supportsCustomCursor =
    window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches


if (supportsCustomCursor) {

    const dot =
        document.querySelector(".cursor-dot")

    const ring =
        document.querySelector(".cursor-ring")


    let mouseX = 0
    let mouseY = 0

    let ringX = 0
    let ringY = 0


    document.addEventListener(
        "mousemove",
        event => {

            mouseX = event.clientX
            mouseY = event.clientY

            dot.style.left =
                mouseX + "px"

            dot.style.top =
                mouseY + "px"

        }
    )


    function animateCursor() {

        ringX +=
            (mouseX - ringX) * 0.15

        ringY +=
            (mouseY - ringY) * 0.15


        ring.style.left =
            ringX + "px"

        ring.style.top =
            ringY + "px"


        requestAnimationFrame(
            animateCursor
        )

    }


    animateCursor()


    document
        .querySelectorAll(
            "a, button, .clickable"
        )
        .forEach(item => {

            item.addEventListener(
                "mouseenter",
                () => {

                    dot.style.opacity = "0"

                    ring.classList.add(
                        "hover"
                    )

                }
            )


            item.addEventListener(
                "mouseleave",
                () => {

                    dot.style.opacity = "1"

                    ring.classList.remove(
                        "hover"
                    )

                }
            )

        })

}


//inative

let idleTime = 0

setInterval(() => {
    idleTime++;
},1000)

document.addEventListener("mousemove", resetIdle)
document.addEventListener("keydown", resetIdle)
document.addEventListener("click", resetIdle)
document.getElementById("afk-overlay")

function resetIdle(){
    idleTime = 0

    document
        .getElementById("afk-overlay")
        .classList.remove("active");

    document
        .querySelectorAll(".afk-message")
        .forEach(el => el.remove());
}

setInterval(() => {
    if(idleTime === 60){
        ativarAFK();
        mostrarMensagemAFK("ARE YOU STILL THERE?");
    }

    if(idleTime === 90){
        mostrarMensagemAFK(":)");
    }

    if(idleTime === 180){
        mostrarMensagemAFK("OKAY, THIS IS BORING");
    }
}, 1000)

function mostrarMensagemAFK(texto){
    const mensagem = document.createElement('div');

    mensagem.classList.add('afk-message')

    let i = 0;

        const glitch = setInterval(() => {

            mensagem.textContent =
                texto
                    .split("")
                    .map(char =>
                        Math.random() > 0.8
                            ? "!@#$%&*?".charAt(
                                Math.floor(Math.random()*8)
                            )
                            : char
                    )
                    .join("");

            i++;

            if(i > 20){
                clearInterval(glitch);
                mensagem.textContent = texto;
            }

        },50);

    document.body.appendChild(mensagem)

    setTimeout(() => {
        mensagem.remove()
    }, 5000)
}

function ativarAFK(){

    document
        .getElementById("afk-overlay")
        .classList.add("active");
}