const Base = require("../base/Command")
const SmallRichEmbed = require('../modules/embed.js')
const Embed = new SmallRichEmbed()

 class Sayd extends Base {
  constructor(client) {
    super(client, {
      name: "sayd",
      description: "Say as you want. After say message, your request message will be deleted.",
      usage: "",
      category: "Fun",
      cooldown: 1000,
      aliases: ["talkd"],
      permLevel: 0,
      permission: "MANAGE_MESSAGES",
    })
  }
  
  run(message, args) {
    if (args.length < 1) return
    message.channel.send(args.join(' '))
    message.delete().catch(O_o=>{
        message.channel.send("I've tried to delete command message, but i don't have permission. So command message will be reamined.\nRequired permission is **`MANAGE_MESSAGES`**")
    })
  }
}

module.exports = Sayd
