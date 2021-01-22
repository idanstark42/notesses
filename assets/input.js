window.Input = (my => {

  my.initEvents = () => {
    $('.send').on('click', () => submit())
    $('[name="word"]').keypress(event => {
      if((event.keyCode ? event.keyCode : event.which) == '13') {
        submit()
      }
    })
  }

  const submit = () => {
    const word = my.word()
    word('')
    loading(true)
    hat.addWord(word).then(() => {
      toast({ message: 'נוספה מילה', class: 'success', position: 'bottom right' })
      updateCount()
    })
    .catch(() => toast({ message: 'היתה בעיה', class: 'error', position: 'bottom right' }))
    .then(() => loading(false))
  }

  return my
}) (window.Segment)