let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let handler  = async (m, { conn, args, text }) => {
if (!text) return m.reply('*[❗] EPAAA ¿Y Que Busco? Ingresa El Texto Que Quisiera Buscar*')
let results = await gis(text) || []
let { url, width, height } = pickRandom(results) || {}
if (!url) return m.reply('*[❗] Perdón Bro :( servidor caído, Inténtalo más tarde*')
conn.sendFile(m.chat, url, 'gimage', `
_Aquí Tienes tu imagen de_ ${text}
_Gracias por Usar_ *Black_Bot*
`.trim(), m)}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['general']
handler.command = /^(gimage|image|imagen)$/i
module.exports = handler
function pickRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
