'use client';

import Image from "next/image";

import logoIbg from "../public/logo-h.svg";
import logoIbgBranco from "../public/logo-branco.svg";

import imgLogos from "../public/logos.jpg";
import imgIde from "../public/ide.jpg";
import imgAncora from "../public/ancora.jpg";
import imgTulipa from "../public/tulipa.jpg";
import imgPacifique from "../public/pacifique.jpg";
import imgAlianca from "../public/alianca.jpg";

import { Anchor, Bird, ExternalLink, Flower2, Footprints, Icon, Instagram, MapPin, MenuIcon, Sprout, Youtube } from "lucide-react"
import { gemRing } from '@lucide/lab';

import { siInstagram, siYoutube } from "simple-icons";

import { workSans, funnelDisplay } from "./fonts";


interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Início", href: "#home" },
  { name: "Quem Somos", href: "#aboutus" },
  { name: "Células", href: "#celulas" },
  { name: "Programações", href: "#programacoes" },
  { name: "Pregações", href: "#pregacoes" },
  // { name: "Contato", href: "#contact" },
];

interface Card {
  title: string;
  description: string;
  location: string;
  image: string;
  link: string;
  icon: any;
  iconType: 'lucide' | 'lab';
}

const celulas: Card[] = [
  {
    title: "Logos",
    description: "Formada por irmãos de diversas idades, a Logos tem um ambiente descontraído e acolhedor, marcado pela comunicação e pela alegria em caminhar juntos.",
    location: `ao Rede Mais do Pajuçara`,
    image: imgLogos.src,
    link: "#",
    icon: Sprout,
    iconType: 'lucide'
  },
  {
    title: "Ide",
    description: "Um grupo formado exclusivamente por rapazes, fruto da multiplicação de outra célula. A Ide valoriza a comunhão e o crescimento mútuo, sendo um reflexo da juventude ativa da nossa igreja.",
    location: `à UPA do Pajuçara`,
    image: imgIde.src,
    link: "#",
    icon: Footprints,
    iconType: 'lucide'
  },
  {
    title: "Tulipa",
    description: "A Tulipa é um espaço de comunhão e crescimento formado por mulheres que se dedicam a viver o evangelho juntas, com leveza, afeto e propósito.",
    location: `ao Supermercado Amigão, Moema Tinoco`,
    image: imgTulipa.src,
    link: "#",
    icon: Flower2,
    iconType: 'lucide'
  },
  {
    title: "Âncora",
    description: "Inspirada em Hebreus 6.19, a célula Âncora busca viver com firmeza na fé em Cristo. É um grupo que encontra segurança na obra de Jesus e compartilha essa verdade em comunhão.",
    location: `ao Expansivo Colégio e Curso da Av. Boa Sorte.`,
    image: imgAncora.src,
    link: "#",
    icon: Anchor,
    iconType: 'lucide'
  },
  {
    title: "Aliança",
    description: "Surgida da multiplicação da célula Âncora, a Aliança reúne casais e jovens que desejam viver um relacionamento sincero com Deus, refletindo o compromisso que Ele tem com o seu povo.",
    location: `ao Campo da Escola Miriam Coeli, Nova Natal`,
    image: imgAlianca.src,
    link: "#",
    icon: gemRing,
    iconType: 'lab'
  },
  {
    title: "Pacifique",
    description: "A Pacifique é formada por homens de diferentes idades e tem como marca a amizade, a comunhão e o acolhimento. Foi nela que nasceu a tradição do futebol de sábado, fortalecendo os laços fora e dentro das reuniões.",
    location: `ao Ginásio Nélio Dias, no Gramoré.`,
    image: imgPacifique.src,
    link: "#",
    icon: Bird,
    iconType: 'lucide'
  },
];

