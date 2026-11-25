# Major rivers and lakes in `GRAPH`

This is for the GIS writer (`Radeland_QGIS/RR_Info_Export/rrinfo_build.py`). The data comes from `hydrology_draft/hydrology.gpkg`.

The rule is: **"only major water bodies in web map, details in GIS."** The site draws major rivers and major lakes, and nothing
else: no minor streams, no small lakes and no wetlands, at any zoom. Leave a key out, or make it `[]`, and the site draws
nothing for it, as it does today.

```js
GRAPH = {pts, edges, land, water, links, paths, causeways,
         rivers: [[[x,y], [x,y], …], …],   // major rivers: open polylines
         river_w: [w, …],                  // optional: each river's width in km, same order as rivers
         lakes:  [[[x,y], [x,y], …], …]}   // major lakes: rings, like water
```

## Coordinates

Use the same space and the same `site((x * U, y * U))` transform as `land` and `water`, with points rounded to 1 decimal.
1 km is about 2.25 units.

## `rivers`: major rivers only

- A major river is a named or main river: the export's `major` flag, or a Strahler order at or above the export's threshold.
  The writer chooses the threshold.
- Each river is two or more `[x,y]` points, open, with no repeated first point. Join links end to end into one line per
  river stretch, and simplify once with `_simplify(line, 0.3)`.
- Leave out stretches that `water` already draws as a river polygon, so a river isn't drawn twice.
- The site draws each river at its true width (`river_w`, km; 0.2 km where it is missing), never thinner than 1.6 px, in the
  water colour under all track and labels. So a river is a hairline at national scale and widens to its real size when zoomed in.
  To make a river grow downstream, split it into stretches, each with its own width.

## `lakes`: major lakes and reservoirs only

- A major lake is one with the export's `major` flag, or an area of about 10 km² or more.
- Rings use the format of `water`: lists of `[x,y]` points, open, with three or more points. An island is a ring of its own,
  wound the opposite way to the lake's outer ring (the fill rule is non-zero).
- The site adds lakes to the `water` path, so they are drawn exactly like water. If a lake is already in `water` (from
  `_T.lake`), export it in only one of the two.
- Simplify and soften as `_polys` does (`_soft_ring(ring, 1.1)`).
