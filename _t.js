require('dotenv').config();
const app = require('./src/app');
const s = app.listen(0, async () => {
  const base = `http://localhost:${s.address().port}/api`;
  const show = async (label, path, opts={}) => { const r = await fetch(base+path, opts); console.log(label, r.status, r.headers.get('x-cache'), r.headers.get('x-cache-expiration')); return r; };
  const L = await fetch(base+'/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:'demo1@anime.local',password:'password123'})});
  const { token } = await L.json();
  const H = { Authorization:`Bearer ${token}`, 'Content-Type':'application/json' };
  await show('genres 1','/genres'); await show('genres 2','/genres');
  await show('me 1','/auth/me',{headers:H}); await show('me 2','/auth/me',{headers:H});
  await show('watchlist 1','/watchlist?limit=2',{headers:H}); await show('watchlist 2','/watchlist?limit=2',{headers:H});
  await show('animes 1','/animes?limit=2'); await show('animes 2','/animes?limit=2');
  const c = await fetch(base+'/genres',{method:'POST',headers:H,body:JSON.stringify({name:'zz-cache-test'})}); const g = await c.json(); console.log('create', c.status);
  await show('genres after write','/genres'); await show('watchlist after write','/watchlist?limit=2',{headers:H}); await show('animes after write','/animes?limit=2');
  await fetch(base+'/genres/'+g.id,{method:'DELETE',headers:H});
  await show('genres after delete','/genres');
  process.exit(0);
});
