class Hat {
  constructor(id) {
    this.id = id
  }

  init() {
    return this.load()
  }

  addWord(word) {
    return this.request('addWord', [this.id, word])
      .then(() => this.load())
      .then(() => { // Retrying if word is not in the collection
        if (!this.words.includes(word)) {
          return new Promise(res => {
            setTimeout(() => {
              this.addWord(word).then(res)
            }, 20)
          })
        }
      })
  }

  getRandomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  useWord(word) {
    const index = this.words.findIndex(w => word === w)
    this.words.splice(index, 1)
    return this.request('useWord', [this.id, word])
  }

  count() {
    return this.words.length
  }

  reset() {
    this.words = this.words.concat(this.used)
    this.used = []
    return this.request('reset', [this.id])
  }

  delete() {
    return this.request('delete', [this.id])
  }

  load() {
    return this.request('load', [this.id])
  }

  static create() {
    return API.create().then(res => new Hat(res.data.id))
  }

  request(action, params) {
    return API[action].apply(API, params).then(({ data }) => Object.assign(this, data))
  }
}
