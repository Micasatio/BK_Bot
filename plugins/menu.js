let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
Viva el pornoooooo siii
`.trim()
let buttons = [
{ buttonId: '#owner', buttonText: { displayText: '💫 𝐎𝐖𝐍𝐄𝐑 💫' }, type: 1 },
{ buttonId: '#play el tren de pamela Monchi papa', buttonText: { displayText: 'Si' }, type: 1 },
{ buttonId: '#dog', buttonText: { displayText: '😸 Un Gatito 😸' }, type: 1 }]
let buttonMessage = {
image: fs.readFileSync('./Menu2.jpg'),
caption: menu.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 Black_Bot 👑',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `Pornhub.com`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
