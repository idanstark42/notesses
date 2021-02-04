window.Buzzer = (my => {

	const AUDIO_FILE = './assets/buzz.mp3'
	const ELEMENT_ID = 'buzz'

	my.buzz = () => {
		$('body').append(`<embed src="${AUDIO_FILE}" autostart="false" width="0" height="0" id="${ELEMENT_ID}" enablejavascript="true">`)
	}

	return my
}) ({ })