window.Timer = (my => {

  let timer, paused, interval

  let onTimeUp

  my.start = (duration, $display) => {
    paused = false

    if (!interval) {
      timer = duration
      interval = setInterval(() => {
          let minutes = parseInt(timer / 60, 10)
          let seconds = parseInt(timer % 60, 10)

          minutes = minutes < 10 ? '0' + minutes : minutes
          seconds = seconds < 10 ? '0' + seconds : seconds

          $display.text(minutes + ':' + seconds)

          if (!paused && --timer < 0) {
              clearInterval(interval)
              interval = null
              Buzzer.buzz()
              onTimeUp()
          }
      }, 1000)
    }
  }

  my.pause = () => {
    paused = true
  }

  my.stop = () => {
    clearInterval(interval)
    interval = null
  }

  my.onTimeUp = callback => {
  	onTimeUp = callback
  }

  return my
}) ({ })