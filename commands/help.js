const Base = require("../base/Command")
const SmallRichEmbed = require('../modules/embed.js')
const Embed = new SmallRichEmbed()

 class Help extends Base {
  constructor(client) {
    super(client, {
      name: "help",
      description: "Command help",
      usage: "",
      category: "Information",
      cooldown: 1000,
      aliases: ["manual"],
      permLevel: 0,
      permission: "READ_MESSAGES"
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
      Embed.addField('Error 404', 'Not Found')
      message.channel.send(Embed.get())
      return
    }

    Embed.addField(searched.help.name, searched.help.description, true)
    message.channel.send(Embed.get())
    return
  }
}

module.exports = Help
