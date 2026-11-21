"""RR Glyphs: a tiny web font whose only glyph is the RR airport pictogram (assets/glyphs/airport.svg) at U+2708 AIRPLANE.
python3 tools/make_glyph_font.py   ->  fonts/RRGlyphs.woff
Used through @font-face with unicode-range U+2708 at the head of every font stack, so the plane is ordinary text after an
airport's name: it flows, wraps and scales with the name and is never clipped (user 2026-11-20: the earlier inline-SVG icon
showed cropped). Metrics follow Frutiger Next (UPM 1000, ascent 905, descent 240, cap height 667): the plane is 800 units
tall, from -50 to 750, well inside the line box; the site puts one no-break space before it (narrow side bearings)."""
import re, os
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.cu2quPen import Cu2QuPen
from fontTools.pens.transformPen import TransformPen
from fontTools.svgLib.path import parse_path
from fontTools.pens.boundsPen import BoundsPen
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
svg = open(os.path.join(HERE, 'assets/glyphs/airport.svg')).read()
d = re.findall(r'<path d="([^"]+)"[^>]*fill="#000000"', svg)[0]
bp = BoundsPen(None); parse_path(d, bp); x0, y0, x1, y1 = bp.bounds          # SVG units, y down
H, BOTTOM, LSB, RSB = 800, -50, 30, 30
s = H / (y1 - y0); W = round((x1 - x0) * s)
pen = TTGlyphPen(None)
# SVG (y down) -> font units (y up): x' = (x - x0) s + LSB, y' = (y1 - y) s + BOTTOM
parse_path(d, TransformPen(Cu2QuPen(pen, max_err=1.0, reverse_direction=True), (s, 0, 0, -s, LSB - x0 * s, y1 * s + BOTTOM)))
plane = pen.glyph()
empty = TTGlyphPen(None).glyph()
fb = FontBuilder(1000, isTTF=True)
fb.setupGlyphOrder(['.notdef', 'airport'])
fb.setupCharacterMap({0x2708: 'airport'})
fb.setupGlyf({'.notdef': empty, 'airport': plane})
fb.setupHorizontalMetrics({'.notdef': (0, 0), 'airport': (LSB + W + RSB, LSB)})
fb.setupHorizontalHeader(ascent=905, descent=-240)
fb.setupNameTable({'familyName': 'RR Glyphs', 'styleName': 'Regular'})
fb.setupOS2(sTypoAscender=905, sTypoDescender=-240, sTypoLineGap=0, usWinAscent=905, usWinDescent=240, sCapHeight=667, sxHeight=480)
fb.setupPost()
fb.font.flavor = 'woff'
out = os.path.join(HERE, 'fonts/RRGlyphs.woff'); fb.save(out)
print(out, os.path.getsize(out), 'bytes; plane', W, 'x', H, 'advance', LSB + W + RSB)
