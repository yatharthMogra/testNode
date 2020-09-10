const os=require('os')

// platform
console.log(os.platform());
// cpu architecture
console.log(os.arch());
// cpu core info
console.log(os.cpus());
// free memory
console.log(os.freemem());
// total memeory
console.log(os.totalmem());
// home dir
console.log(os.homedir());
// uptime
console.log(os.uptime());