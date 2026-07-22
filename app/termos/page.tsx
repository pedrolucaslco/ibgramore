import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import logoIbg from "../../public/logo-h.svg";
import { playfair } from "../fonts";

export const metadata: Metadata = {
  title: "Termos de Uso",
};

export default function Termos() {
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
              Termos de Uso
            </h1>
            <p className="text-sm text-ink/50">Última atualização: julho de 2026</p>
          </div>

          <div className="space-y-8 text-base leading-relaxed text-ink/70">
            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o site da Igreja Batista do Gramoré, você concorda com os termos e
                condições descritos nesta página. Caso não concorde com algum destes termos, pedimos que não
                utilize este site.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">2. Uso do Conteúdo</h2>
              <p>
                Todo o conteúdo publicado neste site (textos, imagens, vídeos e materiais relacionados) é
                disponibilizado para fins informativos e devocionais. É permitida a reprodução para uso
                pessoal e não comercial, desde que citada a fonte.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">3. Links Externos</h2>
              <p>
                Este site pode conter links para plataformas de terceiros, como YouTube e Instagram. Não nos
                responsabilizamos pelo conteúdo, políticas de privacidade ou práticas dessas plataformas
                externas.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">4. Alterações</h2>
              <p>
                Estes termos podem ser atualizados periodicamente sem aviso prévio. Recomendamos revisar esta
                página regularmente para se manter informado sobre eventuais mudanças.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-semibold text-ink">5. Contato</h2>
              <p>
                Em caso de dúvidas sobre estes termos, entre em contato pelo e-mail{" "}
                <a href="mailto:igrejabatistagramore@gmail.com" className="text-primary hover:underline">
                  igrejabatistagramore@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
