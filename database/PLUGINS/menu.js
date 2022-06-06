const faz = require('../../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../../config');
let wk = Config.WORKTYPE == 'public' ? false : true

faz.addCommand({pattern: 'menu ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

      const rows = [
        { title: "ᴏᴡɴᴇʀ-ɪɴꜰᴏ \n\n\n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n      ☆ ~ɪᴛsᴍᴇ ʀᴇʙᴇʟꜱɪʀ~ ☆ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟ \n ┣⍟👾 ᴅᴇᴠᴇʟᴏᴘᴇʀ : ꜱʀᴇᴇᴊᴜ \n ┣⍟👾 ʙᴏᴛ : ☚⃟፝༄ʀᴇʙᴇʟ☚⃟፝࿐ \n ┣⍟👾 ᴠᴇʀsɪᴏɴ : 1.0 \n ┣⍟👾 ᴍᴏᴅᴇ : ᴘᴜʙʟɪᴄ \n ┣⍟👾 *ᴘʀᴇғɪx* : [ . ] \n ┣⍟ \n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎\n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎ \n ┣⍟         ₢ꜱʀᴇᴇᴊᴜ𖨆 \n ┣⍟ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟        ◩ *ʟɪꜱᴛ* ◪ \n ┣⍟🎲 .ᴏᴡɴᴇʀ \n ┣⍟🎲 .ɢɪᴛ \n ┣⍟🎲 .ᴀʟɪᴠᴇ \n ┣⍟ \n ┣⍟ ✩[ *ᴄʀᴇᴀᴛᴇʀ* ]✩ \n ┣⍟ \n ┣⍟👨🏻‍💻 ꜱʀᴇᴇᴊᴜ \n ┣⍟ \n ┣⍟    ❏ ʀᴇʙᴇʟꜱɪʀ❏ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟      ◩ *ᴛʜᴀɴᴋ ʏᴏᴜ* ◪ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛", rowId:"" },
        { title: "ꜱᴜᴩᴩᴏʀᴛ \n\nʀᴇʙᴇʟꜱɪʀ.\n\n\nᴩʜᴏɴᴇ-ᴩᴀy:+91 ᴜɴᴋɴᴏᴡɴ \n\nɢ-ᴩᴀy:+91 8547062392 \n\nᴩᴀyᴛᴍ: +918547062392\n\n chumma kodutha ithokke not work okh🥲😂", rowId:"" },
        { title: "GIT \n\n```ᴄʀᴇᴀᴛᴇʀ : ꜱʀᴇᴇᴊᴜ```\n\n```owner number wa.me/918547062392```\n\n```whatsapp group: https://chat.whatsapp.com/FOutIblZOj388UVIYfefcR\n\n```github link :https://github.com/inrlwabot/faz```\n\n", rowId:"" },
      ]

      const sections = [{ title: "🎈rebelsir🎈", rows: rows }]

      const listButton = {
        buttonText: "MENU",
        description: "command's for ʀᴇʙᴇʟꜱɪʀ wa bot.\nmention cheyyathe type chyyuka",
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

