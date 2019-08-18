const Base = require("../base/Command")
const SmallRichEmbed = require('../modules/embed.js')
const Embed = new SmallRichEmbed()

 class Sayd extends Base {
  constructor(client) {
    super(client, {
      name: "sayd",
      description: "사용자가 요청한 말을 봇이 따라합니다. 요청하신 명령어는 삭제됩니다.",
      usage: client.config.bot.prefix + "<sayd> <할 말>",
      category: "기본",
      cooldown: 1000,
      aliases: ["talkd", "따라해"],
      permLevel: 4,
      permission: "MANAGE_MESSAGES",
      nickname: ":bird:따라하기(명령에 응답후 사용자의 메세지 삭제)"
    })
  }
  
  run(message, args) {
    if (args.length < 1) return
    message.channel.send(args.join(' '))
    message.delete().catch(O_o=>{
        Embed.init()
        Embed.addField(":no_entry: 오류", "권한이 부족해서 이 명령을 실행할 수 없어요.. 서버 관리자에게 **`MANAGE_MESSAGES`** 권한을 제게 부여해달라고 요청해주세요..")
        message.channel.send(Embed.get())
    })
  }
}

module.exports = Sayd
