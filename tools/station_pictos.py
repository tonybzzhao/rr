"""Station facility pictograms from the user's icon set into index.html symbols (rr-picto-<id>).
python3 tools/station_pictos.py "<.../RR Info/Station>"

Run again whenever the source SVGs change: each symbol is replaced in place (or added before rr-picto-police). One colour, like the
rest of the set: black and white parts (fill or stroke) become currentColor, so they follow the light / dark theme. Signs that are
coloured by standard keep their own colours (user 2026-11-20): help point (assistance blue), first aid and AED (green)."""
import re, sys, os
SRC = sys.argv[1]
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICONS = {   # source file -> symbol id
    'assistance': 'help-point', 'business-centre': 'business-centre', 'changing-place': 'changing-places', 'dogs-water': 'dog-water',
    'first-aid': 'first-aid', 'mother-baby': 'baby-room', 'pharmacy': 'pharmacy', 'photobooth': 'photo-booth', 'seating': 'seating',
    'vending-machine': 'vending', 'water-fountain': 'water-fountain', 'AED': 'aed', 'animal-relief': 'animal-relief',
    'drop-off': 'drop-off', 'ticket-machine': 'ticket-machine',
}
KEEP_COLOUR = {'help-point', 'first-aid', 'aed'}
INK = re.compile(r'#(000000|000|ffffff|fffffe|fff)\b', re.I)
def symbol(f, k):
    s = open(os.path.join(SRC, f + '.svg')).read()
    vb = re.search(r'viewBox="([^"]+)"', s).group(1)
    body = re.search(r'<svg[^>]*>(.*)</svg>', s, re.S).group(1)
    body = re.sub(r'<title>.*?</title>|<desc>.*?</desc>', '', body, flags=re.S)
    body = re.sub(r'\s+id="[^"]*"', '', body)
    def colour(m):
        attr, val = m.group(1), m.group(2)
        if val in ('none', 'currentColor') or not val.startswith('#'): return m.group(0)
        return f'{attr}="{"currentColor" if INK.fullmatch(val) else "none"}"'
    if k not in KEEP_COLOUR: body = re.sub(r'\b(fill|stroke)="([^"]*)"', colour, body)
    body = re.sub(r'\s+', ' ', body).strip()
    return f'<symbol id="rr-picto-{k}" viewBox="{vb}">{body}</symbol>'
p = os.path.join(HERE, 'index.html'); h = open(p).read()
for f, k in ICONS.items():
    new = symbol(f, k); old = re.search(rf'<symbol id="rr-picto-{re.escape(k)}".*?</symbol>', h, re.S)
    h = h.replace(old.group(0), new) if old else h.replace('<symbol id="rr-picto-police"', new + '<symbol id="rr-picto-police"', 1)
    print(('updated' if old else 'added  '), k)
open(p, 'w').write(h)
