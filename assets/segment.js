window.Segment = (my => {

  let hat
  let $loader
  let $count
  let $word

  my.init = () => {
    hat = new Hat(config.hatId)

    $loader = $('.segment')
    $count = $('#count')
    $word = $('#word')

    my.initEvents()

    hat.init().then(() => {
      loading(false)
      updateCount()
    })
  }

  const loading = loading => {
    $loader.toggleClass('loading', loading)
  }

  const toast = toast => {
  	$('body').toast(toast)
  }

  const updateCount = () => {
    $count.text(hat.count())
  }

  const word = word => {
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