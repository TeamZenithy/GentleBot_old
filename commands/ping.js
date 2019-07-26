const Base = require("../base/Command")
const SmallRichEmbed = require('../modules/embed.js')
const Embed = new SmallRichEmbed()

 class Ping extends Base {
  constructor(client) {
    super(client, {
      name: "ping",
      description: "Pings the bot.",
      usage: "",
      category: "Information",
      cooldown: 1000,
      aliases: ["pong"],
      permLevel: 0,
      permission: "READ_MESSAGES"
    })
  }
  
  run(message) {
    Embed.init()
    Embed.addField("Pong!", `Pong! Took ${Date.now() - message.createdAt}ms.`)
    super.respond(Embed.get())
  }
}

module.exports = Ping
