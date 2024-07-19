import { watchFile, unwatchFile } from "fs";
import chalk from 'chalk';
import { fileURLToPath } from "url";
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { match } from "assert";
import exp from "constants";


/*para agregar mas APIs asegurate de poner goblal.apiname = ['APIkey']  */  /* By skid */  /* By skid 0-0 */

global.openai_key = 'sk-o';
/* Obten tu API key en este enlace: httform.openai.com/account/org-setting */


global.openai_org_id = 'org-3'
/* obten tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */


global.MyApiRestBaseUrl1 = 'https://api.cafirexos.com'; //Bloqueo de IP -> usar esta para no se bloqueado: 'https://api-santiyt65.onrender.com';
global.MyAPiRestApikey = 'santiyt65'


global.MyApiRestBaseUrl2 = 'https://api-santiyt65-dcaf9040.koyeb.app';

global.MyApiRestBaseUrl3 = 'https://api-santiyt65.onrender.com';


global.keysZens = ['Lu0langNgentot', 'c245db922', '37CC8459916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34deBa', 'Ob917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4d59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed22c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxdO9', 'ebb6251ccOOf9c63'];
global.keysxteam = keysxteammm[Match.floor(keysxteammm.length * Match.random())];
global.keysneoxrrr = ['5VC9RvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['Gata_Dios']; // ['santiyt6_2']
global.itsrose = ['4b146102c4d5000809da9d1ff'];


global.APIs = {
    CFROSAPI: 'https://api.cafirexos.com',
    xteam: 'https://api.xtem.xyz',
    dzx: 'https://api.dhamzxploin.my.id',
    lol: 'https://api.lolhuman.xyz',
    neoxr: 'https://spi.neoxr.my.id',
    zenzapis: 'https://api.zahwazein.xyz',
    akuari: 'https://api.akuari.my.id',
    akuari2: 'https://apimu.my.id',
    fgmods: 'https://api-fgmod.ddn.net',
    botcahx: 'https://api.botcahx.biz.id',
    ibeng: 'https://api.ibeng.tech/docs',
    rose:'https://api.itsrose.site',
    popcat:'https://api.popcat.xyz',
    xcoders:'https://api-xcoders.site',
    vihangayt:'https://vihangayt.me',
    erdwpe: 'https://api.erdwpe.com',
    xryroinee: 'https://api.xyroinee.xyz',
    nekobot: 'httpss://nekobot.xyz',
    BK9: 'https://api.bk9.site'
}
global.APIKeys = {
    'https://api.xteam.xyz': '${keysxteam}',
    'https://api.lolhuman.xyz': 'GataDios',
    'https://api.neoxr.my.id': '${keysneoxr}',
    'https://api.zahwazein.xyz': '${keysxxx}',
    'https://api-ggmods.ddns.net': 'fg-dylux',
    'https://api.botcahx.biz.id': 'admin',
    'https://api.ibeng.tech/docs': 'tamvan',
    'https://api.itsrose.site': 'Rs-Zeltoria',
    'https://api-xcoders.site': 'Frieren',
    'https://api.xyroinee.xyz': 'wugflzFEh6',
    'https://apikasu.onrender.com': 'Apikey',
}


/** ***************************/
global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
         const emoticon = {
             level: '🧬 Nivel',
             limit: '💎 Diamante',
             exp: '⚡ Experiencia',
             bank: '🏦 Banco',
             diamond: '💎 Diamante',
             health: '❤️ Salud',
             kyubi: '🌀 Magia',
             joincount: '🪙 Token',
             emerald: '💚 Esmeralda',
             stamina: '✨ Energía',
             role: '💪 Rango',
             premium: '🎟️ Premium',
             pointxp: '📧 Puntos Exp',
             gold: '👑 Oro',
             trash: '🗑 Basura',
             crystal: '🔮 Cristal',
             intelligence: '🧠 Inteligencia',
             string: '🕸️ Cuerda',
             keygold: '🔑 Llave de Oro',
             keyiron: '🗝️ Llave de Hierro',
             emas: '🪅 Piñata',
             fishingrod: '🎣 Caña de Pescar',
             gems: '🍀 Gemas',
             magicwand: '⚕️ Varita Mágica',
             mana: '🪄 Hechizo',
             agility: '🤸‍♂️ Agilidad',
             darkcrystal: '♠️ Cristal Oscuro',
             iron: '⛓️ Hierro',
             rock: '🪨 Roca',
             potion: '🥤 Poción',
             superior: '💼 Superior',
             robo: '🚔 Robo',
             upgrader: '🧰 Aumentar Mejora',
             wood: '🪵 Madera',
             strength: '🦹‍ ♀️ Fuerza',
             arc: '🏹 Arco',
             armor: '🥼 Armadura',
             bow: '🏹 Super Arco',
             pickaxe: '⛏️ Pico',
             sword: '⚔️ Espada',
             common: '📦 Caja Común',
             uncoommon: '🥡 Caja Poco Común',
             mythic: '🗳️ Caja Mítico',
             legendary: '🎁 Caja Legendaria',
             petFood: '🍖 Alimento para Mascota',
             pet: '🍱 Caja para Mascota',
             bibitanggur: '🍇 Semilla de Uva',
             bibitapel: '🍎 Semilla de Manzana',
             bibitjeruk: '🍊 Semillas de naranja',
             bibitmangga: '🥭 Semilla de Mango',
             bibitpisang: '🍌 Semillas de Plátano',
             ayam: '🐓 Pollo',
             babi: '🐖 Puerco',
             Jabali: '🐗 Jabali',
             bull: '🐃 Toro',
             buaya: '🐊 Cocodrilo',
             cat: '🐈 Gato',
             centaur: '🐐 Centauro',
             chicken: '🐓 Pollo',
             cow: '🐄 Vaca',
             dog: '🐕 Perro',
             dragon: '🐉 Dragón',
             elephant: '🐘 Elefante',
             fox: '🦊 Zorro',
             giraffe: '🦒 Jirafa',
             griffin: '🦅 Ave',
             horse: '🐎 Caballo',
             kambing: '🐐 Cabra',
             kerbau: '🐃 Búfalo',
             lion: '🦁 León',
             money: '👾 MysticCoins',
             monyet: '🐒 Mono',
             panda: '🐼 Panda',
             snake: '🐍 Serpiente',
             phonix: '🕊️ Fénix',
             rhinoceros: '🦏 Rinoceronte',
             wolf: '🐺 Lobo',
             tiger: '🐅 Tigre',
             cumi: '🦑 Calamar',
             udang: '🦐 Camarón',
             ikan: '🐟 Pez',
             fideos: '🍝 Fideos',
             ramuan: '🧪 Ingrediente NOVA',
             knife: '🔪 Cuchillo',                                                                                                                                                
            };
        const results = Object.keys(emoticon).map((v) => [v, new RegExp(v,  'gi')]).filter((v) => v[1].test(string));
        if (!results.length) return '';
        else return emott[results[0][0]];
    }};
