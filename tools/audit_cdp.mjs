// headless Chrome site audit via CDP: node audit_cdp.mjs <url> <width> <height> [mobile]
import { spawn } from 'node:child_process';
const [url, w, h, mob] = process.argv.slice(2); const port = 9300 + Math.floor(Math.random() * 500);
const ch = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=/private/tmp/claude-501/cdp${port}`, `--window-size=${w},${h}`, 'about:blank'], { stdio: 'ignore' });
let tabs; for (let i = 0; i < 50; i++) { try { tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); break } catch { await new Promise(r => setTimeout(r, 200)) } }
const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl); await new Promise(r => ws.onopen = r);
let id = 0; const pend = {}; ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) { pend[d.id](d); delete pend[d.id] } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })) });
await send('Emulation.setDeviceMetricsOverride', { width: +w, height: +h, deviceScaleFactor: 1, mobile: !!mob });
if (mob) { await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 }); await send('Emulation.setUserAgentOverride', { userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36' }) }
await send('Page.enable'); await send('Page.navigate', { url }); await new Promise(r => setTimeout(r, 4000)); await send('Emulation.setDeviceMetricsOverride', { width: +w, height: +h, deviceScaleFactor: 1, mobile: !!mob, screenWidth: +w, screenHeight: +h }); await send('Page.reload'); await new Promise(r => setTimeout(r, 6000));
const res = await send('Runtime.evaluate', { expression: `(async()=>{const s=await (await fetch('tools/site_audit.js?'+Date.now())).text();const r=await eval(s);return JSON.stringify({ok:r.ok,fails:Object.keys(r.counts).filter(k=>!/checked$/.test(k)).map(k=>[k,r.counts[k]]),checked:Object.keys(r.counts).filter(k=>/checked$/.test(k)).length,examples:r.examples?Object.fromEntries(Object.entries(r.examples).slice(0,6)):null})})()`, awaitPromise: true, returnByValue: true, timeout: 900000 });
console.log(res.result?.result?.value ?? JSON.stringify(res.result).slice(0, 2000)); ws.close(); ch.kill();
