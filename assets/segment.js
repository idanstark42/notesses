window.Segment = (my => {

  let $word
  let $count
  let $countUp
  let $loader

  let countUp = null

  my.init = () => {
    const idRegex = document.location.search.match(/id=(.+?)($|&)/)
    if (!idRegex) {
      document.location.href = document.location.href.replace('input.html', 'index.html')
      return
    }

    my.hat = new Hat(idRegex[1])

    $word = $('#word')
    $count = $('#count')
    $countUp = $('.count-up')
    $loader = $('.segment')

    my.initEvents()

    my.hat.init().then(() => {
      my.loading(false)
      my.updateCount()
    })
  }

  my.loading = loading => {
    $loader.toggleClass('loading', loading)
  }

  my.toast = toast => {
  	$('body').toast(toast)
  }

  my.updateCount = (shouldUpdateCountUp=true) => {
    $count.text(my.hat.count())
    if (shouldUpdateCountUp) {
      countUp = (countUp === null) ? 0 : countUp + 1
      $countUp.text(countUp)
    }
  }

  my.word = word => {
    if (word === undefined) {
      if ($word.prop('tagName') === 'INPUT') {
      	return $word.val().trim()
      } else {
      	return $word.text().trim()
      }
    } else {
      if ($word.prop('tagName') === 'INPUT') {
      	$word.val(word)
      } else {
      	$word.html(word)
      }
    }
  }

  return my
}) ({ })