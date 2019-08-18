const { Client, Collection } = require("discord.js")
const { readdir } = require("fs")
const DB = require("../modules/db.js")

class CustomClient extends Client {
    constructor(options) {
        super(options.clientOptions || {})
        this.db = null
        this.commands = new Collection()
        this.aliases = new Collection()
        this.config = options.config ? require(`../${options.config}`) : {}
        this.perms = options.perms ? require(`../${options.perms}`) : {}
        console.log(`Client initialized. You are using node ${process.version}.`)
    }

    login(token) {
        super.login(token)
        return this
    }

    connectDB(config) {
        this.db = new DB(config.host, config.user, config.pass, config.db)
        return this
    }

    loadCommands(path) {
        readdir(path, (err, files) => {
            if (err) console.log(err)

            files.forEach(cmd => {
                const command = new (require(`../${path}/${cmd}`))(this)

                this.commands.set(command.help.name, command)

                command.conf.aliases.forEach(a => this.aliases.set(a, command.help.name))
            })
        })
        return this
    }

    loadEvents(path) {
        readdir(path, (err, files) => {
            if (err) console.log(err)
            files.forEach(evt => {
                const event = new (require(`../${path}/${evt}`))(this)
                super.on(evt.split(".")[0], (...args) => event.run(...args))
            })
        })
        return this
    }
}

module.exports = CustomClient
