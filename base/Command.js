class Command {
    constructor(client, options) {
        this.client = client
        this.help = {
            name: options.name || null,
            description: options.description || "정보가 없습니다.",
            usage: options.usage || "정보가 없습니다.",
            category: options.category,
            nickname: options.nickname
        }
        this.conf = {
            permLevel: options.permLevel || 0,
            permission: options.permission || "SEND_MESSAGES",
            cooldown: options.cooldown || 1000,
            aliases: options.aliases || [],
            allowDMs: options.allowDMs || false
        }
        this.cooldown = new Set();
    }

    startCooldown(user) {
        this.cooldown.add(user);

        setTimeout(() => {
            this.cooldown.delete(user);
        }, this.conf.cooldown);
    }

    setMessage(message) {
        this.message = message;
    }

    respond(message) {
        this.message.channel.send(message);
    }
}

module.exports = Command;