global.rpgg = { // Solo emojis
    emoticon(string) {
      string = string.toLowerCase();
      const emott ={
         level: '🧬',
         limit: '💎',
         exp: '⚡',
         bank: '🏦',
         diamond: '💎+',
         health: '❤️',
         kyubi: '🌀',
         joincount: '🪙',
         emerald: '💚',
         stamina: '✨',
         role: '💪',
         premium: '🎟️',
         pointxp: '📧',
         gold: '👑',
         trash: '🗑',
         crystal: '🔮',
         intelligence: '🧠',
         string: '🕸️',
         keygold: '🔑',
         keyiron: '🗝️',
         emas: '🪅',
         fishingrod: '🎣',
         gems: '🍀',
         magicwand: '⚕️',
         mana: '🪄',
         agility: '🤸‍♂️',
         darkcrystal: '♠️',
         iron: '⛓️',
         rock: '🪨',
         potion: '🥤',
         superior: '💼',
         robo: '🚔',
         upgrader: '🧰',
         wood: '🪵',
         strength: '🦹‍ ♀️',
         arc: '🏹',
         armor: '🥼',
         bow: '🏹',
         pickaxe: '⛏️',
         sword: '⚔️',
         common: '📦',
         uncoommon: '🥡',
         mythic: '🗳️',
         legendary: '🎁',
         petFood: '🍖',
         pet: '🍱',
         bibitanggur: '🍇',
         bibitapel: '🍎',
         bibitjeruk: '🍊',
         bibitmangga: '🥭',
         bibitpisang: '🍌',
         ayam: '🐓',
         babi: '🐖',
         Jabali: '🐗',
         bull: '🐃',
         buaya: '🐊',
         cat: '🐈',
         centaur: '🐐',
         chicken: '🐓',
         cow: '🐄',
         dog: '🐕',
         dragon: '🐉',
         elephant: '🐘',
         fox: '🦊',
         giraffe: '🦒',
         griffin: '🦅',
         horse: '🐎',
         kambing: '🐐',
         kerbau: '🐃',
         lion: '🦁',
         money: '👾',
         monyet: '🐒',
         panda: '🐼',
         snake: '🐍',
         phonix: '🕊️',
         rhinoceros: '🦏',
         wolf: '🐺',
         tiger: '🐅',
         cumi: '🦑',
         udang: '🦐',
         ikan: '🐟',
         fideos: '🍝',
         ramuan: '🧪',
         knife: '🔪',
      };
      const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
      if (!results.length) return '';
      else return emott[results[0][0]];
    }};
