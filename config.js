const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port=5000
global.email = 'samsamsun789@gmail.com'
global.github = 'https://github.com/Xcelsama/BAT-MD'
global.location = 'Lagos,Nigeria'
global.gurl = 'https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m' // add your username
global.sudo =  '2347045035241' || process.env.SUDO  
global.devs = '2347045035241';
global.website = 'https://github.com/Xcelsama/BAT-MD' //wa.me/+234000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.ibb.co/TRjdhyd/tumblr-na294unfma1rdzgejo1-500.gif'
module.exports = {
  botname: process.env.BOT_NAME || '𝙱𝙰𝚃-𝙱𝙾𝚃',
  ownername: 'Excel' || process.env.OWNER_NAME,
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author:  process.env.PACK_INFO.split(";")[0] || '', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname:   "\t   𓅋E͎x͎c͎e͎l͎𓃮 \n\nᴋɪss ʍᴇ... 💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs... 👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n    -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" || process.env.PACK_INFO.split(";")[1] ,
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake :  '212' || process.env.FAKE_COUNTRY_CODE ,
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || [','],
  warncount : process.env.WARN_COUNT || 1,
  disablepm: process.env.DISABLE_PM || "true",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '•.•:•.•:•:•:•:•:•:•:•☾☼☽•:•.•:•.•:•:•:•:•:•:•\Һɿ αм σηℓιηє нσω ¢αη ι нєℓρ уσυ \n'
	+'•.•:•.•:•:•:•:•:•:•:•☾☼☽•:•.•:•.•:•:•:•:•:•:•\n\n*ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт* \n*Cʀєαтєԃ вყ : ૯૪υ︎૯Ն*'
	+'\n\nWhatsapp : wa.me/2347045034241 \n Subscribe: https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m'  ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||"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" ,
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.enqv.VERSION,
  LANG: process.env.THEME|| 'BAT',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})