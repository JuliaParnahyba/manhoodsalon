/* #### ABRE E FECHA menu ao clicar: humburguer e x #### */

//criação do click do menu:
const nav = document.querySelector('#header nav') //no documento html, procure (query) o seletor #header (id associano do html), dentro dele ache o nav e registre na variável descrita, ou seja a const nav irá receber a informação que está sendo puchada acima.
const toggle = document.querySelectorAll('nav .toggle') //no documento, procure todos os seletores de classe toggle dentro do seletor da tag nav e atribuia à variável descrita.

for (const element of toggle) {
  element.addEventListener('click', function () {
    //adicona um evento de "ouvinte", ação do mouse de click. Ao perceber o click no mouse, irá executar a função descrita:
    nav.classList.toggle('show') // dentro da tag nav, vai verificar a lista de class e irá alterar incluindo a classe 'show' quando não houver e retirando qd houver. Tanto o classList quanto o toggle() já existem na DOM.
  })
}

/* #### FECHA menu ao clicar em algum dos itens #### */
const links = document.querySelectorAll('nav ul li a') // no domcumento HTML, pesquise em todos os seletores em nav todos os "a" na li contida na ul de nav e atribua à const links.

for (const link of links) {
  link.addEventListener('click', function () {
    //adicona um evento de "ouvinte", ação do mouse de click em cada ítem atribuído à nova const link. Ao perceber o click no mouse, irá executar a função descrita:
    nav.classList.remove('show') // dentro da tag nav, vai verificar a lista de class e irá remover a classe 'show' quando houver o click do mouse em qualquer item da lista do menu que foram atribuídas à const link.
  })
}

/* #### Aplicando a biblioteca/pluggin Swiper, para ativar o carrossel nos depoimentos. #### */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1 /*para indicar quantos slides ficarão vizíveis na página*/,
  pagination: {
    el: '.swiper-pagination'
  } /*pagination é um objeto que vai buscar o el (elemento) da classe descrita. */,

  mousewheel: true /*ativa a transição pelo scroll (wheel - roda) do mouse*/,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* #### aplicando scrollReveal: revela elementos ao rolar a página #### */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
)

/* ##### A G R U P A M E N T O   D E   F U N Ç Õ E S   P A R A   S C R O L L  ##### */

//FUNÇÃO PARA APLICAR ALTERAÇÕES NO HEADER AO ROLAR A PÁGINA.
const header = document.querySelector('#header') //pegar o id header e alocar na const header.
const navHeight = header.offsetHeight //para pegar a altura do header. O offsetHeight é o equivalente ao deslocamento da altura relacionada com o que for "evocado" antes do ponto, neste caso, o header do documento html.

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //se na janela o scrolY(vertical) passou(>=) à altura do header)
    // scroll é maior que a altura do header
    header.classList.add('scroll') // na tag header, adiciona a classe scroll
  } else {
    //menor que a altura do header
    header.classList.remove('scroll') // na tag header, remove a classe scroll
  }
}

//FUNÇÃO PARA ATIVAR BOTÃO DE RETORNO AO TOPO (INÍCIO) DA PÁGINA.
const backToTopButton = document.querySelector('.back-to-top') //pegar a classe back-to-top e alocar na const backToTopButton.

function backToTop() {
  if (window.scrollY >= 550) {
    //se na janela o scrolY(vertical) passou(>=) à altura do header)
    // scroll é maior que a altura do header
    backToTopButton.classList.add('show') // na tag header, adiciona a classe scroll
  } else {
    //menor que a altura do header
    backToTopButton.classList.remove('show') // na tag header, remove a classe scroll
  }
}

/* #### Manter seção marcada no menu, pela rolagem ou ao clicar. #### */
const sections = document.querySelectorAll('main section[id]') //pegar na main todas as seções que tenham id.

function activateManuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 15) * 6

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  // na janela toda, adicona um evendo para ouvir o 'scroll', quando rodar a página irá executar as funções abaixo, já descritas acima:
  changeHeaderWhenScroll()
  backToTop()
  activateManuAtCurrentSection()
})
