/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : BAT-MD
 * @author : Xcelsama <https://github.com/Xcelsama>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version :-Latest
 **/
//---------------------------------------------------------------------------
const { cmd }   = require('../lib');
const util = require('util');
const axios = require('axios');
cmd({
        pattern: "paste",
        desc: "bat-bot creates paste of text on the bat-web.",
        category: "tool🛠",
        filename: __filename,
    },
    async(Void, citel,text) => {
 let a = citel.quoted ? citel.quoted.text : citel.text;
let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=Bat+Bot&author_name=BATMAN&content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true`);
return citel.reply(`*Paste created on telegraph*\nName:-${util.format(data.result.title)} \nUrl:- ${util.format(data.result.url)}`)
    }
);
