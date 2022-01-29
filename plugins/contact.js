const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by princerudh
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN: Prince Rudh [OWNER]\n' // full name
            + 'ORG: Prince Rudh;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=919895339960:+91 9895339960\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Prince Rudh [OWNER]", vcard: vcard}, MessageType.contact)
}))
