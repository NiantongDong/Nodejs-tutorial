const sum =(num1,num2) => num1 + num2;
const PI = 3.14;
class Math
{
    constructor()
    {
        console.log("created");
    }
}

//One way to export.
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.Math = Math;

//clean way to export.
module.exports={sum:sum,PI:PI,Math:Math};