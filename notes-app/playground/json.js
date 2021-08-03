

const fs = require('fs')

const data = fs.readFileSync('book1.json')
const data1 = data.toString()
const data2 = JSON.parse(data1)
data2.name = "shubham"
data2.age = '27'
fs.writeFileSync('book1.json',JSON.stringify(data2))
console.log(JSON.parse((fs.readFileSync('book1.json')).toString()))