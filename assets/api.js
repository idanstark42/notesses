window.API = (my => {

  const host = 'https://script.google.com/macros/s/AKfycbx3O8rI4OHO9euCQ9qTv9uQthszI9A1sFWV2Sbf49o-XoXO8cVMtl5pKQ/exec'

  my.load = id => {
    return request('get', { id })
  }

  my.create = () => {
    return request('post', { action: 'create' })
  }

  my.addWord = (id, word) => {
    return request('post', { action: 'add', id, word })
  }

  my.useWord = (id, word) => {
    return request('post', { action: 'use', id, word })
  }

  my.reset = id => {
    return request('post', { action: 'reset' })
  }

  my.delete = id => {
    return request('post', { action: 'delete' })
  }

  const request = (method, params) => {
    return $.ajax({
      method,
      url: `${host}?${Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')}`
    })
  }

  return my
}) ({ })
