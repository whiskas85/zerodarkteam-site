'use server';

import { headers } from 'next/headers';

export type EsitoModulo = { ok?: string; errore?: string };

const GRAZIE: EsitoModulo = {
  ok: 'Ricevuto! Ti chiamiamo noi nei prossimi giorni per conoscerci e proporti la prima giornata.',
};

const campo = (fd: FormData, k: string) => (fd.get(k)?.toString() ?? '').trim();

/**
 * Il modulo «Vuoi provare?»: qui non si salva niente, si consegna a OPS.
 *
 * Due difese restano qui, prima di disturbare il gestionale: il **campo
 * trappola** (una persona non lo vede, un programma lo compila) e il **tempo**
 * (sotto i tre secondi nessuno ha scritto nome e telefono). A chi ci cade si
 * risponde «grazie» e basta.
 *
 * Tutto il resto — cosa serve, le date impossibili, il tetto di moduli all'ora
 * — lo decide OPS, che ha le regole per ogni sito collegato. A lui si passa
 * anche l'indirizzo di chi scrive, perché il tetto si conta per persona e non
 * per sito.
 */
export async function inviaContatto(_prev: EsitoModulo, fd: FormData): Promise<EsitoModulo> {
  if (campo(fd, 'sito_web')) return GRAZIE;
  const aperto = Number(campo(fd, 'aperto'));
  if (!aperto || Date.now() - aperto < 3000) return GRAZIE;

  const ops = process.env.OPS_URL;
  const chiave = process.env.CHIAVE_OPS;
  if (!ops || !chiave) {
    return { errore: 'Il modulo non è ancora collegato. Scrivici su Instagram, ti rispondiamo lì.' };
  }

  const h = await headers();
  const ip = (h.get('x-real-ip') ?? h.get('x-forwarded-for') ?? '').split(',')[0].trim();

  try {
    const risposta = await fetch(`${ops}/api/contatti`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${chiave}`,
        'content-type': 'application/json',
        ...(ip ? { 'x-indirizzo-visitatore': ip } : {}),
      },
      body: JSON.stringify({
        nome: campo(fd, 'nome'),
        cognome: campo(fd, 'cognome'),
        telefono: campo(fd, 'telefono'),
        email: campo(fd, 'email'),
        dataNascita: campo(fd, 'dataNascita'),
        zona: campo(fd, 'zona'),
        come: campo(fd, 'come'),
        messaggio: campo(fd, 'messaggio'),
        consenso: fd.get('consenso') === 'on',
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });

    if (risposta.ok) return GRAZIE;
    // gli errori di chi scrive tornano con le parole di OPS: li correggerà
    if (risposta.status === 422) {
      const corpo = (await risposta.json().catch(() => null)) as { errore?: string } | null;
      return { errore: corpo?.errore ?? 'Controlla i dati inseriti e riprova.' };
    }
  } catch {
    /* OPS irraggiungibile: sotto si dice cosa fare */
  }
  return {
    errore:
      'In questo momento non riusciamo a ricevere il modulo. Riprova fra poco, oppure scrivici su Instagram.',
  };
}
