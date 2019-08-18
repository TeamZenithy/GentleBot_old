const Base = require("../base/Command")
const SmallRichEmbed = require('../modules/embed.js')
const Embed = new SmallRichEmbed()

 class Kick extends Base {
  constructor(client) {
    super(client, {
      name: "kick",
      description: "봇이 사용자를 킥 합니다.",
      usage: client.config.bot.prefix + "<kick|킥|zlr>",
      category: "관리",
      cooldown: 1000,
      aliases: ["킥", "zlr"],
      permLevel: 4,
      permission: "KICK_MEMBERS",
      nickname: ":hammer:킥"
    })
  }
  
  run(message) {
    Embed.init()
    Embed.addField("🏓퐁!", `봇의 핑은 ${Date.now() - message.createdAt}ms 입니다!`)
    message.channel.send(Embed.get())
    }
}

module.exports = Kick
