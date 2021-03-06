const Base = require("../base/Command")
const SmallRichEmbed = require('../modules/embed.js')
const Embed = new SmallRichEmbed()

 class Ping extends Base {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "봇의 핑을 보여줍니다.",
      usage: client.config.bot.prefix + "ping",
      category: "정보",
      cooldown: 1000,
      aliases: ["pong", "핑", "퐁", "vld"],
      permLevel: 0,
      permission: "READ_MESSAGES",
      nickname: ":ping_pong:핑"
    })
  }
  
  run(message) {
    Embed.init()
    Embed.addField("🏓퐁!", `봇의 핑은 ${Date.now() - message.createdAt}ms 입니다!`)
    message.channel.send(Embed.get())
    }
}

module.exports = Ping
