const faz = require('../../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../../config');
let wk = Config.WORKTYPE == 'public' ? false : true

faz.addCommand({pattern: 'bot ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

      const rows = [
        { title: ".list", rowId:"" },
        { title: ".owner", rowId:"" },
        { title: "git", rowId:"" },
        { title: "inrl", rowId:"" },
        { title: "fasweeh", rowId:"" },
      ]

      const sections = [{ title: "🎈ꪶ ɪɴʀʟʙᴏᴛ ꫂ🎈", rows: rows }]

      const listButton = {
        buttonText: "SELECT",
        description: "command's for inrl wa bot./nmention cheyyathe type chyyuka",
        sections: sections,
        listType: 1,
      }
await message.client.sendMessage(message.jid, listButton, MessageType.listMessage, { quoted: message.data })
}));

faz.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   

const type = Object.keys(message.message)[0]
selectedButton = (type == 'buttonsResponseMessage') ? message.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? message.message.listResponseMessage.title : ''

if (responseButton === 'MENU') {
    await message.sendMessage(message.jid, `*TESTING 1*`, MessageType.text, { quoted: message.data })
} else if (responseButton === 'LIST') {
    await message.sendMessage(message.jid, `*TESTING 2*`, MessageType.text, { quoted: message.data })
}
}));
