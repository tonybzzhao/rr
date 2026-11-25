# Hydrology layers in `GRAPH` (minor rivers, lakes, wetlands)

For the GIS writer (`Radeland_QGIS/RR_Info_Export/rrinfo_build.py`). Source: `hydrology_draft/hydrology.gpkg`
(`rivers_minor`, `lakes`, `wetlands`). The site draws these three optional keys of `GRAPH` in `js/app.js`. Leave a key out
or make it `[]` and the site draws nothing for it, as it does today.

```js
GRAPH = {pts, edges, land, water, links, paths, causeways,
         rivers:   [[order, [[x,y], [x,y], …]], …],   // polylines
         lakes:    [[[x,y], [x,y], …], …],             // rings, like water
         wetlands: [[[x,y], [x,y], …], …]}             // rings, like water
```

## Coordinates

These use the same space and the same `site((x * U, y * U))` transform as `land` and `water`, with points rounded to 1 decimal
(`[round(x, 1), round(y, 1)]`), as `_polys` writes them. In that space 1 km is about 2.25 units (`RR_UNITS_PER_KM`).

## `rivers`: `[order, line]`

- `order` is the integer Strahler order from `rivers_minor.strahler` (1 to 6 in the current draft).
- `line` holds two or more `[x,y]` points, open (no repeated first point).
- Export only map rivers (`map_500k = 1`). Don't export the major rivers that `water` already draws as polygons.
- Join the `rivers_minor` links that meet end to end and have the same order into one line per stem stretch, so there are
  fewer, longer lines. A line keeps one order. A new line starts where the order changes.
- Simplify each line once, using `_simplify(line, 0.3)` (about 130 m). The site simplifies again for its coarser zoom bands.
- Skip lines shorter than about 1 unit after simplifying.

The site draws rivers in the water colour, under all track and labels. Line width and visibility depend on the order:

| order | width (screen px) | shown from (map px per km) |
|-------|-------------------|----------------------------|
| 5–6   | 1.6               | always                     |
| 4     | 0.9               | 1.5                        |
| 3     | 0.9               | 3                          |
| 1–2   | 0.6               | 6                          |

Widths of 0.6 px (the coastline hairline), 0.9 px and 1.6 px are existing site stroke widths, all thinner than track (2.8 px). The fitted country view is about
0.5 px/km on a 1400 × 900 desktop and about 0.3 px/km on a phone, so orders 3 and below show only when zoomed in.

## `lakes`: rings

- `lakes` uses the format of `water`: each lake ring is a list of `[x,y]` points, open, with three or more points.
- Polygons with holes (islands): write the outer ring and then each hole as its own ring, wound the opposite way to the
  outer ring. The site fills with the non-zero rule, so an oppositely wound hole stays land.
- The site draws lakes exactly like `water`, in the same path. If the draft lakes replace the lakes that `water` already
  takes from `_T.lake`, take those out of `water` so each lake is drawn once. Otherwise export only the new lakes.
- Simplify and soften as `_polys` does (`_soft_ring(ring, 1.1)`), and drop lakes under about 1 unit² (0.2 km²).

## `wetlands`: rings

- `wetlands` uses the same ring format as `lakes`, holes included.
- The site draws wetlands as a light tint of the water colour over land, under lakes, rivers and track. It does not tell
  `kind` (coastal marsh, fen) apart, so the export doesn't need it.
- Simplify as for lakes. A coastal marsh can overlap the sea or a lake, and that's fine because the water is drawn on top.

## Size budget

`js/app.js` is about 2.3 MB today. Try to keep the three new layers under about 1.5 MB together. With roughly 10,000 map
links joined into stems and simplified at 0.3 units, that should fit. If it doesn't, drop the order 1 lines first.
