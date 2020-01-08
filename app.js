/*Working With Modules*/
// const tutorial = require('./tutorial');
// console.log(tutorial.sum);
// console.log(tutorial.sum(1,2));
// console.log(tutorial.PI);
// console.log(new tutorial.Math());

/*The Events Module and EventEmitter Class*/
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial',(num1,num2)=>{
//     console.log("tutorial event has occurred!");
//     console.log(num1 *num2);
// })
// eventEmitter.emit('tutorial',1,2);

// class Person extends EventEmitter
// {
//     constructor(name)
//     {
//         super();
//         this._name = name
//     }
//     get name()
//     {
//         return this._name;
//     }
// }

// let Niantong = new Person('Niantong');
// let Sukmoon = new Person('Sukmoon');
// Sukmoon.on('name',()=>{
//     console.log("My name is " + Sukmoon.name);
// });
// Niantong.on('name',()=>{
//     console.log("My name is " + Niantong.name);
// });

// Niantong.emit('name');
// Sukmoon.emit('name');

/*Working With The ReadLine Module*/
// const readline =  require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// let num1 = Math.floor((Math.random()*10) + 1);
// let num2 = Math.floor((Math.random()*10) + 1);
// let answer = num1 + num2;

// rl.question(`What is  ${num1} + ${num2} ? \n`,
// (userInput)=>
// {
//     if(userInput.trim() == answer)
//     {
//         rl.close();
//     }
//     else
//     {
//         rl.setPrompt('Incorrect !\n')
//         rl.prompt();
//         rl.on('line',(userInput)=>
//         {
//             if(userInput.trim() == answer)
//             {
//                 rl.close();
//             }
//             else
//             {
//                 rl.setPrompt('Incorrect again !\n');
//                 rl.prompt();
//             }
//         })
//     }
// });

// rl.on('close',()=>{
//     console.log('Correct !')
// });

/*Working With File System Module (Creating,Reading,Deleting,Renaming) Files*/

// const fs = require('fs');
// fs.writeFile('example.txt',"This is an example of creating a file with content.",(err)=>{
//     if(err)
//         console.log(err);
//     else   
//         console.log("Successfully!");
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else   
//                 console.log(file);
//         })
// })

// //         old name      new name.
// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else   
//         console.log("Successfully!");
// })

// fs.appendFile('example2.txt',"\nappened data",(err)=>{
//     if(err)
//         console.log(err);
//     else   
//         console.log("append successfully!");
// })

// //Delete
// fs.unlink('example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else   
//         console.log("Delete successfully!");
// })

/*Working With File System Module. Creating and Deleting Folders*/
// const fs = require('fs');
// fs.mkdir('Folder',(err)=>{
//     //May raise error when create a folder with same 
//     //folder name.
//     if(err)
//         console.log(err);
//     else
//     {
//         console.log("Successfully create folder.")
//         // fs.rmdir('Folder',(err)=>{
//         //         if(err)
//         //             console.log(err);
//         //         else
//         //             console.log("Delete");
//         // });
        
//         /*Write a file to a folder.*/
//         fs.writeFile('./Folder/Test.txt',"This is a test.",(err)=>{
//             if(err)
//                 console.log(err);
//             else   
//                 console.log("Successfully write !");
//         })
//     }
// });

// //May raise error when delete a folder with files on it.
// fs.rmdir('Folder',(err)=>{
//     if(err)
//         console.log(err);
// })

// //Solution if delete a folder with files.
// //Delete the file first.
// fs.unlink('./Folder/Test.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//     {
//         //Delete the folder
//         fs.rmdir('Folder',(err)=>{
//             if(err)
//                 console.log(err);
//             else  
//                 console.log("Delete successfully !");
//         })
//     }
// });

// //Delete multiple files , then remove the folder.
// fs.readdir('Folder',(err,files)=>{
//     if(err)
//         console.log(err);
//     else
//         for(let file of files)
//         {
//             fs.unlink('./Folder/'+file,(err)=>{
//                 if(err)
//                     console.log(err);
//                 else
//                     console.log("Delete successfully !");
//             })
//         }
// });

