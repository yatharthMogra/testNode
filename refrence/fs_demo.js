const fs=require('fs');
const path=require('path');
// fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
// 	if(err){throw err;}
// 	console.log('Folder created ...')
// })

// create and write file
// write basically overwrites anything that's already written to
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),"Hello World! ",(err)=>{
// 	if(err){throw err;}
// 	console.log('File written to ...')
// 	fs.appendFile(path.join(__dirname,'/test','hello.txt'),"I love Node.js",(err)=>{
// 		if(err){throw err;}
// 		console.log('File written to ...')
// 	})
// })
// you cna't use an append function after this as these methods are async and hence may give errors

//read file
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
// 	if(err)throw err;
// 	console.log(data);
// })


// rename file
// fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloWorld.txt'),(err)=>{
// 	if(err) throw err;
// 	console.log("File Renamed...");
// })