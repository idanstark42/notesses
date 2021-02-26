window.Turn = (my => {

  const END_OF_STEP = 'END OF STEP'
  const DURATION = 60
  
  let currentWord
  let $timer

  my.initEvents = () => {
    $('.next').click(() => next())
    $('body').keypress(e => {
      if((event.keyCode ? event.keyCode : event.which) == config.nextWordKey) {
        next()
      }
    })

    $('.used-word').click(() => {
      $('.used-word').addClass('loading')
      my.hat.useWord(currentWord).then(() => {
        my.updateCount()
        showStats()
      })
    })

    $('.didnt-use-word').click(() => showStats())

    $('#final-stats .button').click(() => close())

    $timer = $('#timer')
  }

  const next = () => {
    if (currentWord === END_OF_STEP) {
      my.hat.reset()
      currentWord = null
      my.updateCount(false)
      Timer.start()
      next()
      return
    }

    if (Boolean(currentWord)) {
      my.hat.useWord(currentWord)
      my.updateCount()
    } else {
      $timer.show()
      Timer.onTimeUp(endOfTurn)
      Timer.start(DURATION, $timer)
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
    Timer.pause()
  }

  const endOfTurn = () => {
    $('#end-of-turn').show()
  }

  const showStats = () => {
    $('#end-of-turn').hide()
    $('#final-stats').show()
  }

  const close = () => {
    document.location.href = document.location.href.replace('turn.html', 'waiting-room.html')
  }


  return my
})(window.Segment)