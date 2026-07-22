import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import logoIbg from "../../public/logo-h.svg";
import { playfair } from "../fonts";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function Privacidade() {
  return (
    <div className="mx-auto max-w-[1600px] border-x border-ink/10 bg-paper">
      <header className="border-b border-ink/10">
        <div className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image src={logoIbg} alt="Logotipo da IBG" width={110} height={48} className="h-8 w-auto sm:h-10" />
          </Link>
          <Link href="/" className="text-sm font-medium text-ink/70 transition-colors hover:text-primary">
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold italic text-primary">Informações Legais</p>
            <h1 className={`text-3xl font-medium tracking-tight sm:text-4xl ${playfair.className}`}>
              Política de Privacidade
            </h1>
            <p className="text-sm text-ink/50">Última atualização: julho de 2026</p>
          </div>

          <div className="space-y-8 text-base leading-relaxed text-ink/70">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">1. Quais Dados Coletamos</h2>
              <p>
                Este site não possui formulários de cadastro ou login. Coletamos apenas dados básicos de
                navegação (como páginas visitadas e tipo de dispositivo) por meio de ferramentas padrão de
                hospedagem, com o objetivo de entender o uso do site e melhorar a experiência dos visitantes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">2. Como Usamos os Dados</h2>
              <p>
                As informações coletadas são utilizadas exclusivamente para fins estatísticos e de melhoria
                do site. Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros para fins
                comerciais.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">3. Cookies</h2>
              <p>
                Este site pode utilizar cookies essenciais para o seu funcionamento adequado. Você pode
                desativar os cookies nas configurações do seu navegador, embora isso possa afetar algumas
                funcionalidades.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">4. Serviços de Terceiros</h2>
              <p>
                Utilizamos serviços como YouTube para exibir vídeos de nossas pregações. Esses serviços
                possuem suas próprias políticas de privacidade, que recomendamos consultar.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">5. Seus Direitos</h2>
              <p>
                Você pode, a qualquer momento, solicitar esclarecimentos sobre o tratamento dos seus dados
                entrando em contato conosco pelo e-mail{" "}
                <a href="mailto:igrejabatistagramore@gmail.com" className="text-primary hover:underline">
                  igrejabatistagramore@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">6. Alterações nesta Política</h2>
              <p>
                Esta política pode ser atualizada periodicamente. Recomendamos revisá-la de tempos em tempos
                para se manter informado sobre como protegemos suas informações.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
