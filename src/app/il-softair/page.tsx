import type { Metadata } from 'next';
import Link from 'next/link';
import { AMBIZIONI, ATTREZZATURA, DOMANDE, REGOLE } from '@/contenuti';
import { Scena } from '@/components/Scena';

export const metadata: Metadata = {
  title: 'Il softair',
  description:
    'Che cos’è il softair, come si gioca, le regole, cosa serve per iniziare e come si viene a provare una giornata con Zero Dark Team, a Torino.',
};

/**
 * Il softair spiegato a chi non ha mai giocato.
 *
 * È la porta d’ingresso del sito: chi cerca «softair Torino» o «come si
 * inizia a giocare a softair» arriva qui prima di sapere chi siamo. Per
 * questo il taglio è quello della spiegazione onesta — cosa si fa, cosa fa
 * male, cosa serve, cosa costa — e la squadra compare solo in fondo, quando
 * la domanda è diventata «e adesso dove vado a provare?».
 */

function Titolo({ numero, sopra, children }: { numero: string; sopra: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.35em] text-nvg">
        {numero} · {sopra}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{children}</h2>
    </div>
  );
}

/** I tre passi della prima volta: si legge in dieci secondi. */
const PRIMA_VOLTA = [
  {
    passo: 'Ci scrivi',
    testo:
      'Nome, telefono e due righe su di te nel modulo. Non serve altro, e non finisci in nessuna lista: i tuoi dati li vediamo solo noi.',
  },
  {
    passo: 'Ti chiamiamo',
    testo:
      'Ci sentiamo al telefono, ci raccontiamo chi siamo, rispondiamo alle tue domande e ti diciamo qual è la prossima giornata buona per venire.',
  },
  {
    passo: 'Vieni a provare',
    testo:
      'Ti accogliamo, ti spieghiamo le regole di sicurezza e giochi con noi. Alla fine decidi tu: se ti è piaciuto ne riparliamo, se non fa per te ci siamo fatti una bella giornata lo stesso.',
  },
];

