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
// const writeStream = fs.createWriteStream('./example2.txt')
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
// });

/*Why you should use Streams*/
//When you want to read a large file.
//The readFile can not handle that because it may exceed the read
//buffer size.
//Using read and write stream can avoid this kind of problem.

/*Pipes and Pipe Chaining. (Readable,Writable and Transform Streams)*/
