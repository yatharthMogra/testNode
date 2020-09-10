const path=require('path');
//  base file name and dir name
console.log(__filename);
// console.log(path.basename(__filename));
console.log(path.dirname(__filename));
// console.log(path.basename(__dirname));
// console.log(path.dirname(__dirname));

//file extensions
console.log(path.extname(__filename));
// create path object
console.log(path.parse(__filename));
// concatinating file paths
console.log(path.join(__dirname,'test','hello.html'));
