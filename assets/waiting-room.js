window.WaitingRoom = (my => {

  my.initEvents = () => {
    $('#to-game').attr('href', `${document.location.href.replace('waiting-room.html', 'turn.html')}`)
  }

  return my
}) (window.Segment)