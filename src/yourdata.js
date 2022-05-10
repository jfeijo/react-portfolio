// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

//Image Import
import drakkarLabel from "./images/drakkar-label.png"
import npsLabel from "./images/figma-template.png"
import aluraLabel from "./images/alurakut.png"
import travellinStatic from "./images/travellinduo.png"
export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "João Feijó",
  headerTagline: [
    //Line 1 For Header
    "Desenvolvedor",
    //Line 2 For Header
    "Front-end Jr., UI Designer Jr.,",
    //Line 3 For Header
    "e muito mais",
  ],
  //   Header Paragraph
  headerParagraph:
    "Sou desenvolvedor front-end, com foco em web/React.js - músico, entusiasta de UI Design e apaixonado por tudo que fale sobre arte, lugares e culturas.",

  //Contact Email
  contactEmail: "joaoantoniofeijo@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Precificador Drakkar", //Project Title - Add Your Project Title Here
      para:
        "Ferramenta de escopo interno, desenvolvido juntamente com o time de Desenvolvimento da empresa Drakkar Solos.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: drakkarLabel,
      //Project URL - Add Your Project Url Here
      url: "http://latestprecificador.drakkar.com.br/",
    },
    {
      title: "Protótipo NPS", //Project Title - Add Your Project Title Here
      para:
        "Design e prototipação do NPS - outro sistema de escopo fechado da Drakkar.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: npsLabel,
      //Project URL - Add Your Project Url Here
      url:
        "https://www.figma.com/file/Lu5LXJwltnmrxUcHaPmu4p/NPS?node-id=0%3A1",
    },
    {
      title: "AluraKut", //Project Title - Add Your Project Title Here
      para:
        "Projeto feito em um bootcamp da escola de programação Alura, consiste em uma releitura front-end da extinta rede social Orkut.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: aluraLabel,
      //Project URL - Add Your Project Url Here
      url: "https://alurakut-jfeijo.vercel.app/",
    },
    {
      title: "Travellin' Duo Release", //Project Title - Add Your Project Title Here
      para:
        "Uma página estática para explicar os serviços da banda Travellin' Duo.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: travellinStatic,
      //Project URL - Add Your Project Url Here
      url: "https://travellin-release-static.vercel.app/",
    },
    // {
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Tenho 27 anos e comecei a programar no final de 2019. Sou graduado em Direito pela Universidade Franciscana e atualmente curso Sistemas para Internet na Universidade Federal de Santa Maria.",
  aboutParaTwo:
    "Possuo perfil multidisciplinar e colaborativo, habituado a trabalhar em equipe, com metodologias ágeis e jornadas de trabalho remotas. Orientado a Design Thinking.",
  aboutParaThree:
    "Proficiente na língua Inglesa (leitura/escrita/fala), com experiência de conversação testada no exterior, e espanhol de nível intermediário.",
  aboutImage:
    "https://lh3.googleusercontent.com/Tn4kJUocEad7JVTL4YXDSSRRBTV05cQElbyZ0rD2neTkOmFmsUVwmnUeZTShZuRrubWlvLarX890-Rdc-hpc=w1920-h929-rw",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para: "Conhecimentos sólidos em HTML5, acessibilidade, semântica e SEO.",
    },
    {
      img: cssIcon,
      para:
        "CSS3: Minha principal força - layouts responsivos, orientados à UI Design Patterns e acessibilidade.",
    },
    {
      img: jsIcon,
      para:
        "Um ano de experiência de trabalho utilizando a linguagem ES6+ e contando!",
    },
    {
      img: reactIcon,
      para:
        "Trabalho com React.js desde agosto de 2021, este é o meu atual foco de masterização e constante evolução.",
    },
    {
      img: designIcon,
      para:
        "Massiva experiência com Design Gráfico, dominando softwares de manipulação de imagens e vetores, bem como o FIGMA para criação e prototipação de interfaces.",
    },
    {
      img: codeIcon,
      para:
        "Team-player, possuo boa capacidade de relacionamento, inteligência emocional e faço amizades facilmente!",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Vamos criar sua próxima experiência juntos!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/jfeijo" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/jfeijo",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/jfeijo",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/jfeijo",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
