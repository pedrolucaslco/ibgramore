'use client';

import Image from "next/image";

import logoIbg from "../public/logo-h.svg";
import { Instagram, InstagramIcon, MenuIcon, YoutubeIcon } from "lucide-react"
import { workSans, funnelDisplay } from "./fonts";

interface NavItem {
  name: string;
  href: string;
}

interface Card {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Home() {

  const navItems: NavItem[] = [
    { name: "Início", href: "#home" },
    { name: "Quem Somos", href: "#aboutus" },
    { name: "Celulas", href: "#celulas" },
    { name: "Programações", href: "#programacoes" },
    { name: "Pregações", href: "#pregacoes" },
    { name: "Contato", href: "#contact" },
  ];


  const celulas: Card[] = [
    {
      title: "Multiplique",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Logos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Ide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Âncora",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Pacifique",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  const pregacoes: Card[] = [
    {
      title: "O Deus Restaurador (livro de Jó)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Eclesiastes e a vida debaixo do sol",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Romanos - Justificados pela Fé",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      image: "https://images.unsplash.com/photo-1651514646753-69a9c66b5f79?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
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
                <h1 className="mb-5 text-5xl font-bold">Amar a Deus</h1>
                <h1 className="mb-5 text-5xl font-bold">Crescer com os Irmãos</h1>
                <h1 className="mb-5 text-5xl font-bold">Servir a Todos</h1>
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

        <section id="#aboutus" className='my-8 py-25 px-10 flex flex-col gap-8'>
          <h1 className={` mb-4 text-center font-bold text-4xl ${funnelDisplay.className}`}>QUEM SOMOS</h1>
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

        <section id="#simple-church" className='bg-neutral-900 text-base-100 my-8 py-20 px-10 flex flex-col gap-8'>
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
                <div key={index} className="card bg-neutral-800 text-base-100 w-full shadow-sm">
                  <figure>
                    <img
                      src={celula.image}
                      alt={celula.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {celula.title}
                    </h2>
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
          <div className="overflow-x-auto md:max-w-md rounded-box border border-content/5">
            <table className="table">
              <thead className="text-base-100">
                <tr className="border-base-100">
                  <th>Evento</th>
                  <th>Data/Horário</th>
                </tr>
              </thead>
              <tbody>
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
                  <div key={index} className="card bg-neutral-800 text-base-100 w-full shadow-sm">
                    <figure>
                      <img
                        src={pregacao.image}
                        alt={pregacao.title} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {pregacao.title}
                      </h2>
                      <p>{pregacao.description}</p>
                    </div>
                  </div>
                </>
              ))
            }

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
              pregacoes.map((pregacao, index) => (
                <div key={index} className="card bg-neutral-800 text-base-100 w-full shadow-sm">
                  <figure>
                    <img
                      src={pregacao.image}
                      alt={pregacao.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {pregacao.title}
                    </h2>
                    <p>{pregacao.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        {/* <section id="#contact" className='min-h-screen pt-20'>
          <h1>Contact</h1>
          <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </section> */}
      </div>
      <footer className="footer sm:footer-horizontal bg-base-300 items-center p-4 py-20">
        <aside className="grid-flow-col items-center">
          <Image src={logoIbg} alt="Logotipo da IBG" width={150} height={100} />
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
