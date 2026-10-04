# Artifisio Illustrations Registry

This repository is the **open-source registry** for [Artifisio](https://artifisio.com) — a curated, AI-generated collection of themeable SVG illustration sets distributed via a developer CLI.

> **Auto-generated.** Maintained by Artifisio's sync pipeline. Do not send pull requests — [open an issue](../../issues) instead.

---

## ✨ Featured sets

A hand-picked selection from the collection — the same sets showcased on [artifisio.com](https://artifisio.com). Every illustration is themeable SVG; click any set to browse the full collection.

<table>
<tr>
<td align="center" valign="top" width="33%">
<a href="sets/strawhat"><img src="sets/strawhat/webp/character-taking-selfie.webp" width="220" alt="Strawhat" /></a>
<br /><br />
<strong><a href="sets/strawhat">Strawhat</a></strong><br />
<sub>1 illustrations</sub><br /><br />
<code>npx artifisio add strawhat</code>
</td>
<td align="center" valign="top" width="33%">
<a href="sets/surreality"><img src="sets/surreality/webp/teapot.webp" width="220" alt="Surreality" /></a>
<br />
<img src="sets/surreality/webp/pet.webp" width="46" />&nbsp;<img src="sets/surreality/webp/umbrella.webp" width="46" />&nbsp;<img src="sets/surreality/webp/bicycle-octagonal.webp" width="46" />&nbsp;<img src="sets/surreality/webp/clock-sundial.webp" width="46" />
<br /><br />
<strong><a href="sets/surreality">Surreality</a></strong><br />
<sub>12 illustrations</sub><br /><br />
<code>npx artifisio add surreality</code>
</td>
<td align="center" valign="top" width="33%">
<a href="sets/allanpoe"><img src="sets/allanpoe/webp/character-reading-book.webp" width="220" alt="allanpoe" /></a>
<br />
<img src="sets/allanpoe/webp/character-holding-magnifying-glass.webp" width="46" />&nbsp;<img src="sets/allanpoe/webp/superhero-cape.webp" width="46" />&nbsp;<img src="sets/allanpoe/webp/smiling-man.webp" width="46" />&nbsp;<img src="sets/allanpoe/webp/boy-holding-magnifying-glass.webp" width="46" />
<br /><br />
<strong><a href="sets/allanpoe">allanpoe</a></strong><br />
<sub>8 illustrations</sub><br /><br />
<code>npx artifisio add allanpoe</code>
</td>
</tr>
<tr>
<td align="center" valign="top" width="33%">
<a href="sets/unicorn-life"><img src="sets/unicorn-life/webp/shopping-basket.webp" width="220" alt="Unicorn Life" /></a>
<br />
<img src="sets/unicorn-life/webp/hearth-balloon.webp" width="46" />&nbsp;<img src="sets/unicorn-life/webp/key.webp" width="46" />&nbsp;<img src="sets/unicorn-life/webp/writing.webp" width="46" />&nbsp;<img src="sets/unicorn-life/webp/pizza.webp" width="46" />
<br /><br />
<strong><a href="sets/unicorn-life">Unicorn Life</a></strong><br />
<sub>14 illustrations</sub><br /><br />
<code>npx artifisio add unicorn-life</code>
</td>
<td align="center" valign="top" width="33%">
<a href="sets/simple-people"><img src="sets/simple-people/webp/vr-headset.webp" width="220" alt="Simple People" /></a>
<br />
<img src="sets/simple-people/webp/watering.webp" width="46" />&nbsp;<img src="sets/simple-people/webp/magnifying-glass.webp" width="46" />&nbsp;<img src="sets/simple-people/webp/binoculars.webp" width="46" />&nbsp;<img src="sets/simple-people/webp/whiteboard.webp" width="46" />
<br /><br />
<strong><a href="sets/simple-people">Simple People</a></strong><br />
<sub>19 illustrations</sub><br /><br />
<code>npx artifisio add simple-people</code>
</td>
<td align="center" valign="top" width="33%">
<a href="sets/scribble-people"><img src="sets/scribble-people/webp/404.webp" width="220" alt="scribble-people" /></a>
<br />
<img src="sets/scribble-people/webp/credit-card.webp" width="46" />&nbsp;<img src="sets/scribble-people/webp/vr-headset.webp" width="46" />&nbsp;<img src="sets/scribble-people/webp/shopping-bags.webp" width="46" />&nbsp;<img src="sets/scribble-people/webp/umbrella.webp" width="46" />
<br /><br />
<strong><a href="sets/scribble-people">scribble-people</a></strong><br />
<sub>20 illustrations</sub><br /><br />
<code>npx artifisio add scribble-people</code>
</td>
</tr>
<tr>
<td align="center" valign="top" width="33%">
<a href="sets/sumi-e-ink"><img src="sets/sumi-e-ink/webp/pruning-bonsai.webp" width="220" alt="Sumi-e Ink" /></a>
<br />
<img src="sets/sumi-e-ink/webp/mountain-laptop.webp" width="46" />&nbsp;<img src="sets/sumi-e-ink/webp/using-tablet-mountain.webp" width="46" />&nbsp;<img src="sets/sumi-e-ink/webp/meditating-mountains.webp" width="46" />&nbsp;<img src="sets/sumi-e-ink/webp/whisking-tea-mountains.webp" width="46" />
<br /><br />
<strong><a href="sets/sumi-e-ink">Sumi-e Ink</a></strong><br />
<sub>9 illustrations</sub><br /><br />
<code>npx artifisio add sumi-e-ink</code>
</td>
</tr>
</table>

---

## Install via CLI

```bash
# Browse available sets
npx artifisio search "<vibe>" --kind illustration

# Add a set to your project
npx artifisio add <set-slug>

# Download specific formats
npx artifisio add <set-slug> --format svg,png,webp,jpg

# Apply brand colours at install time
npx artifisio add <set-slug> --colors "primary=#4A7CFF,secondary=#FF6B35"

# Update installed sets
npx artifisio update <set-slug>
```

The CLI writes a `.artifisiorc.json` that pins each set's registry `version` and `manifestHash` for reproducible installs, and auto-generates a typed `index.ts` so illustrations are importable as constants.

---

## Direct CDN usage (jsDelivr)

```
https://cdn.jsdelivr.net/gh/artifisio/illustrations@<version>/sets/<slug>/svg/<illustration>.svg
```

**Example:**

```html
<img src="https://cdn.jsdelivr.net/gh/artifisio/illustrations@main/sets/landings/svg/hero.svg" />
```

Pin to a specific registry version for reproducible builds:

```
https://cdn.jsdelivr.net/gh/artifisio/illustrations@v2026.10.04-1742-3f7e2e4/sets/<slug>/svg/<illustration>.svg
```

---

## Palette theming

Every set exposes a **named palette** — colour slots mapped to CSS custom properties on the SVG root (e.g. `--artf-primary`, `--artf-secondary`). Illustrations adapt to any brand at render time without touching source files.

```css
/* Override with CSS at render time */
svg {
  --artf-primary: #your-brand-color;
}
```

```bash
# CLI: inject CSS vars at install time
npx artifisio add <set-slug> --colors "primary=#4A7CFF"

# CLI: bake colours directly into SVG fills (no runtime CSS needed)
npx artifisio add <set-slug> --colors "primary=#4A7CFF" --bake
```

---

## Available sets (21 sets · 461 illustrations)

| Name | Slug | Count | Tags | Formats |
| ---- | ---- | ----- | ---- | ------- |
| [Zenithglade](sets/zenithglade) | `zenithglade` | 32 |  | svg, webp |
| [Orbitab](sets/orbitab) | `orbitab` | 33 |  | svg, webp |
| [Fernforge](sets/fernforge) | `fernforge` | 25 |  | svg, webp |
| [Lumenaut](sets/lumenaut) | `lumenaut` | 35 |  | svg, webp |
| [Voltweave](sets/voltweave) | `voltweave` | 33 |  | svg, webp |
| [Fresh sourdough](sets/fresh-sourdough) | `fresh-sourdough` | 15 |  | svg, webp |
| [Rooftop garden](sets/rooftop-garden) | `rooftop-garden` | 36 |  | svg, webp |
| [deoxyribonucleic](sets/deoxyribonucleic) | `deoxyribonucleic` | 36 |  | svg, webp |
| [Bio astronaut](sets/bio-astronaut) | `bio-astronaut` | 36 |  | svg, webp |
| [Urban delivery](sets/urban-delivery) | `urban-delivery` | 33 |  | svg, webp |
| [Sumi-e Ink](sets/sumi-e-ink) | `sumi-e-ink` | 9 |  | svg, webp |
| [Geometric City](sets/geometric-city) | `geometric-city` | 10 |  | svg, webp |
| [Lakeside Yoga](sets/lakeside-yoga) | `lakeside-yoga` | 18 |  | svg, webp |
| [Sustainable](sets/sustainable) | `sustainable` | 9 |  | svg, webp |
| [Simple People](sets/simple-people) | `simple-people` | 19 |  | svg, webp |
| [scribble-people](sets/scribble-people) | `scribble-people` | 20 |  | svg, webp |
| [bottle-herb](sets/bottle-herb) | `bottle-herb` | 27 |  | svg, webp |
| [Unicorn Life](sets/unicorn-life) | `unicorn-life` | 14 |  | svg, webp |
| [Surreality](sets/surreality) | `surreality` | 12 |  | svg, webp |
| [Strawhat](sets/strawhat) | `strawhat` | 1 |  | svg, webp |
| [allanpoe](sets/allanpoe) | `allanpoe` | 8 |  | svg, webp |

---

## Registry details

| Field | Value |
| --- | --- |
| Registry version | `2026.10.04-1742-3f7e2e4` |
| CLI | [`artifisio`](https://www.npmjs.com/package/artifisio) |
| License | [CC BY 4.0](LICENSE) |
| Other kinds | [`index.json`](index.json) lists every per-kind registry (fonts, icons) |
| For agents | [`llms.txt`](llms.txt) |

Illustrations are generated and curated at [artifisio.com](https://artifisio.com).
