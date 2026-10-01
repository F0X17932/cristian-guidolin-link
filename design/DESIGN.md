# DESIGN.md — Linkador de Cristian Guidolin

Registro: **build** (auteur). Fecha: 2026-10-01. Repo: `F0X17932/cristian-guidolin-link`.

## Commit sheet

| Campo | Decisión |
|---|---|
| Producto | Linkador público de marca personal. Una sola página. |
| Audiencia | Freelancers, autónomos y empresas que llegan desde LinkedIn o redes. Móvil primero (~65%). |
| Superficie | Link-in-bio editorial: identidad + bloques de enlaces + contacto. |
| Peak (firma) | **Regla de índice**: cada bloque numerado (`01`, `02`…) en mono, con una regla vertical que crece al entrar en viewport. Es lo que se describe a un amigo: "la página con las secciones numeradas y la raya". |
| Anti-referencias | Nada de: tarjetas con sombra difusa, degradados morados, glassmorphism, `transition: all`, esquinas redondeadas 20px, foto circular con halo, contadores animados. |
| Motion budget | 3 gestos y ni uno más: `riseIn` de bloque, regla que crece, hover de tarjeta (borde + acento). Todo bajo `prefers-reduced-motion`. |
| Stack | HTML estático + CSS. Sin framework, sin build. Deploy Vercel. |

## Tono

Camino del guerrero. Sobrio, sin hype. Nada de "revoluciona tu negocio". Frases cortas, primera persona, hechos. "Blockchain fue. IA es. Lo que venga, también."

## Color (OKLCH, con fallback hex)

| Token | OKLCH | Hex aprox | Uso |
|---|---|---|---|
| `--papel` | `oklch(0.965 0.004 100)` | `#F4F4F1` | Fondo |
| `--papel-2` | `oklch(0.935 0.005 100)` | `#E8E8E3` | Fondos secundarios |
| `--tinta` | `oklch(0.19 0.012 275)` | `#101014` | Texto principal |
| `--suave` | `oklch(0.46 0.012 275)` | `#5A5B63` | Texto secundario |
| `--linea` | `oklch(0.87 0.008 275)` | `#D5D5D2` | Bordes 1px |
| `--acc` | `oklch(0.52 0.24 285)` | `#6D3BFF` | Único acento (violeta FoxLabs) |

Regla: **un solo acento**. El color no decora, solo señala la acción.

## Tipografía

- Display: **Archivo** (700/800) — titulares, nombre.
- Cuerpo: **Instrument Sans** (400/500) — prosa y tarjetas.
- Mono: **IBM Plex Mono** (400/500) — kickers, números de sección, datos.

Ninguna es Inter/Roboto/Open Sans (evita el slop por defecto).

## Sistema de forma

- Radios: 4px (chips), 6px (tarjetas). Nada más.
- **Cero sombras.** Jerarquía por borde 1px, espacio y peso tipográfico.
- Escala de espacio: 4/8/12/16/24/32/48/64/96.
- Una sola curva: `cubic-bezier(0.22, 1, 0.36, 1)`.

## Estructura

- **Col A (sticky ≥1000px):** kicker mono, nombre en display, claim, chip de disponibilidad, CTA principal, nota de respuesta.
- **Col B:** `01 Trabaja conmigo` (3 tarjetas) · `02 Proyectos` · `03 Contenido` · `04 Contacto`.
- **Footer real:** identidad, ubicación, año, nota de privacidad honesta.

## Pendientes conocidos

- Retrato de Cristian: no hay foto real disponible → monograma tipográfico provisional.
- Agente que cualifica: v1 usa contacto directo (WhatsApp/email). El agente real es fase 2.
- Dominio propio: no comprado. Se sirve en URL de Vercel hasta entonces.
- Newsletter: sin herramienta conectada, fuera de la v1.