/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : BAT-MD
 * @author : Xcelsama
 * @description : BAT-MD,A Multi-functional whatsapp bot Created by xcelsama.
 * @version 0.0.6
 **/

const DB = require('../lib/scraper')
const { execSync } = require('child_process')
const { tlang, Config, prefix,cmd } = require('../lib')
//---------------------------------------------------------------------------
//                  UPDATE COMMANDS
//---------------------------------------------------------------------------
cmd({
            pattern: "update",
            desc: "Shows repo\'s refreshed commits.",
            category: "tool🛠",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply('This command is only for my owner')
            let commits = await DB.syncgit()
            if (commits.total === 0) {
                citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
            } else {
                let update = await DB.sync()
                  let button = [{
                    buttonId: `${prefix}updatenow`,
                    buttonText: {
                        displayText: 'UPDATE'
                    },
                    type: 1
                }]
                  let buttonMessaged = {
                    text: update,
                    footer: 'UPDATER --- 𝕋𝔼ℂℍ 𝕏\n https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m"',
                    headerType: 4,
                    buttons: button
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }

        }
    )
  