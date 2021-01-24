window.Turn = (my => {

  const END_OF_STEP = 'END OF STEP'
  const DURATION = 10
  
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
      my.hat.useWord(currentWord).then(() => close())
    })

    $('.didnt-use-word').click(() => {
      close()
    })

    $timer = $('#timer')
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
    } else {
      $timer.show()
      startTimer(DURATION, $timer, () => {
        endOfTurn()
      })
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

  const endOfTurn = () => {
    $('#end-of-turn').show()
  }

  const close = () => {
    document.location.href = document.location.href.replace('turn.html', 'waiting-room.html')
  }

  // TIMER

  const startTimer = (duration, $display, onTimeUp) => {
    let timer = duration, minutes, seconds
    let interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds

        $display.text(minutes + ':' + seconds)
        console.log(minutes + ':' + seconds)

        if (--timer < 0) {
            clearInterval(interval)
            onTimeUp()
        }
    }, 1000)
  }


  return my
})(window.Segment)