const pregacoes: Card[] = [
  {
    title: "O Deus Restaurador (livro de Jó)",
    description: "",
    location: '',
    image: "https://i.ytimg.com/vi/_MbPUoqjfsk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB1NX7lpEy6W49dSUeTWs1FNMXWcg",
    link: "https://youtube.com/playlist?list=PLjyAhvg_NWd3bm7ItBpBequRx-ScO28m0&si=J6tLlFhI4xnIr4G_",
    icon: '',
    iconType: 'lucide'
  },
  {
    title: "Eclesiastes e a vida debaixo do sol",
    description: "A vida encontra sentido na sabedoria que vem do temor ao Senhor.",
    location: '',
    image: "https://i.ytimg.com/vi/CckR2xdw58c/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAOeG_Bh5cFpWDzywqPlyKgR1s3wA",
    link: "#",
    icon: '',
    iconType: 'lucide',
  },
  {
    title: "Romanos - Justificados pela Fé",
    description: "As boas-novas do enredo da Salvação.",
    location: '',
    image: "https://i.ytimg.com/vi/fjiOqchIz8U/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLALHQIvwevjQfQankzfgqW6yFW54Q",
    link: "#",
    icon: '',
    iconType: 'lucide',
  },
];

interface Calendar {
  date: string;
  title: string;
  description: string;
}

const calendar: Calendar[] = [
  {
    date: "30/07 - 16h e 19h",
    title: "Famílias para a Glória de Deus: Idolatria na Família",
    description: "Um encontro para dialogar sobre como buscar a centralidade de Cristo na família.",
  },
  {
    date: "30/08 - (horário a definir)",
    title: "Na Ponta da Língua: Igrejas Tóxicas",
    description: "Um bate-papo informal sobre teologia, com perguntas e respostas sobre temas polêmicos e importantes.",
  },
]

