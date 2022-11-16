let handler = async (m, { conn }) => {
m.reply(`
*Bot activo* ✅
`)
}
handler.command = /^(bot?)$/i
module.exports = handler
