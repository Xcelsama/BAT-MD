const { Insta,cmd } = require('../lib')
cmd({
        pattern: "insta",
        desc: " bat-bot downloads instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('Need post url.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*BAT-BOT:-Result;Media from instagram.*`, citel)
}
    });
