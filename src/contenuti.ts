/**
 * I testi e i link del sito, tutti qui.
 *
 * Staccati dall'impaginazione apposta: correggere una frase, aggiungere un
 * link o cambiare una foto non deve voler dire cercare dentro le pagine. Le
 * foto si mettono in `public/immagini/` con il nome scritto qui accanto a ogni
 * sezione: se il file c'è si vede la foto, altrimenti un disegno al suo posto.
 */

import type { TipoLink } from './components/IconaLink';

type Link = { tipo: TipoLink; url: string };

/** Dove scriverci: nella pagina contatti, in fondo a ogni pagina, nell'informativa. */
export const EMAIL = 'info@zerodarkteam.it';

/** Il gestionale della squadra: il pulsante «Entra in OPS» porta qui. */
export const INDIRIZZO_GESTIONALE = 'https://ops.zerodarkteam.it';

/** I nostri canali. `descrizione` finisce nel titolo dell'icona: di chi è il canale. */
export const LINK_SOCIAL: (Link & { descrizione: string })[] = [
  { tipo: 'instagram', descrizione: '@zero.dark.team', url: 'https://www.instagram.com/zero.dark.team/' },
  { tipo: 'youtube', descrizione: 'SAT & Gaming', url: 'https://www.youtube.com/@SATgaming1' },
];

/** Tre numeri su di noi, sotto «chi siamo»: si leggono prima del testo. */
export const FATTI = [
  { valore: '2024', testo: 'l’anno in cui è nata la squadra' },
  { valore: 'Torino', testo: 'dove giochiamo; per le gare, tutta Italia' },
  { valore: '2 settimane', testo: 'ogni quanto ci alleniamo, più gare, corsi ed eventi' },
];

/** Cosa ci appassiona: la riga sotto «chi siamo». */
export const INTERESSI = [
  {
    nome: 'Softair',
    testo:
      'Il gioco tattico come lo intendiamo noi: pianificazione, movimento coordinato, comunicazione. Vince la squadra, non il singolo.',
  },
  {
    nome: 'Trekking',
    testo:
      'Chilometri a piedi con lo zaino in spalla, su e giù per boschi e colline. Le pattuglie lunghe si vincono con le gambe e con il fiato, e si allenano camminando.',
  },
  {
    nome: 'Cartografia',
    testo:
      'Carta topografica, bussola e coordinate. Il percorso si decide prima di partire, e quando il GPS tace la carta parla ancora.',
  },
  {
    nome: 'ATAK',
    testo:
      'La mappa condivisa sul telefono: posizioni, obiettivi e rotte della squadra in tempo reale. La tecnologia al servizio della pattuglia.',
  },
];

/**
 * I valori del softair: il codice che ci diamo in campo.
 *
 * Il softair si regge sulla parola: nessun arbitro vede ogni colpo, e il gioco
 * funziona solo se chi viene colpito lo dichiara. Tutto il resto viene da lì.
 */
export const VALORI = [
  {
    nome: 'Lealtà',
    testo: 'Chi è colpito lo dichiara, sempre. Il gioco si regge sulla parola di chi gioca, e la nostra vale.',
  },
  {
    nome: 'Rispetto',
    testo: 'Per gli avversari, per gli arbitri, per le regole. Si stringe la mano prima e dopo, qualunque sia il risultato.',
  },
  {
    nome: 'Squadra',
    testo: 'Nessuno resta indietro. Si parte insieme, si arriva insieme: il più lento detta il passo, non il più veloce.',
  },
  {
    nome: 'Sicurezza',
    testo: 'Protezioni sempre indossate, regole di ingaggio rispettate, repliche in regola. Il divertimento viene dopo, mai prima.',
  },
  {
    nome: 'Preparazione',
    testo: 'Ci si allena, si studia, si prova. In campo si fa quello che si è preparato, e si impara da quello che non ha funzionato.',
  },
  {
    nome: 'Natura',
    testo: 'Giochiamo nei boschi e li lasciamo come li abbiamo trovati. Niente resta a terra, niente si rovina.',
  },
];