export default function IlSoftair() {
  return (
    <>
      {/* ---------------------------------------------------------- intestazione */}
      <section className="relative overflow-hidden border-b border-line pb-16 pt-32">
        <Scena nome="il softair" alt="" className="absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-4xl px-4 md:px-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-nvg">Guida per chi inizia</p>
          <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-6xl">
            Il softair,
            <br />
            <span className="text-nvg">spiegato bene</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/85">
            Non è una guerra e non è una sparatoria: è uno sport di squadra all’aperto, fatto di
            pattuglie, obiettivi e parola data. Qui trovi come funziona, cosa serve davvero per
            iniziare e cosa succede se vieni a provare una giornata con noi.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------- cos'è */}
      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Titolo numero="01" sopra="Che cos’è">
            Una simulazione, <span className="text-nvg">non un combattimento</span>
          </Titolo>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-ink/80">
              <p>
                Due squadre, un terreno — un bosco, una cascina abbandonata, un capannone — e un
                obiettivo da raggiungere: conquistare una posizione, recuperare un documento,
                riportare tutti a casa entro l’orario. Ci si muove con repliche che sparano pallini
                di plastica leggerissimi, e chi viene colpito esce dal gioco.
              </p>
              <p>
                La differenza con qualsiasi videogioco è che qui nessuno tiene il punteggio al posto
                tuo. Non ci sono arbitri che vedono ogni colpo: funziona perché chi viene colpito
                alza il braccio e lo dice. È uno sport che si regge sull’onestà di chi lo gioca, ed
                è la cosa più bella che ha.
              </p>
              <p>
                Il resto lo fa la squadra. Da soli non si arriva da nessuna parte: si decide un
                piano, ci si divide i compiti, si parla via radio, ci si copre a vicenda. Vince chi
                si muove insieme, non chi mira meglio.
              </p>
            </div>
            <Scena
              nome="simulazione"
              codice="SIM · NOT COMBAT"
              alt="Carta topografica con la rotta verso l’obiettivo"
              className="aspect-[3/2] rounded-lg border border-line"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- regole */}
      <section className="border-t border-line bg-surface/40 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Titolo numero="02" sopra="Le regole">
            Sei cose che valgono <span className="text-nvg">su ogni campo</span>
          </Titolo>
          <p className="mb-12 max-w-3xl text-lg text-ink/80">
            Ogni campo ha il suo regolamento e ogni gara il suo, ma queste sei valgono dappertutto.
            Si imparano in cinque minuti, il primo giorno, prima di entrare in gioco.
          </p>
          <ol className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {REGOLE.map((r, n) => (
              <li key={r.nome} className="border-l-2 border-nvg/50 pl-4">
                <p className="font-mono text-[11px] tracking-[0.3em] text-muted">
                  {String(n + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 text-xl font-semibold uppercase tracking-wide">{r.nome}</h3>
                <p className="mt-2 text-sm text-ink/75">{r.testo}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------ modalità */}
      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Titolo numero="03" sopra="Come si gioca">
            Dalla domenica al campo <span className="text-nvg">alla gara di notte</span>
          </Titolo>
          <p className="mb-10 max-w-3xl text-lg text-ink/80">
            Il softair non è una cosa sola. Si comincia dalla giornata di gioco libero, poche ore
            fra amici; poi, se piace, si entra nei campionati della federazione, dove cambiano la
            durata, la fatica e il modo di pensare.
          </p>
          <div className="mb-10 rounded-lg border border-line bg-surface p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-nvg">Il punto di partenza</p>
            <h3 className="mt-2 text-xl font-semibold uppercase tracking-wide">La giornata di gioco</h3>
            <p className="mt-2 text-ink/75">
              Mezza giornata su un campo, partite brevi una dietro l’altra, regole semplici e pause
              per parlarsi. È da qui che si inizia sempre: nessuno comincia da una gara.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AMBIZIONI.filter((a) => a.sigla !== 'CORSI').map((a) => (
              <div key={a.sigla} className="rounded-lg border border-line bg-surface p-5">
                <p className="font-mono text-2xl font-bold tracking-tight text-nvg">{a.sigla}</p>
                <h3 className="mt-1 text-sm uppercase tracking-[0.15em] text-ink/90">{a.nome}</h3>
                <p className="mt-3 text-sm text-muted">{a.testo}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Sono i campi in cui vogliamo misurarci noi:{' '}
            <Link href="/#ambizioni" className="text-nvg hover:underline">
              le nostre ambizioni
            </Link>
            .
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------- attrezzatura */}
      <section className="border-t border-line bg-surface/40 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Titolo numero="04" sopra="L’attrezzatura">
            Cosa serve <span className="text-nvg">davvero</span>
          </Titolo>
          <p className="mb-12 max-w-3xl text-lg text-ink/80">
            In quest’ordine, non in un altro. Si spende quando si è capito come si gioca: l’errore
            classico è comprare tutto il primo mese e usarne metà.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ATTREZZATURA.map((a, n) => (
              <div key={a.nome} className="flex flex-col rounded-lg border border-line bg-surface p-5">
                <p className="font-mono text-[11px] tracking-[0.3em] text-nvg">
                  {String(n + 1).padStart(2, '0')} · {a.dettaglio}
                </p>
                <h3 className="mt-2 text-lg font-semibold uppercase tracking-wide">{a.nome}</h3>
                <p className="mt-2 text-sm text-muted">{a.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- prima volta */}
      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Titolo numero="05" sopra="La prima volta">
            Come si viene <span className="text-nvg">a provare</span>
          </Titolo>
          <ol className="grid gap-6 md:grid-cols-3">
            {PRIMA_VOLTA.map((p, n) => (
              <li key={p.passo} className="rounded-lg border border-line bg-surface p-6">
                <span className="font-mono text-4xl font-bold text-nvg/30">{String(n + 1).padStart(2, '0')}</span>
                <h3 className="mt-1 text-xl font-semibold uppercase tracking-wide">{p.passo}</h3>
                <p className="mt-2 text-sm text-ink/75">{p.testo}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------ domande */}
      <section className="border-t border-line bg-surface/40 py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Titolo numero="06" sopra="Domande">
            Quelle che ci fanno <span className="text-nvg">sempre</span>
          </Titolo>
          <div className="divide-y divide-line border-y border-line">
            {DOMANDE.map((d) => (
              <details key={d.domanda} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-medium text-ink marker:content-none group-open:text-nvg">
                  {d.domanda}
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0 text-muted transition-transform group-open:-rotate-180 group-open:text-nvg"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="mt-3 text-ink/75">{d.risposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- chiamata */}
      <section className="relative overflow-hidden border-t border-line py-24">
        <Scena nome="prima giornata" alt="" className="absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Letto tutto? <span className="text-nvg">Adesso vieni a provare</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/80">
            Si capisce in una giornata quello che non si capisce in dieci pagine. Lasciaci nome e
            telefono: ti chiamiamo noi.
          </p>
          <Link
            href="/contatti"
            className="mt-8 inline-block rounded-md bg-nvg px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-bg shadow-nvg transition-transform hover:-translate-y-0.5"
          >
            Vuoi provare?
          </Link>
        </div>
      </section>
    </>
  );
}
