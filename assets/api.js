window.API = (my => {
  my.load = key => {
    return new Promise((res, rej) => {
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          res(JSON.parse(req.responseText))
        }
      };

      req.open("GET", `https://api.jsonbin.io/b/${key}`, true);
      req.setRequestHeader("secret-key", config.secretAPIKey);
      req.send()
    })
  }

  my.save = (key, json) => {
    return new Promise((res, rej) => {
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          res(req.responseText)
        }
      };

      req.open("PUT", `https://api.jsonbin.io/b/${key}`, true);
      req.setRequestHeader("Content-Type", "application/json")
      req.setRequestHeader("secret-key", config.secretAPIKey)
      req.setRequestHeader("versioning", false)
      req.send(JSON.stringify(json))
    })
  }

  return my
}) ({ })