/** Le nostre ambizioni: i campi dove vogliamo misurarci. */
export const AMBIZIONI = [
  {
    sigla: 'PCR',
    nome: 'Pattuglia a Corto Raggio',
    foto: 'pcr.jpg',
    codice: 'OBJ · SHORT RANGE',
    testo:
      'Il circuito FIGT dell’azione: obiettivi ravvicinati uno dopo l’altro, poche ore di gioco intenso. Conta l’esecuzione — ogni prova fatta bene porta punti, anche se poi la squadra viene fermata. Radio, coordinazione e sangue freddo.',
  },
  {
    sigla: 'PLR',
    nome: 'Pattuglia a Lungo Raggio',
    foto: 'plr.jpg',
    codice: 'NAV · LONG RANGE',
    testo:
      'Il campionato FIGT più duro: missioni da molte ore, anche di notte, con infiltrazione e navigazione libera su terreni vasti. Carta e bussola, gestione di acqua ed energie, silenzio. Arriva in fondo chi resta lucido fino all’ultimo obiettivo.',
  },
  {
    sigla: 'MILSIM',
    nome: 'Simulazione militare',
    foto: 'milsim.jpg',
    codice: 'OPS · MULTI-DAY',
    testo:
      'Eventi di più giorni con scenari realistici: catena di comando, ruoli, logistica, briefing e debriefing. Si vive in campo, si pianifica e si esegue come un’unità vera.',
  },
  {
    sigla: 'CQB',
    nome: 'Close Quarter Battle',
    foto: 'cqb.jpg',
    codice: 'CQB · ROOM CLEARING',
    testo:
      'Il combattimento negli spazi stretti: edifici, stanze, corridoi. Ingresso, bonifica degli ambienti, controllo degli angoli, coppie che si coprono a vicenda e comunicazione ridotta all’essenziale. Velocità controllata e disciplina: qui un passo sbagliato si paga subito.',
  },
  {
    sigla: 'SNIPER & SPOTTER',
    nome: 'La coppia di precisione',
    foto: 'sniper.jpg',
    codice: 'RECON · SNIPER TEAM',
    testo:
      'Due persone, un lavoro solo. Lo spotter osserva, trova il bersaglio, stima distanza e vento e guida; lo sniper esegue. Mimetismo, pazienza, lettura del terreno e ore di silenzio in appostamento: si vince senza farsi vedere.',
  },
  {
    sigla: 'CORSI',
    nome: 'Formazione interna',
    foto: 'corsi.jpg',
    codice: 'TRN · IN-HOUSE',
    testo:
      'Ci aggiorniamo tra di noi: cartografia e orientamento, radio e procedure di comunicazione, ATAK per condividere posizioni e obiettivi. Chi sa una cosa la insegna agli altri, e la squadra cresce insieme.',
  },
];

/**
 * L'associazione di riferimento: e' lei, e non la squadra, il soggetto con cui
 * si firma — titolare dei dati del modulo, affiliata a federazione ed ente.
 */
export const ASSOCIAZIONE = 'SAT & Gaming ASD';

