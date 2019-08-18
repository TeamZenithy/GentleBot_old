const Base = require("../base/Command")

 class Say extends Base {
  constructor(client) {
    super(client, {
      name: "say",
      description: "사용자가 요청한 말을 봇이 따라합니다.",
      usage: client.config.bot.prefix + "<say> <할 말>",
      category: "기본",
      cooldown: 1000,
      aliases: ["talk"],
      permLevel: 0,
      permission: "READ_MESSAGES",
      nickname: ":bird:따라하기"
    })
  }
  
  run(message, args) {
    if (args.length < 1) return
    message.channel.send(args.join(' '))
  }
}

module.exports = Say
