window.Index = (my => {

  my.init = () => {
  	$('.create').click(() => {
  		$('.create').append(`<div class="ui active inverted dimmer"><div class="ui loader"></div></div>`)
  		Hat.create().then(({ id }) => {
  			document.location.href = `${document.location.href.replace('index.html', 'input.html')}?id=${id}`
  		})
  	})
  }

  return my
}) ({ })