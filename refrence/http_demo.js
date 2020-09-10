const http=require('http');
http.createServer((req,res)=>{
	res.write('HelloWorld!');
	res.end();
})
.listen(5000,()=>console.log('Server Running...'));