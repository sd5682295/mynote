const { resolve } require('path')
// const path = require('path');
// function resolve (dir) {
//     return path.join(__dirname, dir)
// }
module.exports = {
  alias:{
    '/@/':resolve(__dirname,'src')
  }
}
