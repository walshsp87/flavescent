const Client = require('ftp')
const fs = require('fs')
const fileNames = require('./fileNames')

const parseXML = require('./parseXML')

const c = new Client()
c.on('ready', () => {
  c.get(fileNames.xml.get, (err, stream) => {
    if (err) throw err
    stream.once('close', () => { c.end() })
    stream.pipe(fs.createWriteStream(fileNames.xml.write))
  })
})

c.on('end', () => {
  parseXML(fileNames.xml, fileNames.json)
})

c.connect({
  host: 'Transfer.vyco.com',
  user: 'vyco.admin',
  password: 'VyCo2015!',
})
