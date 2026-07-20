# Portfolio — Sherally Dompig

Persoonlijke portfolio-website, gebouwd voor het vak **Data Structures & Algorithms** (DSA 26).
Gemaakt met **HTML, CSS en JavaScript** — volledig responsive (desktop, tablet, mobiel), met een
professionele thema en een dag/nacht-modus.

**Live:** https://sheresitaaaa.github.io

## Pagina's

| Pagina | Bestand | Inhoud |
| --- | --- | --- |
| Home | `index.html` | Intro, statistieken, huidige rollen en uitgelicht werk |
| Over mij | `about.html` | Verhaal, academische opleidingen, skills-cirkel en certificaten |
| Werk | `work.html` | Projecten met beschrijving, technologieën en links naar artikelen |
| Contact | `contact.html` | E-mail, telefoon/vCard, GitHub en locatie (klikbare kaarten) |

### Projectartikelen

| Artikel | Bestand |
| --- | --- |
| PTC Hack-O-Topia | `hack-o-topia.html` |
| Hackomation | `hackomation.html` |
| InnoStarter | `innostarter.html` |

## Projectstructuur

```
portfolio-website/
├─ index.html
├─ about.html
├─ work.html
├─ contact.html
├─ hack-o-topia.html
├─ hackomation.html
├─ innostarter.html
├─ sherally-dompig.vcf
├─ css/
│  ├─ main.css       (thema, componenten, glow, responsive)
│  ├─ about.css      (Over mij: golf, pad, skills-cirkel, opleidingen)
│  ├─ work.css       (Werk: projectkaarten)
│  ├─ contact.css    (Contact: kaarten en glow)
│  └─ article.css    (artikelpagina's; gedeelde glow via main.css)
├─ js/
│  └─ main.js        (mobiel menu, dag/nacht-modus, scroll-animaties, jaartal)
└─ img/
   ├─ logo.png
   ├─ sherally.png
   ├─ sherally-cut.png
   ├─ unasat.png
   ├─ adek.jpg
   ├─ lyceum.jpg
   ├─ codettes.png
   ├─ backgrounds/
   │  └─ bg-about-main.svg
   ├─ dividers/
   │  └─ about-divider.svg
   └─ projects/
      ├─ hackotopia.png
      ├─ hackomation.png
      ├─ hackathons.png
      └─ portfolio.png
```

## Gebruikte technologieën

- **HTML5** — semantische opbouw per pagina.
- **CSS3** — custom properties (thema's), grid & flexbox, `clamp()`, `color-mix()`, animaties.
- **JavaScript (vanilla)** — geen frameworks of build-stap nodig.
- **Google Fonts** — Space Grotesk (koppen) en Inter (tekst).

## Functionaliteit

- **Responsive** ontwerp voor desktop, tablet en mobiel.
- **Dag/nacht-modus** (voorkeur wordt onthouden via `localStorage`).
- **Mobiel menu** met hamburger-knop.
- **Scroll-animaties** die verschijnen bij het scrollen (respecteert `prefers-reduced-motion`).
- **Roterende skills-cirkel** op *Over mij* die pauzeert wanneer je er met de muis overheen gaat,
  met een toegankelijke lijst als fallback voor mobiel en screenreaders.
- **Projectkaarten** linken door naar artikelen met bronnen (o.a. GitHub, YouTube).
- **Contactkaarten** openen e-mail, vCard-download, GitHub of Google Maps.
- Alle links gebruiken **relatieve paden** en zijn functioneel (geen dode links).

## Lokaal bekijken

Open `index.html` in de browser, of start een lokale server:

```bash
python -m http.server 8000
# daarna: http://localhost:8000
```

## Deployen (GitHub Pages)

De site staat in een `username.github.io`-repository en wordt automatisch gepubliceerd op
https://sheresitaaaa.github.io. Wijzigingen live zetten:

```bash
git add .
git commit -m "beschrijving van je wijziging"
git push
```

Na het pushen kan het 1–3 minuten duren voordat GitHub Pages de nieuwe versie toont.
