// a custom script that will automatically get the static html files from the build folder and move them to the public folder
// this is useful for when you want to deploy your site to a server that doesn't support server-side rendering

const fs = require('fs')
const path = require('path')

const buildPath = path.resolve(__dirname, 'build')
const publicPath = path.resolve(__dirname, 'public')

fs.readdir(buildPath, (err, files) => {
  if (err) {
    console.error(err)
    return
  }

  files.forEach(file => {
    if (file.endsWith('.html')) {
      fs.copyFileSync(
        path.resolve(buildPath, file),
        path.resolve(publicPath, file)
      )
    }
  })
})

// Path: package.json
// add a custom script to run the customBuilder.js file
// this script will be run when you run `npm run build:custom`
/** 
 * {
    "scripts": {
        "build:custom": "node customBuilder.js"
    }
    }   
*/
