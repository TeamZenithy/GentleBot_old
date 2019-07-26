const Base = require("../base/Command")

 class Say extends Base {
  constructor(client) {
    super(client, {
      name: "say",
      description: "Say as you want.",
      usage: "",
      category: "Fun",
      cooldown: 1000,
      aliases: ["talk"],
      permLevel: 0,
      permission: "READ_MESSAGES"
    })
  }
  
  run(message, args) {
    if (args.length < 1) return
    message.channel.send(args.join(' '))
  }
}

module.exports = Say
