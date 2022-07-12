import Logo from '../../public/assets/images/logo.svg';

import Image1 from '../../public/assets/images/image1.png';
import Image2 from '../../public/assets/images/image2.png';
import Image3 from '../../public/assets/images/image3.png';
import Image4 from '../../public/assets/images/image4.png';
import Image5 from '../../public/assets/images/image5.png';
import Image6 from "../../public/assets/images/image6.png";
import Image7 from "../../public/assets/images/image7.png";

import Icon1 from "../../public/assets/icons/icon1.svg";
import Icon2 from "../../public/assets/icons/icon2.svg";
import Icon3 from "../../public/assets/icons/icon3.svg";
import Icon4 from "../../public/assets/icons/icon4.svg";
import Icon5 from "../../public/assets/icons/icon5.svg";
import Icon6 from "../../public/assets/icons/icon6.svg";
import Icon7 from "../../public/assets/icons/icon7.svg";
import Icon8 from "../../public/assets/icons/icon8.svg";
import Icon9 from "../../public/assets/icons/icon9.svg";
import Icon10 from "../../public/assets/icons/icon10.svg";

const headData = {
  title: "NEOORTHO",
  description: "Soluções seguras para saúde",
}

const headerData = {
  logo: Logo,
  links: [
    {
      href: "/",
      text: "Página Inicial",
    },
    {
      href: "/produtos",
      text: "Produtos",
    },
    {
      href: "/eventos",
      text: "Eventos",
    },
    {
      href: "/quem-somos",
      text: "Quem Somos",
    },
    {
      href: "/contato",
      text: "Contato",
    },
    {
      href: "/area-exclusiva",
      text: "Área Exclusiva",
      border: true,
    }
  ]
}

const bannerData = {
  title: "SOLUÇÕES SEGURAS PARA SAÚDE",
  image: Image1
}

const categoriesData = {
  title: "APRENDA MAIS SOBRE TRATAMENTOS COM SOLUÇÕES NEOORTHO",
  cards: [
    {
      image: Image2,
      href: "trauma",
      alt: "trauma",
      text: "TRAUMA",
    },
    {
      image: Image3,
      href: "cmf",
      alt: "cmf",
      text: "CMF",
    },
    {
      image: Image4,
      href: "coluna",
      alt: "coluna",
      text: "COLUNA",
    },
    {
      image: Image5,
      href: "protese",
      alt: "protese",
      text: "PRÓTESE",
    },
  ]
}

const eventsHomeData = {
  posts: [
    {
      date: { day: "28 de junho", hour: "20:00 - 21:30" },
      title: "FRATURAS COMPLEXAS DO COTOVELO",
      text: "Participe do evento online que abordará a apresentação e a discussão de casos clínicos, de maneira didática, por diferentes médicos com experiêcia.",
      tag: "Meeting Online"
    },
    {
      date: { day: "28 de junho", hour: "20:00 - 21:30" },
      title: "FRATURAS COMPLEXAS DO COTOVELO",
      text: "Participe do evento online que abordará a apresentação e a discussão de casos clínicos, de maneira didática, por diferentes médicos com experiêcia.",
      tag: "Meeting Online"
    },
    {
      date: { day: "28 de junho", hour: "20:00 - 21:30" },
      title: "FRATURAS COMPLEXAS DO COTOVELO",
      text: "Participe do evento online que abordará a apresentação e a discussão de casos clínicos, de maneira didática, por diferentes médicos com experiêcia.",
      tag: "Meeting Online"
    },
  ]
}

const presentationData1 = {
  title: "UM POUCO SOBRE A NEOORTHO",
  image: Image6,
  cards: [
    {
      title: "Em crescente avanço",
      text: "A NEOORTHO é uma empresa brasileira fabricante de implantes ortopédicos. Com um portfólio composto por mais de 10.000 itens em crescente expansão, tem excelente aceitação no mercado. A empresa investe constantemente na capacitação de mão de obra especializada e em equipamentos e máquinas de usinagem de última geração."
    },
    {
      title: "Surge uma nova solução",
      text: "Mais que implantes, a NEOORTHO apresenta ao mercado soluções que facilitam as práticas médicas e dão maior segurança e bem estar aos pacientes."
    }
  ]
}

const presentationData2 = {
  title: "NOSSO IMPACTO",
  image: Image7,
  cards: [
    {
      title: "FACILITADORES DE UMA VIDA NOVA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pretium in pretium elit. Est donec cursus risus arcu, id. Eu morbi sem velit senectus a a tellus praesent at. Amet phasellus tempor maecenas ut ac nunc. Justo risus ullamcorper proin sed venenatis volutpat aliquam enim vulputate."
    },
    {
      title: "FAZEMOS PARTE DESSA MUDANÇA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pretium in pretium elit. Est donec cursus risus arcu, id. Eu morbi sem velit senectus a a tellus praesent at. "
    },
  ]
}

const policiesData = {
  title: "POLÍTICAS DE GESTÃO",
  cards: [
    {
      icon: Icon1,
      title: "DESENVOLVER PESQUISAS NA ÁREA DE ORTOPEDIA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pretium in pretium elit."
    },
    {
      icon: Icon2,
      title: "VALORIZAÇÃO DAS PESSOAS",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pretium in pretium elit."
    },
    {
      icon: Icon3,
      title: "APRIMORAMENTO PROFISSIONAL ATRAVÉS DA EDUCAÇÃO",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pretium in pretium elit."
    },
    {
      icon: Icon4,
      title: "PRESERVAÇÃO DO MEIO AMBIENTE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pretium in pretium elit."
    }
  ]
}

const certificatesData = {
  cards: [
    {
      icons: [Icon5, Icon6],
      title: "SISTEMA DE GESTÃO DE QUALIDADE",
    },
    {
      icons: [Icon7, Icon8, Icon9, Icon10],
      title: "PRODUTOS",
      text: "*Alguns produtos específicos do portfólio NEOORTHO não possuem aprovação FDA. Por favor, entre em contato antecipadamente com comex@neoortho.com.br para verificar o status de suas aprovações e certificações, além de outras informações necessárias."
    }
  ]
}

export { headData, headerData, bannerData, categoriesData, eventsHomeData, presentationData1, presentationData2, policiesData, certificatesData };