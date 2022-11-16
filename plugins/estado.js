let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
*ミ💖 Hola estimado usuario 💖彡*
*ミ🤖 Estado del Bot 🤖彡*
*=> Bot activo ✔️*
*=> Bot uso público ✔️*
`.trim(), '©Black - Bot', '🔷️ MENÚ 🔷', `${usedPrefix}runtime`, '🔶️ Tiempo activo 🔶️', `${usedPrefix}menusimple`, '💠️ Salí del closet 💠️', `${usedPrefix}attp gay de mierda `, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
