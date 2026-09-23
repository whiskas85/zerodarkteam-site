import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';
import { ASSOCIAZIONE, EMAIL, INDIRIZZO_GESTIONALE, LINK_SOCIAL, VOCI } from '@/contenuti';
import { LinkIcona } from '@/components/IconaLink';
import { Menu } from '@/components/Menu';

/**
 * Il sito pubblico della squadra: la vetrina, non il gestionale. Vive per
 * conto suo, separato da OPS: gli consegna solo i contatti del modulo.
 *
 * Stessi colori dell'applicazione — nero, verde del visore notturno, il
 * tricolore negli accenti — perché sono i colori del logo, e chi arriva dal
 * sito e poi entra nel gestionale deve sentirsi nello stesso posto.
 */
export const metadata: Metadata = {
  title: { default: 'Zero Dark Team · Softair tattico', template: '%s · Zero Dark Team' },
  description:
    'Zero Dark Team: squadra di softair tattico di Torino, in gara in tutta Italia. Pattuglie a corto e lungo raggio, milsim, cartografia e ATAK. Vieni a provare una giornata con noi.',
  openGraph: {
    title: 'Zero Dark Team',
    description: 'Softair tattico: pattuglie, milsim, cartografia, ATAK. Going dark.',
    images: ['/immagini/logo.jpg'],
    locale: 'it_IT',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/icona-192.png', apple: '/apple-touch-icon.png' },
};

export const viewport: Viewport = {
  themeColor: '#050605',
  width: 'device-width',
  initialScale: 1,
};

export default function LayoutSito({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
    <body className="min-h-[100dvh] antialiased">
    <div className="relative min-h-[100dvh] overflow-x-hidden bg-bg text-ink">
      {/* ------------------------------------------------------------ testata */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-bg/80 backdrop-blur-md">
        {/* Tutta la larghezza: a sinistra il marchio — il nome della squadra
            si vede sempre, anche sul telefono, perché è la prima cosa che
            deve restare in testa — a destra l'ingresso a OPS e, sotto il
            computer, il menu. */}
        <nav className="flex items-center gap-3 px-4 py-3 md:gap-6 md:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/immagini/logo.jpg" alt="Zero Dark Team" width={36} height={36} className="rounded-full" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] sm:text-sm sm:tracking-[0.25em]">
              Zero Dark Team
            </span>
          </Link>

          <div className="ml-auto hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted lg:flex">
            {VOCI.map((v) => (
              <Link key={v.href} href={v.href} className="hover:text-nvg">
                {v.testo}
              </Link>
            ))}
          </div>

          {/* L'ingresso per chi è già dentro: il gestionale della squadra, da
              solo nell'angolo. Una riga verticale lo separa dal sito, perché
              è un'altra porta e non un'altra pagina. */}
          <span aria-hidden className="ml-auto hidden h-6 w-px bg-line lg:block" />
          <a
            href={`${INDIRIZZO_GESTIONALE}/login`}
            title="Entra in Zero Dark Ops, il portale della squadra"
            className="ml-auto flex shrink-0 items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink/85 transition-colors hover:border-nvg hover:text-nvg lg:ml-0"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
            </svg>
            <span className="hidden sm:inline">Entra in OPS</span>
            <span className="sm:hidden">OPS</span>
          </a>

          <Menu />
        </nav>
      </header>

      {/* ---------------------------------------------------------- linguetta */}
      {/* L'invito a provare non scorre via con la copertina: resta appeso al
          bordo sinistro per tutta la pagina. Sul telefono no — una linguetta
          fissa coprirebbe le prime lettere di ogni riga: lì la stessa
          chiamata sta in cima al menu. */}
      <Link
        href="/contatti"
        className="fixed left-0 top-1/2 z-30 hidden -translate-y-1/2 items-center rounded-r-md border border-l-0 border-nvg bg-bg/90 px-2 py-6 text-xs font-semibold uppercase tracking-[0.25em] text-nvg backdrop-blur transition-colors hover:bg-nvg hover:text-bg md:flex"
      >
        <span className="[writing-mode:vertical-rl] rotate-180">Vuoi provare?</span>
      </Link>

      <main>{children}</main>

      {/* -------------------------------------------------------- piè di pagina */}
      <footer className="border-t border-line bg-surface/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/immagini/logo.jpg" alt="Zero Dark Team" width={64} height={64} className="rounded-full" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/immagini/sat-gaming.webp" alt="SAT & Gaming" className="h-8 w-auto rounded-sm" />
          </div>
          <div className="text-sm text-muted">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-ink">Seguici</p>
            <div className="flex gap-2">
              {LINK_SOCIAL.map((l) => (
                <LinkIcona key={l.url} tipo={l.tipo} url={l.url} descrizione={l.descrizione} />
              ))}
            </div>
            <a href={`mailto:${EMAIL}`} className="mt-3 block hover:text-nvg">
              {EMAIL}
            </a>
          </div>
          <div className="text-sm text-muted md:text-right">
            <Link href="/il-softair" className="block hover:text-nvg">
              Il softair spiegato bene
            </Link>
            <Link href="/contatti" className="mt-1 block hover:text-nvg">
              Vuoi provare una giornata?
            </Link>
            <a href={`${INDIRIZZO_GESTIONALE}/login`} className="mt-1 block hover:text-nvg">
              Area riservata ai soci
            </a>
            <p className="mt-4 text-xs">
              © {new Date().getFullYear()} Zero Dark Team · {ASSOCIAZIONE}
            </p>
          </div>
        </div>
        {/* il tricolore del logo, in fondo, come una firma */}
        <div className="flex h-1">
          <span className="flex-1 bg-itgreen" />
          <span className="flex-1 bg-ink" />
          <span className="flex-1 bg-itred" />
        </div>
      </footer>
    </div>
    </body>
    </html>
  );
}
