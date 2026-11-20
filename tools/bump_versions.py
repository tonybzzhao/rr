"""Set the ?v= cache-busting versions in index.html to each asset's content hash (run before every commit)."""
import hashlib, re, os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
s = open('index.html').read()
for f in ['css/app.css', 'css/shapes.css', 'js/trains.js', 'js/app.js']:
    s = re.sub(re.escape(f) + r'\?v=[0-9a-f]+', f + '?v=' + hashlib.md5(open(f, 'rb').read()).hexdigest()[:8], s)
open('index.html', 'w').write(s)
