const Client = require("./base/Client")

const client = new Client({ config: "./config" })
client.login(client.config.bot.token)
client.connectDB(client.config.db)
client.loadCommands(client.config.bot.paths.commands)
client.loadEvents(client.config.bot.paths.events)
// 구경잼