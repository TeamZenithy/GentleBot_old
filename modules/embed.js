const config = require('../config.json')

module.exports = class SmallRichEmbed {
    constructor() {
      this.result = {
        embed: {
          color: 3447003,
          fields: [],
          timestamp: Date.now(),
          footer: {
            text: config.bot.name + ' ' + config.bot.releaseInfo + ' ' + 'Version' + ' ' + config.bot.version,
            icon_url: ''
          },
          image: {
            url: ''
          },
          url: '',
          title: '',
          thumbnail: {
            url: ''
          }
        }
      }
    }
  
    addField(title, value) {
      this.result.embed.fields.push({
        name: title || null,
        value: value || null
      })
    }
    setColor(color) {
      this.result.embed.color = color || this.result.color
    }
    setImage(uri) {
      this.result.embed.image.url = uri || null
    }
    setThumbnail(uri) {
      this.result.embed.thumbnail.url = uri || null
    }
    setUrl(text, url) {
      this.result.embed.title = text || null
      this.result.embed.url = url || null
    }
    setFooter(text, image) {
      this.result.embed.footer.text = text || config.bot.name + ' ' + config.bot.releaseInfo + ' ' + 'Version' + ' ' + config.bot.version
      this.result.embed.footer.icon_url = image || null
    }
    init() {
      this.result = {
        embed: {
          color: 3447003,
          fields: [],
          timestamp: Date.now(),
          footer: {
            text: config.bot.name + ' ' + config.bot.releaseInfo + ' ' + 'Version' + ' ' + config.bot.version,
            icon_url: ''
          },
          image: {
            url: ''
          },
          url: '',
          title: '',
          thumbnail: {
            url: ''
          }
        }
      }
    }
  
    get() {
      return this.result
    }
  }