/** Le affiliazioni, con i loro canali ufficiali. */
export const AFFILIAZIONI = [
  {
    sigla: 'FIGT',
    nome: 'Federazione Italiana Giochi Tattici · ASNWG',
    logo: { file: 'figt.webp', chiaro: false },
    testo: 'La federazione del softair in Italia: regolamenti, campionati PCR e PLR, tesseramento.',
    link: [
      { tipo: 'sito', url: 'https://www.figt.it/' },
      { tipo: 'facebook', url: 'https://www.facebook.com/figt.it/?locale=it_IT' },
      { tipo: 'instagram', url: 'https://www.instagram.com/figtasnwg/' },
      { tipo: 'youtube', url: 'https://www.youtube.com/channel/UCJUQKzB4ydwMnJ5XsWs8Hsg' },
    ] as Link[],
  },
  {
    sigla: 'CORP',
    nome: 'Comitato Regionale Piemonte · FIGT',
    logo: { file: 'corp.webp', chiaro: false },
    testo: 'Il comitato regionale della FIGT: il riferimento delle squadre piemontesi.',
    link: [{ tipo: 'facebook', url: 'https://www.facebook.com/corpfigt' }] as Link[],
  },
  {
    sigla: 'ACSI',
    nome: 'Associazione Centri Sportivi Italiani',
    // il logo nasce su un quadrato bianco: su fondo scuro gli serve la sua piastrina
    logo: { file: 'acsi.webp', chiaro: true },
    testo: 'L’ente di promozione sportiva a cui siamo affiliati.',
    link: [
      { tipo: 'sito', url: 'https://www.acsi.it/' },
      { tipo: 'facebook', url: 'https://www.facebook.com/acsi1960/?locale=it_IT' },
      { tipo: 'instagram', url: 'https://www.instagram.com/acsisocial/' },
    ] as Link[],
  },
];

// --------------------------------------------------------------- il softair
// La pagina per chi non ha mai giocato: cos'è, come si gioca, cosa serve.
// È la prima porta del sito — chi arriva da una ricerca passa di qui prima
// ancora di sapere chi siamo.

/** Le regole che valgono su ogni campo, prima di qualsiasi regolamento. */
export const REGOLE = [
  {
    nome: 'Chi è colpito lo dichiara',
    testo:
      'Nessun arbitro vede ogni colpo. Quando un pallino arriva, si alza il braccio, si dice «colpito» e si esce dal gioco. È la regola che tiene in piedi tutto lo sport: chi non si dichiara, fuori dal campo.',
  },
  {
    nome: 'Niente contatto fisico',
    testo:
      'È una simulazione, non un combattimento. Non ci si tocca, non si spinge, non si strattona: chi si trova a un passo risolve con la voce, non con le mani.',
  },
  {
    nome: 'La regola del «bang»',
    testo:
      'A distanza ravvicinata non si spara: si dice «bang» e l’avversario si considera colpito. Costa un secondo, evita un livido e vale come una raffica.',
  },
  {
    nome: 'Le protezioni non si tolgono',
    testo:
      'Occhiali balistici o maschera integrale, certificati, indossati per tutto il tempo in area di gioco. Un pallino nell’occhio non si rimedia: qui non esistono eccezioni.',
  },
  {
    nome: 'Sicura e potenza',
    testo:
      'Fuori dal gioco la replica è in sicura e scarica. La potenza si misura al cronografo prima di entrare: sopra il limite del regolamento non si gioca.',
  },
  {
    nome: 'Il campo si lascia com’era',
    testo:
      'Boschi, cascine, capannoni: si gioca a casa di qualcun altro. Niente a terra, niente rotto. Il campo di oggi deve esserci anche il mese prossimo.',
  },
];

/** Cosa serve per giocare: l'ordine è quello che conta davvero. */
export const ATTREZZATURA = [
  {
    nome: 'Le protezioni',
    dettaglio: 'obbligatorie',
    testo:
      'Occhiali balistici certificati o maschera integrale. È l’unica voce su cui non si risparmia: si compra buona la prima volta e dura anni. Chi porta gli occhiali da vista sceglie una maschera che li contenga.',
  },
  {
    nome: 'La replica',
    dettaglio: 'elettrica, a gas o a molla',
    testo:
      'Le elettriche (AEG) sono le più diffuse fra chi inizia: affidabili, facili da far riparare, tante da scegliere. Le repliche a gas sono più realistiche e più delicate, quelle a molla più semplici e più lente.',
  },
  {
    nome: 'Mimetica e scarponi',
    dettaglio: 'comodità prima di tutto',
    testo:
      'Una mimetica coerente con quella della squadra e scarponi alti che tengano la caviglia. Si cammina molto, spesso fuori sentiero: le scarpe sbagliate rovinano la giornata più di qualsiasi avversario.',
  },
  {
    nome: 'Radio e navigazione',
    dettaglio: 'quando si cresce',
    testo:
      'Radio PMR per parlarsi, bussola e carta per muoversi, ATAK sul telefono per vedere dov’è la squadra. Non serve alla prima giornata: serve il giorno che si inizia a giocare per davvero.',
  },
  {
    nome: 'Acqua, cibo e zaino',
    dettaglio: 'sempre',
    testo:
      'Una pattuglia lunga si perde per la sete, non per i colpi. Almeno due litri d’acqua, qualcosa da mangiare, un cambio asciutto e una torcia se si gioca fino a sera.',
  },
  {
    nome: 'Per la prima volta: niente',
    dettaglio: 'te la diamo noi',
    testo:
      'Alla prima giornata non devi comprare nulla: replica, protezioni e tutto quello che serve lo portiamo noi. Tu porta scarpe comode e voglia di camminare. Prima si prova, poi semmai si compra — e con un consiglio in più.',
  },
];

