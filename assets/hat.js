class Hat {
  constructor(data) {
    if (data.constructor === Object) {
      Object.assign(this, data)
    } else {
      this.id = data
    }
  }

  init() {
    return this.load()
  }

  addWord(word) {
    return API.addWord(this.id, word).then(json => Object.assign(this, json))
  }

  getRandomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  useWord(word) {
    return API.useWord(this.id, word).then(json => Object.assign(this, json))
  }

  count() {
    return this.words.length
  }

  reset() {
    return API.reset(this.id).then(json => Object.assign(this, json))
  }

  delete() {
    return API.delete(this.id)
  }

  load() {
    return API.load(this.id).then(json => Object.assign(this, json))
  }

  static create() {
    return API.create().then(json => new Hat(json))
  }

}
