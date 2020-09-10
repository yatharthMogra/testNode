// const Person=require('./person')
// const person1=new Person('John Doe',30);
// person1.greeting();


// const Logger=require('./logger'); 
// const logger=new Logger();
// logger.on('message',(data)=>console.log('Called Listener',data));
// logger.log('Hello World');


const http=require('http');
const path=require('path');
const fs=require('fs');
const server=http.createServer((req,res)=>{
	// if(req.url==='/'){
	// 	fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
	// 		if(err) throw err;
	// 		res.writeHead(200,{'Content-Type':'text/html'});
	// 		res.end(content);
	// 	});
	// }
	// else if(req.url==='/about'){
	// 	fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
	// 		if(err) throw err;
	// 		res.writeHead(200,{'Content-Type':'text/html'});
	// 		res.end(content);
	// 	});
	// }
	// else if(req.url==='/api/users'){
	// 	const users=[
	// 		{name:'Bob',age:30},
	// 		{name:'Jimmy',age:43}
	// 	]
	// 	res.writeHead(200,{'Content-Type':'application/json'});
	// 	res.end(JSON.stringify(users));
	// }
	let filePath=path.join(__dirname,'public',
		req.url==='/' ? 'index.html':req.url);
	let extname=path.extname(filePath);
	let contentType='text/html';
	switch(extname){
		case '.css':
			contentType='text/css';
			break;
		case'.js':
			contentType='text/javascript';
			break;
		case'.json':
			contentType='application/json';
			break;
		case'.png':
			contentType='image/png';
			break;
		case'.jpg':
			contentType='image/jpg';
			break;
	}
	fs.readFile(filePath,(err,content)=>{
		if(err){
			if(err.code=='ENOENT'){
				//page not found
				fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
					if(err)throw err;
					res.writeHead(200,{'Content-Type':'text/html'});
					res.end(content,'utf8');
				})
			}else{
				res.writeHead(500);
				res.end(`Server Error ${err.code}`);
			}
		}else{
			// Success
			res.writeHead(200,{'Content-Type':contentType})
			res.end(content,'utf8')

		}
	})
})

const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));