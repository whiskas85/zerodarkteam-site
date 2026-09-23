'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { INDIRIZZO_GESTIONALE, VOCI } from '@/contenuti';

/**
 * Il menu del telefono.
 *
 * Sul computer le voci stanno in riga nella testata e questo pulsante non
 * c'è. Sotto, lo schermo non le tiene tutte: si apre a tendina, a tutta
 * pagina, con l'invito a provare in cima — sul telefono la linguetta
 * verticale coprirebbe il testo, e allora la sua chiamata sta qui.
 */
export function Menu() {
  const [aperto, setAperto] = useState(false);

  // chiudere deve essere sempre facile: il tasto Esc, e niente pagina che
  // scorre sotto la tendina aperta
  useEffect(() => {
    if (!aperto) return;
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setAperto(false);
    document.addEventListener('keydown', esc);
    const prima = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', esc);
      document.body.style.overflow = prima;
    };
  }, [aperto]);

  return (
    <>
      <button
        type="button"
        onClick={() => setAperto((a) => !a)}
        aria-expanded={aperto}
        aria-label={aperto ? 'Chiudi il menu' : 'Apri il menu'}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line text-ink/85 transition-colors hover:border-nvg hover:text-nvg lg:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {aperto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>

      {/* La tendina esce dalla testata e va appesa alla pagina: dentro
          l'intestazione, che è sfocata, «fisso» vorrebbe dire fisso rispetto
          a lei — alta sessanta pixel — e la tendina resterebbe lì dentro. */}
      {aperto &&
        createPortal(
          <div className="fixed inset-0 z-30 lg:hidden">
            {/* il fondo: chiude toccandolo, come si aspetta chiunque */}
            <button
              type="button"
              aria-label="Chiudi il menu"
              onClick={() => setAperto(false)}
              className="absolute inset-0 w-full cursor-default bg-bg/95 backdrop-blur-md"
            />
            <nav className="relative flex flex-col gap-2 px-4 pt-24">
              <Link
                href="/contatti"
                onClick={() => setAperto(false)}
                className="rounded-md bg-nvg px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-bg shadow-nvg"
              >
                Vuoi provare?
              </Link>
              {VOCI.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  onClick={() => setAperto(false)}
                  className="rounded-md border border-line bg-surface px-4 py-3 text-sm uppercase tracking-[0.2em] text-ink/85 transition-colors hover:border-nvg hover:text-nvg"
                >
                  {v.testo}
                </Link>
              ))}
              <a
                href={`${INDIRIZZO_GESTIONALE}/login`}
                className="mt-2 rounded-md px-4 py-3 text-center text-xs uppercase tracking-[0.2em] text-muted hover:text-nvg"
              >
                Entra in OPS · area riservata ai soci
              </a>
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
