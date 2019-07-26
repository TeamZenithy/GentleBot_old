class getUserData {
  constructor (db) {
    this.db = db
  }

  async get (aid) {
    const userL = await this.db.select('lang', { aid: aid })
    //const userD = await this.db.select('users', { aid: aid })
    /*if (!userD) throw new Error()
      else if (!userD[0]) {
        await this.db.insert('users', { aid: aid })
        return this.get(aid)
      }
     */


    if (!userL) throw new Error()
    else if (!userL[0]) {
      await this.db.insert('lang', { aid: aid })
      return this.get(aid)
    } else return userL[0]

    //return Object.assign(userD[0], userL[0])
  }
}

module.exports = getUserData