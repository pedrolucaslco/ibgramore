'use client';

import Image from "next/image";

import logoIbg from "../public/logo-h.svg";
import logoIbgBranco from "../public/logo-branco.svg";
import { ExternalLink, Icon, Instagram, InstagramIcon, Link2, MenuIcon, YoutubeIcon } from "lucide-react"
import { workSans, funnelDisplay } from "./fonts";
import * as Icons from 'lucide-react';
import { LucideProps } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

interface Card {
  title: string;
  description: string;
  location: string;
  image: string;
  link: string;
  icon: string | null;
}

type IconName = keyof typeof Icons;

interface IconProps extends LucideProps {
  name: IconName;
}

export default function Home() {

  const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = Icons[name];
  
    if (!LucideIcon) return <span>Icon not found</span>;
  
    return <LucideIcon {...props} />;
  };
  
  const navItems: NavItem[] = [
    { name: "Início", href: "#home" },
    { name: "Quem Somos", href: "#aboutus" },
    { name: "Células", href: "#celulas" },
    { name: "Programações", href: "#programacoes" },
    { name: "Pregações", href: "#pregacoes" },
    { name: "Contato", href: "#contact" },
  ];

  const celulas: Card[] = [
    // {
    //   title: "Multiplique",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    //   location: `Localizada próximo ao Expansivo Colégio e Curso da Av. Boa Sorte.`,
    //   image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   link: "#",
    //   icon: 'Users',
    // },
    {
      title: "Logos",
      description: "Nossa célula é bem diversificada, com irmãos de todas as faixas etárias. O ambiente é descontraído, e a galera é bastante comunicativa.",
      location: `ao Rede Mais do Pajuçara`,
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
      icon: 'Sprout',
    },
    {
      title: "Ide",
      description: `Uma pequena parte da IBG unida pela comunhão e crescimento mútuo de seus irmãos. Recentemente, passou pelo processo de multiplicação sendo composta exclusivamente por rapazes.`,
      location: `à UPA do Pajuçara`,
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
      icon: 'Footprints',
    },
    {
      title: "Tulipa",
      description: `Somos uma célula formada por mulheres que amam crescer juntas e exercer a comunhão!`,
      location: `ao Supermercado Amigão, Moema Tinoco`,
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
      icon: 'Footprints',
    },
    {
      title: "Âncora",
      description: `O nome da célula foi inspirado na expressão "âncora da alma", presente em Hebreus 6.19. Faz referência ao movimento de termos a nossa vida ancorada na vida e obra de Jesus e, portanto, segura e firme nEle.`,
      location: `ao Expansivo Colégio e Curso da Av. Boa Sorte.`,
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
      icon: 'Anchor',
    },
    {
      title: "Pacifique",
      description: "Um nome pensado para ser acolhedor e convidativo. A célula Pacifique é formada por homens de todas as idades e tem como marca a amizade e a comunhão. Foi dessa célula que nasceu a tradição do futebol de todo sábado.",
      location: `ao Ginásio Nélio Dias, no Gramoré.`,
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
      icon: 'Bird',
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
    },
    {
      title: "Eclesiastes e a vida debaixo do sol",
      description: "A vida encontra sentido na sabedoria que vem do temor ao Senhor.",
      location: '',
      image: "https://i.ytimg.com/vi/CckR2xdw58c/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAOeG_Bh5cFpWDzywqPlyKgR1s3wA",
      link: "#",
      icon: '',
    },
    {
      title: "Romanos - Justificados pela Fé",
      description: "As boas-novas do enredo da Salvação.",
      location: '',
      image: "https://i.ytimg.com/vi/fjiOqchIz8U/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLALHQIvwevjQfQankzfgqW6yFW54Q",
      link: "#",
      icon: '',
    },
  ];

  return (
    <>
      <div className="navbar fixed z-50 bg-base-100 shadow-sm">
        <div className="flex-1">
          <Image src={logoIbg} alt="Logotipo da IBG" width={150} height={100} />
        </div>
        <div className="flex-none">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
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
      </div >

      <div className="min-h-screen">
        <div id="#home" className='pt-16'>
          <div
            className="hero min-h-dvw animate-fade-in"
            style={{
              backgroundImage: "url(photo1.jpg)",
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
                  {/* <figure>
                    <img
                      src={celula.image}
                      alt={celula.title} />
                  </figure> */}
                  <div className="card-body">
                    <h2 className="card-title">
                      <Icon name={celula.icon} size={24} />
                      {celula.title}
                    </h2>
                    
                    <div className="flex items-center text-base-content/60 align-middle gap-1">
                      <Icon name="MapPin" size={16} />
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
          <div className="overflow-x-auto md:max-w-md rounded-box border-neutral-600 border-2">
            <table className="table">
              <thead className="text-base-100 bg-neutral-800">
                <tr>
                  <th colSpan={2}>Outros Eventos</th>
                </tr>
                <tr className="border-base-100">
                  <th>Data</th>
                  <th>Evento</th>
                </tr>
              </thead>
              <tbody className="bg-base-100 text-base-content">
                <tr>
                  <td>30/07 - 16h e 19h</td>
                  <td>
                    <b>Famílias para a Glória de Deus: Idolatria na Família</b><br/>
                    <span className="text-xs">Um encontro para dialogar sobre como buscar a centralidade de Cristo na família.</span>
                  </td>
                </tr>
                <tr>
                  <td>30/08 - (horário a definir)</td>
                  <td>
                    <b>Na Ponta da Língua: Igrejas Tóxicas</b><br/>
                    <span className='text-xs'>Um bate-papo informal sobre teologia, com perguntas e respostas sobre temas polêmicos e importantes.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-20 px-10 pt-20 flex flex-col gap-10 justify-center items-center">
          <h1 className="text-4xl text-center font-bold mb-4 uppercase">Séries de Pregações</h1>

          <div className="grid gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
              pregacoes.map((pregacao, index) => (
                <>
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
                </>
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
            <InstagramIcon className="h-5 w-5" />
            <YoutubeIcon className="h-5 w-5" />
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
