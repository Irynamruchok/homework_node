const fs = require('node:fs')
const path = require('node:path')
const folderPath = path.join(__dirname,'MainFolder','')

// const folderPath = path.join(__dirname,'MainFolder','Folder5')

// const filePath = path.join(__dirname,'MainFolder','File5')

// fs.writeFile(filePath,'Hello', (error) => {
//    if (error) throw new Error(error.message)
// })

// fs.appendFile(filePath,'world\n',(err) => {
//    if (err) throw new Error(err.message)
// })

// fs.truncate(filePath,(err) => {
//    if (err) throw new Error(err.message)
// })

// fs.readFile(filePath,(err, data) => {
//    if (err) throw new Error(err.message);
//    console.log(data.toString())
// })

// fs.mkdir(folderPath,(err) => {
//    if (err) throw new Error(err.message);
// })

fs.readdir(folderPath,{withFileTypes:true},(err,files) => {
   if (err) throw new Error(err.message);
   files.forEach((file) => {
      if (file.isDirectory()) {
         console.log(` Folder: ${file.name} `)
      }else if (file.isFile()) {
         console.log(` File: ${file.name} `)
      }
   })
})

