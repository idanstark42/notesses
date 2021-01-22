class Hat {
  constructor(id) {
    this.id = id
  }

  init() {
    return API.load(this.id).then(json => Object.assign(this, json))
  }

  addWord(word) {
    this.words.push(word)
    return this.save()
  }

  getRandomWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  useWord(word) {
    const wordIndex = this.words.findIndex(value => value === word)
    
    this.words.splice(wordIndex, 1)
    this.used.push(word)
    
    return this.save()
  }

  count() {
    return this.words.length
  }

  reset() {
    this.words = this.words.concat(this.used)
    this.used = []
    return this.save()
  }

  save() {
    return API.save(this.id, { words: this.words, used: this.used })
  }
}