/** Le domande che arrivano sempre, con le risposte che diamo sempre. */
export const DOMANDE = [
  {
    domanda: 'Non ho mai giocato: posso venire lo stesso?',
    risposta:
      'È il caso più normale che ci sia. Alla prima giornata nessuno ti chiede di essere pronto: si viene, si guarda, si prova, e qualcuno della squadra ti sta accanto e ti spiega cosa sta succedendo.',
  },
  {
    domanda: 'Devo comprare l’attrezzatura per provare?',
    risposta:
      'No, e non devi nemmeno procurartela in prestito: per la prima giornata ti diamo noi tutto quello che serve — replica, protezioni, il resto. Tu porta scarpe comode, qualcosa da bere e abiti che non ti dispiaccia sporcare. Si compra dopo, se hai deciso di restare, e ti aiutiamo a scegliere.',
  },
  {
    domanda: 'Fa male?',
    risposta:
      'Un pallino si sente, e a distanza ravvicinata lascia un segno che passa in un paio di giorni. Con gli abiti giusti e le protezioni è un fastidio di qualche secondo: per questo esiste la regola del «bang», e per questo non si spara addosso a chi è già colpito.',
  },
  {
    domanda: 'Che età serve?',
    risposta:
      'Si gioca da maggiorenni. Per i minorenni servono il consenso di chi ne ha la responsabilità e il rispetto delle regole della federazione e del campo: se è il tuo caso, chiedici e ti diciamo come si fa.',
  },
  {
    domanda: 'È legale?',
    risposta:
      'Sì. Per la legge italiana le repliche da softair sono giocattoli: non superano un joule, hanno l’estremità rossa e si vendono ai maggiorenni. Si usano nei campi e negli eventi, si trasportano custodite e non si portano in giro: fuori dal campo restano nella borsa.',
  },
  {
    domanda: 'Serve il certificato medico?',
    risposta:
      'Per la prima giornata no: ti copre l’assicurazione giornaliera della federazione. Se poi decidi di restare, il tesseramento chiede il certificato medico sportivo — lo stesso di qualsiasi altro sport.',
  },
  {
    domanda: 'Quanto dura una giornata?',
    risposta:
      'Una giornata normale sta in mezza giornata o poco più. Le gare sono un’altra cosa: una pattuglia a corto raggio dura qualche ora, una a lungo raggio può andare avanti tutta la notte.',
  },
  {
    domanda: 'Devo essere allenato?',
    risposta:
      'Per venire a provare, no: si cammina insieme e il passo lo detta il più lento. Per le gare lunghe sì, e infatti ci alleniamo: chilometri con lo zaino, carta e bussola, e molta pazienza.',
  },
  {
    domanda: 'Si gioca tutto l’anno?',
    risposta:
      'Sì. Ci troviamo ogni due settimane, d’estate e d’inverno, e in mezzo ci sono gare, corsi ed eventi. Il freddo e la pioggia fanno parte del gioco: cambiano l’equipaggiamento, non il programma.',
  },
];
