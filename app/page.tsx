'use client';

import { useState } from "react";
import Image from "next/image";

import logoIbg from "../public/logo-h.svg";

import imgLogos from "../public/logos.jpg";
import imgIde from "../public/ide.jpg";
import imgAncora from "../public/ancora.jpg";
import imgTulipa from "../public/tulipa.jpg";
import imgPacifique from "../public/pacifique.jpg";
import imgAlianca from "../public/alianca.jpg";

import { Anchor, Bird, ExternalLink, Flower2, Footprints, Icon, Instagram, Mail, MapPin, Menu, Sprout, X, Youtube } from "lucide-react"
import { gemRing } from '@lucide/lab';

import { lora } from "./fonts";


interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Início", href: "#home" },
  { name: "Programações", href: "#programacoes" },
  { name: "Células", href: "#celulas" },
  { name: "Quem Somos", href: "#aboutus" },
  { name: "Pregações", href: "#pregacoes" },
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
    image: "https://i.ytimg.com/vi/_MbPUoqjfsk/maxresdefault.jpg",
    link: "https://youtube.com/playlist?list=PLjyAhvg_NWd3bm7ItBpBequRx-ScO28m0&si=J6tLlFhI4xnIr4G_",
    icon: '',
    iconType: 'lucide'
  },
  {
    title: "Eclesiastes e a vida debaixo do sol",
    description: "A vida encontra sentido na sabedoria que vem do temor ao Senhor.",
    location: '',
    image: "https://i.ytimg.com/vi/CckR2xdw58c/maxresdefault.jpg",
    link: "#",
    icon: '',
    iconType: 'lucide',
  },
  {
    title: "Romanos - Justificados pela Fé",
    description: "As boas-novas do enredo da Salvação.",
    location: '',
    image: "https://i.ytimg.com/vi/fjiOqchIz8U/maxresdefault.jpg",
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
    date: "Em breve",
    title: "Na Ponta da Língua",
    description: "",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mx-auto max-w-[1600px] border-x border-ink/10 bg-paper">
      <header className="fixed top-0 left-1/2 z-50 w-full max-w-[1600px] -translate-x-1/2 border-b border-ink/10 bg-paper/95 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <a href="#home" className="shrink-0">
            <Image src={logoIbg} alt="Logotipo da IBG" width={110} height={48} priority className="h-8 w-auto sm:h-10" />
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#celulas"
              className="border border-ink px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              Fazer Parte
            </a>
          </div>

          <button
            aria-label="Abrir menu"
            className="lg:hidden text-ink"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 w-full overflow-y-auto bg-paper transition-transform duration-300 lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-ink/10 px-4 sm:h-20 sm:px-6">
          <Image src={logoIbg} alt="Logotipo da IBG" width={110} height={48} className="h-8 w-auto" />
          <button aria-label="Fechar menu" className="text-ink" onClick={() => setMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>
        <nav className={`flex flex-col gap-2 px-4 py-8 sm:px-6 sm:py-10 ${lora.className}`}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-ink/10 py-4 text-xl text-ink transition-colors hover:text-primary sm:text-2xl"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#celulas"
            onClick={() => setMenuOpen(false)}
            className="mt-8 border border-ink px-6 py-3 text-center text-sm font-medium text-ink"
          >
            Fazer Parte
          </a>
        </nav>
      </div>

      <main className="pt-16 sm:pt-20">
        <section id="home" className="bg-paper pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-[80svh] min-h-[420px] items-center justify-center overflow-hidden bg-ink">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(hero.jpg)" }}
              />
              <div className="absolute inset-0 bg-ink/35" />

              <div className={`relative z-10 max-w-3xl space-y-5 p-6 text-center text-white sm:space-y-6 sm:p-10 lg:p-14 ${lora.className}`}>
                <h1 className="text-3xl font-medium italic leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Amar a Deus, crescer com os irmãos e servir a todos.
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 pt-2 font-sans sm:gap-x-8 sm:pt-4">
                  <a
                    href="#aboutus"
                    className="border border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-ink sm:px-7"
                  >
                    Nossa História
                  </a>
                  <a
                    href="#programacoes"
                    className="text-base font-semibold text-white/80 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
                  >
                    Ver programação →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programacoes" className="border-y border-ink/10 bg-paper-muted py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5 space-y-8 sm:space-y-10">
                <div className="space-y-4">
                  <p className="text-xs font-semibold text-primary">Nos Encontre</p>
                  <h2 className={`text-3xl font-medium italic tracking-tight sm:text-4xl md:text-5xl ${lora.className}`}>
                    Programação
                  </h2>
                  <p className="text-lg leading-relaxed text-ink/70">
                    Nossa agenda é pensada para que você possa se conectar com Deus e com a comunidade em diferentes momentos da semana.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 border-t border-ink/20 pt-8 sm:gap-8">
                  <div>
                    <div className={`text-2xl font-medium text-primary sm:text-3xl ${lora.className}`}>18h30</div>
                    <div className="mt-1 text-sm text-ink/60">Culto Dominical</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-medium text-primary sm:text-3xl ${lora.className}`}>09h00</div>
                    <div className="mt-1 text-sm text-ink/60">Escola Bíblica</div>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/pUpm9FvVLxwH652s8"
                  target="_blank"
                  className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <MapPin size={16} />
                  Como chegar
                </a>
              </div>

              <div className="lg:col-span-7 space-y-10 sm:space-y-14">
                <div>
                  <h3 className="text-xs font-semibold text-ink/50">Agenda Regular</h3>
                  <div className="mt-6 divide-y divide-ink/10">
                    <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <span className="font-medium text-ink">Cultos de Celebração</span>
                      <span className="text-sm text-ink/60 sm:text-base">Domingo às 18h30</span>
                    </div>
                    <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <span className="font-medium text-ink">Escola Bíblica Teológica</span>
                      <span className="text-sm text-ink/60 sm:text-base">Domingo às 9h</span>
                    </div>
                    <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <span className="font-medium text-ink">Células</span>
                      <span className="text-sm text-ink/60 sm:text-base">Durante a semana (Noite)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-ink/50">Eventos Especiais</h3>
                  {calendar.length > 0 ? (
                    <div className="mt-6 divide-y divide-ink/10">
                      {calendar.map((event, index) => (
                        <div key={index} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-6">
                          <div className="shrink-0 sm:w-28">
                            <div className="text-sm font-semibold text-ink">{event.date.split(' - ')[0]}</div>
                            <div className="text-xs text-ink/50">{event.date.split(' - ')[1]}</div>
                          </div>
                          <div>
                            <div className="font-medium text-ink">{event.title}</div>
                            <div className="mt-1 text-sm leading-relaxed text-ink/60">{event.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-6 text-sm text-ink/50">
                      Nenhum evento programado no momento.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="celulas" className="bg-paper py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold text-primary">Comunhão nas Casas</p>
              <h2 className={`text-3xl font-medium italic tracking-tight sm:text-4xl md:text-5xl ${lora.className}`}>
                Células
              </h2>
              <p className="text-lg leading-relaxed text-ink/70">
                Nossas células são encontros semanais que acontecem nas casas, proporcionando um ambiente acolhedor para comunhão, discipulado e aprofundamento nas Escrituras.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {celulas.map((celula, index) => (
                <div
                  key={index}
                  className="border border-ink/10 bg-paper-muted p-4 sm:p-5"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-page">
                    <img
                      src={celula.image}
                      alt={celula.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    {celula.iconType === 'lab' ? (
                      <Icon iconNode={celula.icon} size={18} className="text-primary" />
                    ) : (
                      <celula.icon size={18} className="text-primary" />
                    )}
                    <h3 className={`text-lg font-medium italic ${lora.className}`}>{celula.title}</h3>
                  </div>
                  <p className={`mt-2 flex items-start gap-1.5 text-xs italic text-ink/50 ${lora.className}`}>
                    <MapPin size={13} className="mt-0.5 shrink-0" />
                    Próxima {celula.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {celula.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="simple-church" className="border-y border-ink/10 bg-paper-muted py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold text-primary">Nossa Forma de Ser Igreja</p>
              <h2 className={`text-3xl font-medium italic tracking-tight sm:text-4xl md:text-5xl ${lora.className}`}>
                Somos uma igreja simples
              </h2>
            </div>

            <div className="mt-10 grid gap-10 sm:mt-12 sm:gap-12 md:grid-cols-2">
              <div className="border-t border-ink/20 pt-8">
                <h3 className={`text-2xl font-medium ${lora.className}`}>Relacionamentos</h3>
                <p className="mt-4 leading-relaxed text-ink/70">
                  Valorizamos uma caminhada cristã simples, centrada em relacionamentos verdadeiros.
                </p>
              </div>

              <div className="border-t border-ink/20 pt-8">
                <h3 className={`text-2xl font-medium ${lora.className}`}>Intencionalidade</h3>
                <p className="mt-4 leading-relaxed text-ink/70">
                  Nossas programações são intencionais e objetivas, com cultos de liturgia simples e profunda.
                  Acreditamos que cada membro é parte ativa da missão.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="aboutus" className="bg-paper py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-primary">Nossa Identidade</p>
                  <h2 className={`text-3xl font-medium italic tracking-tight sm:text-4xl md:text-5xl ${lora.className}`}>
                    Quem Somos
                  </h2>
                </div>

                <div className="space-y-6 text-lg leading-relaxed text-ink/70">
                  <p>
                    Fundada em 2008, nossa igreja nasceu com o propósito de viver o
                    evangelho de forma relacional e bíblica.
                  </p>
                  <p>
                    Acreditamos na salvação pela graça através unicamente da fé em Jesus
                    Cristo, na Bíblia Sagrada como única regra de fé e prática, no discipulado contínuo e em louvores que
                    exaltem a trindade e Sua obra.
                  </p>
                  <blockquote className={`border-l-2 border-primary pl-6 text-xl text-ink ${lora.className}`}>
                    "Amar a Deus, crescer com os irmãos e servir a todos!"
                  </blockquote>
                </div>
              </div>

              <div className="aspect-[4/5] w-full overflow-hidden lg:aspect-auto">
                <img
                  src="photo1.jpg"
                  alt="Comunhão na IBG"
                  className="h-full w-full object-cover"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"; }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pregacoes" className="border-t border-ink/10 bg-paper py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold text-primary">Palavra de Deus</p>
              <h2 className={`text-3xl font-medium italic tracking-tight sm:text-4xl md:text-5xl ${lora.className}`}>
                Séries de Pregações
              </h2>
              <p className="text-lg leading-relaxed text-ink/70">
                Acompanhe nossas séries de mensagens e mergulhe no conhecimento das Escrituras.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pregacoes.map((pregacao, index) => (
                <a
                  key={index}
                  href={pregacao.link}
                  target="_blank"
                  className="group block border border-ink/10 bg-paper-muted p-4 sm:p-5"
                >
                  <div className="aspect-video overflow-hidden border border-ink/10 bg-page">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover"
                      src={pregacao.image}
                      alt={pregacao.title}
                      onError={(e) => {
                        const fallback = e.currentTarget.src.replace("maxresdefault.jpg", "hqdefault.jpg");
                        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
                      }}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium italic leading-tight text-ink">
                    {pregacao.title}
                    <span className="ml-1 opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                  </h3>
                  {pregacao.description && (
                    <p className="mt-1 text-sm text-ink/60">
                      {pregacao.description}
                    </p>
                  )}
                </a>
              ))}
            </div>

            <div className="mt-10 sm:mt-16">
              <a
                href="https://www.youtube.com/@ibgramore/playlists"
                target="_blank"
                className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-xs font-semibold text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white sm:px-7"
              >
                Ver todas no YouTube <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <section className="border-t border-ink/10 bg-page py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-primary">Comunidade Online</p>
                <h2 className={`text-3xl font-medium italic tracking-tight sm:text-4xl md:text-5xl ${lora.className}`}>
                  Acompanhe nas redes sociais
                </h2>
                <p className="text-lg leading-relaxed text-ink/70">
                  Nossa rede social mais ativa é o Instagram, onde compartilhamos stories durante os cultos,
                  comunicados e novidades sobre os eventos. No YouTube, fazemos as transmissões das celebrações
                  de domingo e da Escola Bíblica Teológica.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.instagram.com/ibgramore"
                  target="_blank"
                  className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@ibgramore"
                  target="_blank"
                  className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Youtube size={18} />
                  YouTube
                </a>
              </div>
            </div>

            <div className="aspect-square w-full max-w-md justify-self-center border border-ink/10 p-4 sm:p-6 lg:justify-self-end">
              <img
                src="/posts-bro.svg"
                alt="Ilustração de redes sociais"
                className="h-full w-full object-contain grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-page pt-4 pb-10 text-ink">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="space-y-4">
              <Image src={logoIbg} alt="Logotipo da IBG" width={160} height={70} className="h-10 w-auto opacity-70 grayscale" />
              <p className="text-sm leading-relaxed text-ink/60">
                Uma igreja que busca amar a Deus sobre todas as coisas e servir ao próximo com excelência.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <h3 className="font-semibold text-ink/50">Menu</h3>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-ink/60 transition-colors hover:text-ink">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 text-sm text-ink/60">
              <h3 className="font-semibold text-ink/50">Contato</h3>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-ink/40" />
                <a href="mailto:igrejabatistagramore@gmail.com" className="transition-colors hover:text-ink">
                  igrejabatistagramore@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-ink/40" />
                <a
                  href="https://maps.app.goo.gl/pUpm9FvVLxwH652s8"
                  target="_blank"
                  className="group transition-colors hover:text-ink"
                >
                  Rua Ribeirão Preto, 113, Lagoa Azul, Natal - RN
                  <span className="ml-1 opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 text-center text-sm text-ink/40 sm:flex-row sm:text-left">
            <p>Copyright © {new Date().getFullYear()} Igreja Batista do Gramoré - Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="/termos" className="transition-colors hover:text-ink">Termos</a>
              <a href="/privacidade" className="transition-colors hover:text-ink">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
