const fs = require('fs')
const xml2js = require('xml2js')

const parser = new xml2js.Parser()

module.exports = (xmlLocation, jsonLocation) => {
  fs.readFile(xmlLocation.write, (err, data) => {
    if (err) throw err
    parser.parseString(data, function (err, result) {
      fs.writeFile(jsonLocation.write, JSON.stringify(result, null, 2), (err, result) => {})
    });
  })
}
