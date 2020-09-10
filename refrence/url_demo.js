const url=require('url');

const myUrl=new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialized URL
// console.log(myUrl.href);
// console.log(myUrl.toString());
// // host (root domain)
// console.log(myUrl.host);
// // Hostname does not get port
// console.log(myUrl.hostname);
// // pathname
// console.log(myUrl.pathname);
console.log(myUrl);
myUrl.searchParams.append('abc','123');
console.log(myUrl);