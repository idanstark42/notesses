window.API = (my => {

  my.load = id => {
    return request({ action: 'get', id })
  }

  my.create = () => {
    return request({ action: 'create' })
  }

  my.addWord = (id, word) => {
    return request({ action: 'add', id, word })
  }

  my.useWord = (id, word) => {
    return request({ action: 'use', id, word })
  }

  my.reset = id => {
    return request({ action: 'reset' })
  }

  my.delete = id => {
    return request({ action: 'delete' })
  }

  const request = params => {
    return $.get(`${config.host}?${Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')}`)
  }

  return my
}) ({ })
