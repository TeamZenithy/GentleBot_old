const Base = require("../base/Command")
const SmallRichEmbed = require('../modules/embed.js')
const Embed = new SmallRichEmbed()

 class Help extends Base {
  constructor(client) {
    super(client, {
      name: "help",
      description: "명령어 도움말 입니다!",
      usage: client.config.bot.prefix + "<help|manual|도움|도움말> <커맨드>",
      category: "기본",
      cooldown: 1000,
      aliases: ["manual", "도움", "도움말"],
      permLevel: 0,
      permission: "READ_MESSAGES",
      nickname: ":book:도움말"
    })
  }
  
  run(message, args) {
    Embed.init()

    if (args.length < 1) {
      const sorted = {}
      this.client.commands.array().forEach((c, i) => {
        if(!sorted[c.help.category]) sorted[c.help.category] = '`' + c.help.name + '`'
        else sorted[c.help.category] += `, \`${c.help.name}\``
      })

      Object.keys(sorted).forEach(k => {
        Embed.addField(k, sorted[k], true)
      })
  
      message.channel.send(Embed.get())
      return
    }

    const searched = this.client.commands.get(args[0])

    if (!searched) {
      Embed.addField(':no_entry: 오류', '저런.. 해당하는 명령어를 찾을수 없어요.. :(')
      message.channel.send(Embed.get())
      return
    }

    
    Embed.addField(searched.help.nickname, `${searched.help.description}\n사용법: ` + "``" + `${searched.help.usage}` + "``", true)
    message.channel.send(Embed.get())
    return
  }
}


module.exports = Help
