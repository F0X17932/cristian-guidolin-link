# Propuesta de rediseño y estructura — Landing de marca personal

Conjunta: **Aria** (contenido, estructura, marca) + **Fox** (landing, repo, dominio, deploy).
Fecha: 9 de octubre de 2026. Estado: **propuesta para aprobar por Cristian. Nada tocado en producción.**
Cotejo de datos hecho contra disco y contra la web viva (no hay dato inventado en este documento).

## 1. Qué hemos acordado Aria y Fox

- La landing es de **Cristian R. Guidolin** (marca personal, paraguas). FoxLabs es un proyecto dentro, no el destino.
- **Una sola oferta visible arriba: la guía gratis.** El CTA principal deja de ser WhatsApp.
- Se acaba el doble CTA. Cada botón extra divide la atención.
- Nombre público con la R en `h1`, `title`, `og:title` y footer.
- Fuera el violeta de FoxLabs en la marca personal: acento `#7850ff`.
- Instagram entra en Contenido; LinkedIn y GitHub se quedan.
- Nada de newsletter falsa, formularios muertos ni entrega por DM prometida.

## 2. Datos cotejados hoy (verificados)

| Dato | Estado real |
|---|---|
| Guía «4 tareas» en Drive | **Abre sin login.** Título real del documento: `guia-4-tareas-empleado-digital.pdf`. URL: https://drive.google.com/file/d/1NsBcFHpH2NjTbA7VaPHIDrOXrqqEoOFl/view?usp=sharing |
| Carpeta Claude Skills | Pública, se llama literalmente **«Claude Skills»** (38 carpetas). Base de estudio para diseño, reels y web. |
| Landing actual | Online (HTTP 200), sirve el `index.html` de 7.169 bytes del repo. |
| foxlabs.studio / bitcoinmurcia.com | Online (HTTP 200). Los enlaces de Proyectos funcionan. |
| LinkedIn | Online (HTTP 200). |
| Instagram `@cristianrguidolin` | **No verificable por HTTP** (Instagram responde 429 a automatización). Pendiente: confirmar a mano si el handle existe o hay que crearlo. |
| Dominio | **Contratado según Cristian. Cuál, sin confirmar.** No se toca DNS ni se compra nada hasta saberlo. |
| Email personal | Sin dirección autorizada. Hoy la web usa `fox@foxlabs.studio`, que es identidad de empresa, no personal. |
| «16 años», cierres de Bitcoin Murcia y Don Sato | Declarado por Cristian, sin fuente externa. Se publica como su relato, sin cifras de resultados. |

## 3. Estructura propuesta (5 bloques)

Columna A sticky en escritorio; una sola columna en móvil. Numeración en mono, la misma firma visual de la v1.

**A · Identidad (sticky ≥1000px)**
- Kicker mono: `Murcia, ES · freelancer tech`.
- `h1`: **Cristian R. Guidolin**.
- Línea de trabajo: «IA práctica. Menos tareas a mano.»
- Claim de marca en mono, como traza: «Blockchain fue. IA es. Lo que venga, también.»
- Chip de disponibilidad.
- CTA principal: **Abrir la guía gratis** → Drive.

**01 · La guía (arriba del feed, visible en móvil sin scroll)**
- Título: «4 tareas que puedes delegar a un empleado digital».
- Texto: correo, documentos, facturas y contenido; con Gmail, Drive, Sheets e Instagram.
- Botón: «Abrir la guía gratis». Sin pedir email.

**02 · Trabaja conmigo (compacto)**
- «¿Hay una tarea que te roba tiempo? Cuéntamela y vemos si merece automatizarse.»
- Botón: «Hablar conmigo» → wa.me/34647174123. Número visible +34 647 174 123.
- Correo: reservado hasta que Cristian autorice una dirección personal.

**03 · Proyectos**
- FoxLabs — Empleados digitales e IA para negocio. En activo. → foxlabs.studio.
- Rebidolin — **reservado**, bloque no publicado hasta definir nombre y destino.
- Bitcoin Murcia — capítulo cerrado.
- Don Sato — capítulo cerrado.

**04 · Contenido**
- LinkedIn, GitHub e Instagram `@cristianrguidolin`.

**Footer:** «Cristian R. Guidolin · Murcia» + `@cristianrguidolin`. Sin foxlabs.studio.

## 4. Qué NO va (y por qué)

- **Consultoría blockchain como tarjeta de captación:** se retira hasta que Cristian confirme que sigue ofreciéndola. Aria y Fox coincidimos: compite con la oferta de IA y añade un tercer CTA.
- **Rebidolin:** sin nombre público, sin descripción y sin URL. Nada de tarjetas «próximamente».
- **Rosa `#E91E63`:** fuera de la landing. Un solo acento; el rosa queda para carrusel.
- **Retrato generado:** si no hay foto real autorizada, sigue el monograma provisional. No se inventa cara.

## 5. Sistema visual (mantener, con dos correcciones)