export default function Home() {

  return (
    <>
      <div className="navbar fixed z-50 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content me-3">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn btn-square btn-outline drawer-button">
                <MenuIcon />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li>
                  <Image src={logoIbg} alt="Logotipo da IBG" width={200} height={100} />
                </li>
                <hr className="text-base-300 my-4" />
                {
                  navItems.map((item, index) => (
                    <li key={index} className="text-lg">
                      {/* on click, close the drawer and scroll to the section */}
                      <a href={item.href}
                        onClick={() => {
                          document.getElementById("my-drawer")?.click();
                          document.getElementById(item.href)?.scrollIntoView();
                        }
                        }
                      >{item.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <Image src={logoIbg} alt="Logotipo da IBG" width={150} height={100} />
          {/* <a class="btn btn-ghost text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-end">
          <span></span>
        </div>
      </div>

      <div className="min-h-screen">
        <div id="#home" className='pt-16'>
          <div
            className="hero min-h-dvw animate-fade-in"
            style={{
              backgroundImage: "url(hero.jpg)",
            }}>
            <div className="hero-overlay"></div>
            <div className={`hero-content ${funnelDisplay.className} text-base-200 text-left`}>
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold">Amar a Deus</h1>
                <h1 className="mb-5 text-4xl font-bold">Crescer com os Irmãos</h1>
                <h1 className="mb-5 text-4xl font-bold">Servir a Todos</h1>
                {/* <p className="mb-5">
                  Amar a Deus
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </div>

        <section id="#aboutus" className='py-25 px-10 flex flex-col gap-8 bg-base-200'>
          <h1 className={` mb-4 text-center font-bold text-4xl ${funnelDisplay.className}`}>QUEM SOMOS</h1>

          {/* <a className="rounded-box group relative flex flex-col gap-6 overflow-hidden" href="/resources/videos/i-found-the-perfect-component-library-tzboo97urws">
            <figure className="rounded-field grid aspect-video place-content-center overflow-hidden shadow-sm transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
              <img loading="lazy" className="w-full" src="https://img.freepik.com/vetores-gratis/design-de-player-de-midia-de-video_114579-839.jpg" alt="#" />
            </figure>
            <div className="flex items-center justify-between gap-4">
              <div className="grow">
                <h2 className="text-xs font-semibold">Somos a IBG</h2>
                <p className="text-base-content/60 mt-2 text-[0.6875rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
              </div>
            </div>
          </a> */}

          <p className="leading-relaxed text-justify hyphens-auto">
            Fundada em 2008, nossa igreja nasceu com o propósito de viver o
            evangelho de forma <u>relacional</u> e <u>bíblica</u>.
          </p>
          <p className="leading-relaxed text-justify hyphens-auto">
            Acreditamos na salvação pela graça através unicamente da fé em Jesus
            Cristo, na Bíblia Sagrada como única regra de fé e prática, no discipulado contínuo e em louvores que
            exaltem a trindade e Sua obra.
          </p>
          <p className="leading-relaxed text-justify hyphens-auto">
            Nosso lema resume nossa missão: <i>amar a Deus, crescer com os irmãos e servir a todos!</i>
          </p>

        </section>

        <section id="#simple-church" className='bg-neutral-900 text-base-100 py-25 px-10 flex flex-col gap-8'>
          <h1 className={` mb-4 text-center font-bold text-4xl ${funnelDisplay.className}`}>SOMOS UMA <br /><u>IGREJA SIMPLES</u></h1>
          <p className="leading-relaxed text-justify hyphens-auto">
            Valorizamos uma caminhada cristã simples, centrada em <b className="font-semibold underline">relacionamentos verdadeiros</b>.
            Nossas programações são intencionais e objetivas, com cultos de liturgia simples e profunda.
          </p>
          <p className="leading-relaxed text-justify hyphens-auto">
            Acreditamos na vida na vida, onde cada membro é parte ativa da missão e do cuidado mútuo.
          </p>
        </section>


        <section id="#celulas" className='min-h-screen px-10 pt-20 flex flex-col gap-8'>
          <h1 className="text-4xl text-center font-bold mb-4 uppercase">Células</h1>
          <p className="leading-relaxed text-justify hyphens-auto">
            Nossas células são encontros semanais que acontecem nas casas de
            alguns membros de nossa igreja, com o objetivo de ser em um ambiente
            acolhedor e informal.
          </p>
          <p className="leading-relaxed text-justify hyphens-auto">
            São momentos de comunhão, discipulado e aprofundamento nas
            Escrituras, onde a missão é vivida de forma prática.
          </p>

          <p className="leading-relaxed text-justify hyphens-auto">
            Para muitos,
            as células têm sido a porta de entrada para conhecer o amor de
            Deus e o viver no Seu Reino.
          </p>

          <div className="my-8 grid  text-base-content grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
              celulas.map((celula, index) => (
                <div key={index} className="card bg-base-200 w-full border border-base-300">
                  <figure>
                    <img
                      src={celula.image}
                      alt={celula.title} className="object-cover" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {celula.iconType === 'lab' ? (
                        <Icon iconNode={celula.icon} size={24} />
                      ) : (
                        <celula.icon size={24} />
                      )}
                      {celula.title}
                    </h2>

                    <div className="flex items-center text-base-content/60 align-middle gap-1">
                      <MapPin size={16} />
                      <span className="text-xs">Próxima {celula.location}</span>
                    </div>
                    <p>{celula.description}</p>
                  </div>
                </div>
              ))
            }

          </div>

        </section>

        <section id="#programacoes" className='py-20 bg-red-900 text-base-100 px-10 pt-20 flex flex-col gap-10 justify-center items-center '>
          <div className="flex flex-col w-full">
            <h1 className={` mb-4 text-center font-bold text-4xl ${funnelDisplay.className}`}>
              PROGRAMAÇÕES</h1>
            <p className="text-center">Confira nossas programações da semana.</p>
          </div>
          <div className="overflow-x-auto md:max-w-md rounded-box border-neutral-600 border-2 -rotate-2 shadow-2xl">
            <table className="table">
              <thead className="text-base-100 bg-neutral-800">
                <tr className="border-base-100">
                  <th>Evento</th>
                  <th>Data/Horário</th>
                </tr>
              </thead>
              <tbody className="bg-base-100 text-base-content">
                <tr>
                  <td>Cultos</td>
                  <td>Domingo às 18h30</td>
                </tr>
                <tr>
                  <td>Escola Bíblica Teológica</td>
                  <td>Domingo às 9h</td>
                </tr>
                <tr>
                  <td>Células</td>
                  <td>Durante a semana à noite</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
          </div>
          <div className="overflow-x-auto md:max-w-md rounded-box border border-neutral-content">
            <table className="table border-collapse">
              <thead className="text-neutral-content">
                <tr className="border-neutral-content">
                  <th colSpan={2}>Outros Eventos</th>
                </tr>
                <tr className="border-neutral-content">
                  <th className="border-e border-neutral-content">Data</th>
                  <th>Evento</th>
                </tr>
              </thead>
              <tbody className="text-neutral-content">
                {
                  calendar.map((event, index) => (
                    <tr key={index} className="border-neutral-content">
                      <td className="border-e border-neutral-content">{event.date}</td>
                      <td>
                        <b>{event.title}</b><br />
                        <span className="text-xs">{event.description}</span>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </section>

        <section id='#pregacoes' className="py-20 px-10 pt-20 flex flex-col gap-10 justify-center items-center">
          <h1 className="text-4xl text-center font-bold mb-4 uppercase">Séries de Pregações</h1>

          <div className="grid gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              pregacoes.map((pregacao, index) => (

                <a key={index} className="rounded-box group relative flex flex-col gap-6 overflow-hidden p-2" href="/resources/videos/i-found-the-perfect-component-library-tzboo97urws">
                  <figure className="rounded-field grid aspect-video place-content-center overflow-hidden shadow-sm transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                    <img loading="lazy" className="w-full" src={pregacao.image} alt={pregacao.title} />
                  </figure>
                  <div className="flex items-center justify-between gap-4">
                    <div className="grow">
                      <h2 className="text-xs font-semibold">{pregacao.title}</h2>
                      <p className="text-base-content/60 mt-2 text-[0.6875rem]">{pregacao.description}</p>
                    </div>
                  </div>
                </a>

              ))
            }

          </div>

          <a href="https://www.youtube.com/@ibgramore/playlists" target="_blank" className="btn btn-light">Ver mais <ExternalLink className="inline-block h-4 w-4" /> </a>
        </section>

        {/* <section id="#contact" className='min-h-screen pt-20'>
          <h1>Contact</h1>
          <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </section> */}
      </div>
      <footer className="footer sm:footer-horizontal bg-red-900 text-base-100 items-center p-4 py-20">
        <aside className="grid-flow-col items-center">

          <Image src={logoIbgBranco} alt="Logotipo da IBG" width={150} height={100} />
        </aside>
        <ul className="nav flex flex-col gap-4 w-full">
          {
            navItems.map((item, index) => (
              <li key={index}>
                {/* on click, close the drawer and scroll to the section */}
                <a href={item.href}
                  onClick={() => {
                    document.getElementById(item.href)?.scrollIntoView();
                  }
                  }
                >{item.name}</a>
              </li>
            ))
          }
        </ul>
        <div className="flex flex-col gap-4 w-full">
          <p>Sita a IBG nas redes sociais</p>
          <nav className="grid grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <Instagram className="h-5 w-5" />
            <Youtube className="h-5 w-5" />
          </nav>
        </div>
        <ul>
          <li>Igreja Batista do Gramoré</li>
          <li>Rua Ribeirão Preto, 113 | Lagoa Azul</li>
          <li>CEP 59135-550 | Natal - RN</li>
          <li>Tel: +55 (84) 98859-5687</li>
          <li>Email: igrejabatistagramore@gmail.com</li>
        </ul>
        <p>Copyright © 2025 Igreja Batista do Gramoré - Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
