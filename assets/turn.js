window.Turn = (my => {

  const END_OF_STEP = 'END OF STEP'
  
  let currentWord

  my.initEvents = () => {
    $('.next').click(() => next())
    $('body').keypress(e => {
      if((event.keyCode ? event.keyCode : event.which) == config.nextWordKey) {
        next()
      }
    })
  }

  const next = () => {
    if (currentWord === END_OF_STEP) {
      my.hat.reset()
      currentWord = null
      my.updateCount(false)
      next()
      return
    }

    if (Boolean(currentWord)) {
      my.hat.useWord(currentWord)
      my.updateCount()
    }

    if(my.hat.count() === 0) {
      endOfStep()
    } else {
      currentWord = my.hat.getRandomWord()
      my.word(currentWord)
    }
  }

  const endOfStep = () => {
    my.word(config.endOfStep)
    currentWord = END_OF_STEP
  }

  return my
})(window.Segment)