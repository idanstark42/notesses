window.Turn = (my => {

  my.initEvents = () => {
    $('.next').click(() => next())
    $('body').keypress(e => {
      if((event.keyCode ? event.keyCode : event.which) == config.nextWordKey) {
        next()
      }
    })
  }

  const next = () => {
    const lastWord = my.word()
    if (Boolean(lastWord)) {
      my.hat.useWord(lastWord)
    }

    if(my.hat.count() === 0) {
      my.hat.reset()
      my.word(config.endOfStep)
    } else {
      my.word(my.hat.getRandomWord())
    }

    my.updateCount()
  }

  return my
})(window.Segment)