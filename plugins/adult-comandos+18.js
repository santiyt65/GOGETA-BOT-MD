import axios from 'axios';
import fetch from 'node-fetch';
const handler = async (m, {command, conn}) => {
  const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.adult_comandos

  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw tradutor.texto1;

  if (command == 'nsfwloli') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/nsfwloli.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwfoot') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/nsfwfoot.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwass') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/nsfwass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwbdsm') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/nsfwbdsm.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwcum') {
    const res = `${global.MyApiRestBaseUrl}/api/nsfw/nsfwcum&apikey=${global.MyApiRestApikey}`;
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwero') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/nsfwero.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwfemdom') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/nsfwfendom.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwglass') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/nsfwglass.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'hentai') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/hentai.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfworgy') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/nsfworgy.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'tetas') {
    const resError = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/tetas.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'booty') {
    const resError = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/booty.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'ecchi') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/ecchi.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'furro') {
    const res = (await axios.get('https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/furro.json')).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'trapito') {
    const res = await fetch(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/trapito.json`);
    const json = await res.json();
    const url = json.url;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'imagenlesbians') {
    const resError = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/imagenlesbians.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'panties') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/panties.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'pene') {
    const res = `${global.MyApiRestBaseUrl}/api/adult/pene?apikey=${global.MyApiRestApikey}`;
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'porno') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/porno.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'randomxxx') {
    const rawjsonn = [''];
    const rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())];
    const res = (await axios.get(rawjson)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'pechos') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/pechos.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'yaoi') {
    const res = await fetch(`https://nekobot.xyz/api/image?type=yaoi`);
    const json = await res.json();
    const url = json.message;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'yaoi2') {
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`);
    const json = await res.json();
    const url = json.link;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'yuri') {
    const res = (await axios.get(`https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/yuri.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'yuri2') {
    const resError = (await axios.get('https://github.com/santiyt65/GOGETA-BOT/blob/main/src/JSON/yuri2.json')).data;
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`);
    const json = await res.json();
    let url = json.link;
    if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }
};
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.tags = ['nsfw'];
export default handler;