- Tokens v1 correctos: papel `#F4F4F1`, tinta `#101014`, línea `#D5D5D2`, cero sombras, radios 4/6, curva única.
- **Corrección 1:** acento pasa de `#6D3BFF` a `#7850ff` (violeta de marca, no el de FoxLabs).
- **Corrección 2:** tipografías Archivo + Instrument Sans + IBM Plex Mono confirmadas. Nada de Inter.
- Estudio aplicable de la carpeta «Claude Skills»: `frontend-design` y `build-premium-website` (jerarquía, ritmo, contraste). Se analizan y se adaptan; no se copian ni se instalan en bruto.

## 6. Lo que necesitamos de Cristian para ejecutar

1. **Dominio exacto contratado** (y si hay que redirigir el otro). Es lo único bloqueante para el paso final.
2. **Email personal** para el contacto, o decisión de dejar solo WhatsApp en esta fase.
3. **Instagram:** ¿el handle `@cristianrguidolin` existe ya?
4. **Rebidolin:** ¿entra en el rediseño o se queda fuera?
5. **Foto real** para sustituir el monograma (opcional, no bloquea).

## 8. Rediseño visual v2 — maqueta real (9 oct)

Maqueta navegable en `/root/proyectos/cristian-guidolin-link/v2/` (index.html + styles.css). No es la versión de producción: vive en su propia carpeta hasta que Cristian apruebe.

Movimientos de diseño concretos, comparados con la v1:

1. **Acento `#6D3BFF` → `#7850ff`.** El violeta de FoxLabs salía en una página de marca personal. Corregido.
2. **El hero cambia de orden y de rol.** Nombre en display con la R en acento (`Cristian R.` / `Guidolin`), debajo la línea de trabajo «IA práctica. Menos tareas a mano.» en display, y el claim de guerrero pasa a mono con filete de acento: es la traza de identidad, no la explicación. Antes el claim grande competía con el nombre.
3. **La guía es el bloque fuerte, no una tarjeta más.** Bloque propio `01 Empieza aquí` con borde tinta 1,5px, etiqueta mono, título grande, cuatro chips (Gmail, Drive, Sheets, Instagram) y botón relleno en acento. Es el único elemento de peso visual alto en la mitad superior.
4. **CTA principal duplicado donde toca.** Botón oscuro en el hero (visible sin scroll en móvil, 344–415px) y botón de acento dentro del bloque. WhatsApp baja a secundario en `02 Trabaja conmigo`.
5. **Fuera las tres tarjetas de servicios.** Se sustituyen por un bloque compacto de contacto con teléfono visible.
6. **Fuera la consultoría blockchain como oferta.** Sin decisión de Cristian, no se publica.
7. **Proyectos con etiqueta de estado en acento** (`activo`) frente a `pasado` en gris. Se lee de un golpe qué está vivo.
8. **Instagram entra en Contenido**; LinkedIn y GitHub se mantienen en el mismo tratamiento de lista, sin iconos.
9. **Footer con identidad personal:** `Cristian R. Guidolin · Murcia, España` y `cristianguidolin.com · @cristianrguidolin`. Sin foxlabs.studio.

Validación real de la maqueta (Chromium headless, redimensionado de dispositivo):

| Comprobación | Escritorio 1440 | Móvil 390 |
|---|---|---|
| Desbordamiento horizontal | ninguno | ninguno |
| Fuentes cargadas | `loaded` | `loaded` |
| Guía visible sin scroll | sí (bloque a 64px) | sí (CTA a 344px, pliegue 844) |
| Enlaces en la página | 10 | 10 |
| Altura total | 1.506px | 2.291px |

Capturas: `shot-desktop-v2.png`, `shot-mobile-v2.png`, `fold-desktop-v2.png`, `fold-mobile-v2.png` en la misma carpeta `v2/`.

## 9. Datos confirmados por Cristian (9 oct)

- **Dominio contratado: `cristianguidolin.com`.** El canonical y el `og:url` de la maqueta ya lo usan. Aria había sugerido `cristianrguidolin.com`: descartado.
- **Contacto: WhatsApp + email `fox@foxlabs.studio`.** Se queda el correo actual, sin dirección personal nueva.
- **Instagram `@cristianrguidolin`: existe.** Verificado por Cristian (por HTTP no era comprobable).
- **Rebidolin: fuera.** Era un error de transcripción de Aria. No se publica ni se reserva bloque.

## 10. Plan de ejecución cuando apruebe

1. Escribir `DESIGN.md` v2 con los tokens corregidos y la estructura de 5 bloques.
2. Reconstruir `index.html` + `styles.css` en la rama local, numeración y Col A intactas.
3. Gates: sin desbordamiento en 1440 y 390, enlaces vivos, guía abre sin login, móvil primero.
4. Deploy a la URL de Vercel y evidencia (capturas escritorio y móvil).
5. Con el dominio confirmado: DNS, HTTPS, canonical, `sitemap.xml`, `robots.txt` y redirección del dominio viejo.