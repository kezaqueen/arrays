//finding the last element of a given array

let arr1=[3,7,34,90,12];
let search = arr1[arr1.length-1];
console.log(search);

let arr2 = [true,"green","where",12,56];
let lookingFor = arr2[arr2.length-1];
console.log(lookingFor);

//joining an array into a string
let myPets = ["Cow","Bird","Snake","Dog"];
console.log(myPets.join());

//sorting array items
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
var sortedArr3 = arr3.sort();
console.log(sortedArr3);

//Removing the duplicates
let arr =["boy","man","girl","school","girl","woman"];
let q = new Set(arr);
let k = [...q];
console.log(k);
//searching words in an array
let arr5 =["the","way","x",4];
let whatToSearch = arr5.find(items=>items==="food");
if (whatToSearch==="food"){
    console.log(whatToSearch);
}
else{
    console.log("not found there");
}
//sorting words
let word="renniw";
let sortedrenniw = word.split("");
let finalsortedrenniw =sortedrenniw.sort().join()
let outcomeOfrenniw = finalsortedrenniw.replace(/,/gi,"");
console.log(outcomeOfrenniw);
//inserting a word in an array
let sweetFruits =["kiwi","blueberries","mangoes","banana","pawpaw","pineapple","strawberries","star-fruits","melons","apple"];
sweetFruits[5]="Tomato";
console.log(sweetFruits);





