const Base = require("../base/Command")
const SmallRichEmbed = require('../modules/embed')
const fs = require('fs')
const langs = require('../lang/index')
const Embed = new SmallRichEmbed()
const paths = require('path')

 class Lang extends Base {
  constructor(client) {
    super(client, {
      name: "lang",
      description: "Display or set the language of this server.",
      usage: "",
      category: "User Settings",
      cooldown: 1000,
      aliases: ["language"],
      permLevel: 0,
      permission: "READ_MESSAGES"
    })
  }
  
  async run(message, args) {
    Embed.init()
    if (args.length < 1) {
      const user = await this.client.userData.get(message.author.id)
      if (user.lang === 'en'){
        Embed.addField(langs.en.language, user.lang)
      } else if (user.lang === 'ko') {
        Embed.addField(langs.ko.language, user.lang)
      }

      message.channel.send(Embed.get())
      return
    }

    if(!langs[args[0]]) {
      let available = undefined

      Object.keys(langs).forEach(k => {
        if(!available) {
          available = '`' + k + '`'
        } else {
          available += ', `' + k + '`'
        }
      })

      Embed.addField('languages', available)
      message.channel.send(Embed.get())
      return
    }

    await this.client.db.update('lang', { lang: args[0] }, { aid: message.author.id })
    Embed.addField('language', `set the language to ${args[0]}`)
    message.channel.send(Embed.get())
    return
  }
}

module.exports = Lang
