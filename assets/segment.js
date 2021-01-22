window.Segment = (my => {

  let hat
  let $loader
  let $count
  let $word

  my.init = () => {
    my.hat = new Hat(config.hatId)

    $loader = $('.segment')
    $count = $('#count')
    $word = $('#word')

    my.initEvents()

    hat.init().then(() => {
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
    $count.text(hat.count())
  }

  my.word = word => {
    if (word) {
      if ($word[0].prop('tagName') === 'INPUT') {
      	$word.val(word)
      } else {
      	$word.text(word)
      }
    } else {
      if ($word[0].prop('tagName') === 'INPUT') {
      	$word.val().trim()
      } else {
      	$word.text().trim()
      }
    }
  }

  return my
}) ({ })