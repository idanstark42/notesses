window.Input = (my => {

  my.initEvents = () => {
    $('.send').on('click', () => submit())
    $('[name="word"]').keypress(event => {
      if((event.keyCode ? event.keyCode : event.which) == '13') {
        submit()
      }
    })

    $('#to-game').attr('href', `${document.location.href.replace('input.html', 'waiting-room.html')}`)
  }

  const submit = () => {
    const word = my.word()
    my.word('')
    my.loading(true)
    my.hat.addWord(word).then(() => {
      my.toast({ message: 'נוספה מילה', class: 'success', position: 'bottom right' })
      my.updateCount()
      my.word('')
    })
    .catch(() => my.toast({ message: 'היתה בעיה', class: 'error', position: 'bottom right' }))
    .then(() => my.loading(false))
  }

  return my
}) (window.Segment)