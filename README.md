# Zero Dark Team · il sito

Il sito pubblico della squadra: **www.zerodarkteam.it**.

Chi siamo, i valori del softair, le nostre ambizioni (PCR, PLR, MILSIM, CQB,
Sniper & Spotter, corsi), le affiliazioni e il modulo **«Vuoi provare?»**.

## Com'è fatto

Un'applicazione Next.js piccola, separata dal gestionale (OPS). Gira sulla
stessa macchina, in un suo contenitore, e il proxy di OPS le manda il
dominio `www`.

Il modulo «Vuoi provare?» **non salva niente qui**: consegna il contatto a OPS
attraverso la sua porta per i siti esterni (`POST /api/contatti`), con una
chiave generata in OPS da *Contatti → Collega un sito*. Il contatto finisce fra
quelli da chiamare, e a chi segue i nuovi arriva una notifica.

## Dove si cambia cosa

- **Testi e link**: `src/contenuti.ts`.
- **Foto delle missioni**: in `public/immagini/`, con il nome scritto in
  `contenuti.ts` (`pcr.jpg`, `plr.jpg`, `milsim.jpg`, `cqb.jpg`,
  `sniper.jpg`, `corsi.jpg`). Finché la foto manca, al suo posto si vede una
  carta topografica disegnata.
- **Copertina e loghi**: `public/immagini/`.

## In locale

```bash
npm install
npm run dev
```

Per provare il modulo serve un OPS raggiungibile e una sua chiave: copiare
`.env.example` in `.env.local` e compilare `OPS_URL` e `CHIAVE_OPS`.

## Sul server

In `/opt/zerodarkteam-site`, con il file `.env` accanto (permessi 600, la
chiave dentro):

```bash
git pull --ff-only
docker compose up -d --build
```

Il proxy lo trova nella cartella `siti/` di OPS
(`/opt/gestionale/siti/zerodarkteam.caddy`), che manda `www.zerodarkteam.it`
a questo contenitore e il dominio senza www a `www`.