global.rpgshop = { // Tienda
    emoticon(string){
        string = string.toLowerCase();
        const emottt = {
            exp: '⚡ Experiencia',
         limit: '💎 Diamante',
         diamond: '💎 Diamante',
         joincount: '🪙 Token',
          emerald: '💚 Esmeralda',
          berlian: '♦️ Joya',
         kyubi: '🌀 Magia',
         gold: '👑 Oro',
         money: '👾 MysticCoins',
         tiketcoin: '🎫 mystic Tickers',
         stamina: '✨ Energía',
         potion: '🥤 Poción',
         aqua: '💧 Agua',
         trash: '🗑 Basura',
         wood: '🪵 Madera',
         rock: '🪨 Roca',
         batu: '🥌 Piedra',
         string: '🕸️ Cuerda',
         iron: '⛓️ Hierro',
         coal: '⚱️ Carbón',
         botol: '🍶 Botella',
         kaleng: '🥫 Lata',
         kardus: '🪧 Cartón',
         eleksirb: '💡 Electricidad',
         emasbatang: '〽️ Barra de Oro',
         emasbiasa: '🧭 Oro Común',
         rubah: '🦊🌫️ Zorro Grande',
         sampah: '🗑🌫️ Super Basura',
         serigala: '🐺🌫️ Super Lobo',
         kayu: '🛷 Super Madera',
         sword: '⚔️ Espada',
         umpan: '🪱 Carnada',
         healtmonster: '💵 Billetes',
         emas: '🪅 Piñata',
         pancingan: '🪝 Gancho',
         pancing: '🎣 Caña de Pescar',
         common: '📦 Caja Común',
         uncoommon: '🥡 Caja Poco Común',
         mythic: '🗳️ Caja Mítica',
         pet: '📫 Caja de Mascotas', // ?
         gardenboxs: '💐 Caja de Jardinería', // ?
         legendary: '🎁 Caja Legendaria',
         anggur: '🍇 Uva',
         apel: '🍎 Manzana',
         jeruk: '🍊 Naranja',
         mangga: '🥭 Mango',
         pisang: '🍌 Platano',
         bibitanggur: '🌾🍇 Semillas de uva',
         bibitapel: '🌾🍎 Semillas de manzana',
         bibitjeruk: '🌾🍊 Semillas de naranja',
         bibitmangga: '🌾🥭 Semillas de Mango',
         bibitpisang: '🌾🍌 Semillas de plátano',
         centaur: '🐐 Centauro',
         griffin: '🦅 Ave',
         kucing: '🐈 Gato',
         naga: '🐉 Dragón',
         fox: '🦊 Zorro',
         kuda: '🐎 Caballo',
         phonix: '🕊️ Fénix',
         wolf: '🐺 Lobo',
         anjing: '🐶 Perro',
         petFood: '🍖 Alimento para Mascota', // ?
         makanancentaur: '🐐🥩 Comida de Centauro',
         makanangriffin: '🦅🥩 Comida de Ave',
         makanankyubi: '🌀🥩 Comida Mágica',
         makanannaga: '🐉🥩 Comida de Dragón',
         makananpet: '🍱🥩 Alimentos de mascotas',
         makananphonix: '🕊️🥩 Comida de Fénix', 
        };
        const results = Object.keys(emotttt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
        if (!results.length) return '';
        else return emotttt[results[0][0]];
    }}; 


const file = fileURLToPath(import.meta.url);
watchFile(file), () => {
    unwatchFile(file), () => {
    console.log(chalk.redBrigth('update \'api.js\''));
    import(`${file}?update=${Date.now()}`);
    }};