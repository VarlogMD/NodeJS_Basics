//File System
const fs = require('fs')
const { connect } = require('http2')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Folder Created')
// })



const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
//     if(err) {
//         throw err
//     }
//     console.log('File created')
// })

// fs.appendFile(filePath, '\nHello again!', (err) => {
//     if(err) {
//         throw err
//     }
//     console.log('File created')
// })


fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())
})
