window.Turn = (my => {

  my.initEvents = () => {
    $('.next').click(() => next())
    $('body').keypress(e => {
      if((event.keyCode ? event.keyCode : event.which) == config.nextWordKey) {
        next()
      }
    })

    $('.reset').click(() => hat.reset())
  }

  const next = () => {
    const lastWord = word()
    if (Boolean(lastWord)) {
      hat.useWord(lastWord)
    }

    if(hat.count() === 0) {
      hat.reset()
      word(config.endOfStep)
    } else {
      word(hat.getRandomWord())
    }

    updateCount()
  }

  return my
})(window.Segment)