/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : BAT-MD
 * @author : Xcelsama
 * @description : BAT-MD,A Multi-functional whatsapp bot Created by Excel Amadi.
 * @version 0.0.6
 **/

const { tlang, botpic,cmd, prefix, runtime,Config } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const API_KEY = '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'



//---------------------------------------------------------------------------
//                  AI  CHAT  COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii, I'm BAT-BOT>',
        filename: __filename,
    },
    async(Void, citel,text) => 
    {
        let zx = text.length;
        if (zx < 2) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
    }
	
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`); // for null text 
	
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration
				({
           				apiKey:"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"  ||  Config.OPENAI_API_KEY ,
				});
	
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)




//---------------------------------------------------------------------------
//                  REPOSITORY  COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.\n _CheckOut :_ https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/Xcelsama/BAT-MD')
        let cap = `Hey ${citel.pushName}\n
*⭐ Total Stars:* ${data.stargazers_count} stars
*🍽️ Forks:* ${data.forks_count} forks
*🍁 Repo:* _https://github.com/Xcelsama/BAT-MD_
*🔍 SCAN QR :- 
\n\n*Visit More About Wa-Bot:-*
 _https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m_ \n*Please Support Wa-Channel*`
        let buttonMessaged = 
            {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4
            };
           
        return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });

    }
)


cmd({
        pattern: "link",
        alias: ["Excel", "bat", "dev"],
        desc: "Sends info about My WA Channel __CheckOut :_ https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SuhailTechInfo/Secktor-bot')
        let cap = `
╔══════════════════════════╗
   ☞𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐓𝐄𝐂𝐇-𝐗☜
╚══════════════════════════╝\n\n
*⭐ Content :* *Bin, Cc, Tech info, premium accts, Cool websites etc*
*🍽️ Total Subscriber:* 0.4k Subscribers
*🍁 Channel Link:* _https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m_\n\n 
╭━━━━━━━━━━━━━━━━━━━━╮
┇  ╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗
┇  ║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣
┇  ╠╗║╚╝║║╠╗║╚╣║║║║║═╣
┇  ╚═╩══╩═╩═╩═╩╝╚╩═╩═╝
╰━━━━━━━━━━━━━━━━━━━━╯
\n\n*Visit More About Wa-Bot:-*
 _www.github.com/Xcelsama/BAT-MD_ \n*𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐌𝐘 𝐂𝐇𝐀𝐍𝐍𝐄𝐋*`
        let buttonMessaged = 
            {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4
            };
           
        return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });

    }
)
//---------------------------------------------------------------------------
//                  BOT STATUS COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about" , "info","Bot"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
 
 
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
🔰 *${tlang().title}* 🔰
*🌟Description:* A WhatsApp bot with rich features, Created By *𝐗𝐜𝐞𝐥𝐬𝐚𝐦𝐚*.\n
*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 1.0.0
*👤Owner:*  ${Config.ownername}\n\n
*🛠Powered by '𝐄𝐱𝐜𝐞𝐥 𝐀𝐦𝐚𝐝𝐢'*
*Youtube :* _https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m_ 
`;
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: ter,
            footer: tlang().footer,
            headerType: 4
            
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)