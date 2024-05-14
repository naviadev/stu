const http = require('http')
const pokemon = require('pokemon')
const { Dex } = require('pokemon-showdown');
const fs = require('fs');
const { type } = require('os');
const jsonData = require('./pokedex.json')



http.createServer((req, res) => {

  if (req.method == "GET") {
    if (req.url.includes("/moves/")) {
      requestMoves(req.url, res);
    }
    else if (req.url.includes("/pokemonName/")) {
      requestName(req.url, res)
    }
    else {
      swtichPath(req.url, res);
    }

  }

}).listen(8080, () => { console.log("야호") })



function requestMoves(str, res) {
  let decode = decodeURI(str.split("/moves/")[1])
  let b = {
    name: `${decode}`,
    content: 'name',
  };
  let c = JSON.stringify(b)
  res.end(c)

}


function requestName(str, res) {

  let decode = decodeURI(str.split("/pokemonName/")[1])

  let pokeObj = checkPokemon(decode);

  if (pokeObj != undefined) {
    let returnObj = JSON.stringify(pokeObj)
    res.end(returnObj)
  }
  else {

    res.end(null)
  }


}

function swtichPath(url, res) {
  switch (url) {
    case "/":
      getMainHTML(res)
      break

    case "/SCSS/buildStyle.css.map":
      getMapCss(res)
      break

    case "/favicon.ico":
      getFavicon(res)
      break
    case "/SCSS/buildStyle.css":
      getStyle(res)
      break
    case "/img/pokemon-fields-ruby-1920x1200-nature-fields-hd-art-wallpaper-preview.jpg":
      getWallPaper(res)
      break

    case "/main.js":
      getScript(res)
      break
    case "/img/test.gif":
      getCat(res)
      break
  }
}

function getCat(res) {
  fs.readFile('./img/test.gif', (err, data) => {
    res.writeHead(200, { "Content-Type": "img/gif" });
    res.end(data)
  })
}


function getMainHTML(res) {

  fs.readFile('./public/index.html', (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data)

  })

}

function getFavicon(res) {

  fs.readFile('./img/favicon.png', (err, data) => {

    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(data)

  })
}

function getStyle(res) {
  fs.readFile("public/SCSS/buildStyle.css", (error, data) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(data)
  })
}

function getWallPaper(res) {
  fs.readFile('img/pokemon-fields-ruby-1920x1200-nature-fields-hd-art-wallpaper-preview.jpg', (err, data) => {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.end(data)
  })

}

function getMapCss(res) {
  fs.readFile("./public/SCSS/buildStyle.css.map", (error, data) => {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(data)
  })

}


function getScript(res) {
  fs.readFile("./main.js", (error, data) => {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(data)
  })
}



function checkPokemon(name) {

  try {
    let id = pokemon.getId(name)
    let enName = pokemon.getName(id)

    let ptype = checkType(enName);

    let obj = {
      id: `${id}`,
      name: `${name}`,
      enName: `${enName}`,
      type: `${ptype}`
    }

    return obj;

  } catch {

    return undefined;
  }

}


function checkType(name) {
  let i = name.toLowerCase();
  return jsonData[i].types

}