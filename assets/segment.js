window.Segment = (my => {

  let $loader
  let $count
  let $word

  my.init = () => {
    my.hat = new Hat(config.hatId)

    $loader = $('.segment')
    $count = $('#count')
    $word = $('#word')

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

  my.updateCount = () => {
    $count.text(my.hat.count())
  }

  my.word = word => {
    if (word === undefined) {
      if ($word.prop('tagName') === 'INPUT') {
      	return $word.val(word)
      } else {
      	return $word.text(word)
      }
    } else {
      if ($word.prop('tagName') === 'INPUT') {
      	$word.val().trim()
      } else {
      	$word.text().trim()
      }
    }
  }

  return my
}) ({ })