// /*Working with Readable and Writable Streams*/
// //"Exmaple.txt"
// const fs = require('fs');
// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeStream = fs.createWriteStream('./example2.txt');
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
// });

/*Why you should use Streams*/
//When you want to read a large file.
//The readFile can not handle that because it may exceed the read
//buffer size.
//Using read and write stream can avoid this kind of problem.

// /*Pipes and Pipe Chaining. (Readable,Writable and Transform Streams)*/
// const fs = require('fs');
// const zlib = require('zlib');
// // const gzip = zlib.createGzip();
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example2.txt.gz');
// const writeStream = fs.createWriteStream('example2_unzipped.txt');
// // //Short version of loop write.
// // readStream.pipe(writeStream);
// //Compressed version of read stream
// //Zip it !
// // readStream.pipe(gzip).pipe(writeStream);
// //unzip it !
// readStream.pipe(gunzip).pipe(writeStream);

/*Creating a Http Server using the Http Module*/
// //Create web server using js.
// const http = require('http');
// const httpserver = http.createServer((req,res)=>{
//     // res.write('Hello world from Nodejs');
//     // res.end();
//     if(req.url === '/')
//     {
//         //Go to chrome and type in localhost:3000
//         res.write('Hello world from Nodejs');
//         res.end();
//     }
//     else
//     {
//         //Go to chrome and type in localhost:3000/anything.
//         res.write('Using other domain.');
//         res.end();
//     }

// });

// httpserver.listen('3000');

/*Serving Static Files with Http and File System Module (html,json,image) */
// //static folder.
// const http = require('http');
// const fs = require('fs');
// http.createServer((req,res)=>{
//     const readStream = fs.createReadStream('./static/index.html');
//     //200:Everying is Ok.
//     res.writeHead(200,{'content-type':'text/html'}); 
//     readStream.pipe(res);

//     // const readStream = fs.createReadStream('./static/example_1.json');
//     // //200:Everying is Ok.
//     // res.writeHead(200,{'content-type':'application/json'}); 
//     // readStream.pipe(res);

//     // const readStream = fs.createReadStream('./static/example.png');
//     // //200:Everying is Ok.
//     // res.writeHead(200,{'content-type':'image/png'}); 
//     // readStream.pipe(res);
// }).listen(3000);

/*Create our Package.json using Npm Init*/
//command : npm init

/*Installing Packages using Npm (Node Package Manager)*/
// //Install lodash
// //command: npm install(i)
// const _ = require('lodash');
// let example = _.fill([1,2,3,4,5],"ND",1,4);
// console.log(example);
// //Uninstall command: npm uninstall.

/* =Semantic Versioning*/
//           ^major.minor.patch
//"lodash": "^4.17.15"
//^: want minor update and patch update.
//~: only wnat patch update.
//without any symbol : I want the exact version.
// patch update: bug fixed
// minor update: add or modify some functions
// major update: breaking change.


/*Getting started with Express Web Framework*/
// //command: npm i express
// //Using Chrome.
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });

// app.listen(3000);

/*Working with Express Http Get Request, Route Params and Query Strings*/
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello World');
// });

// app.get('/example',(req,res)=>{
//     res.send('example route')
// });

// app.get('/example/:name/:age',(req,res)=>{
//     //http://localhost:3000/example/ND/21
//     console.log(req.params);

//     //? name = value
//     console.log(req.query);
//     res.send('Hello,' + req.params.name + ":" + req.params.age);
// });

// app.listen(3000);

/*Serving Static Files with Express*/
// const express = require('express');
// const path = require('path');
// const app = express();
// //Give a alias for my static folder.
// app.use('/public',express.static(path.join(__dirname,'static')));
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'static','index.html'));
// });

// app.listen(3000);

//The following lesson is a real project about using Express to 
//build a tiny server and pass with some data.

/* Http Post Request with Express and Body Parser Module*/

/*Working with JSON Data with Express and the Body Parser Module*/

/*User Input Validation With Express And JOI*/
/*User Input Validation with JOI Validating Nested Object and Arrays*/

//Dynamic web page.
/*Getting Started With EJS Templates With Express*/


/* How does MiddleWare Work and Creating Custom Middleware*/
/* Working With The Express Router*/
