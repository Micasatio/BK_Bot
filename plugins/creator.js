function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '595983186566', 'Black - Creador - Oficial 1', m)
this.sendContact(m.chat, '524531106422', 'Black - Creador - Oficial 2', m)}
handler.command = /^(contacto|mipapi|OFC|creador|propietario|dueño)$/i
module.exports = handler
