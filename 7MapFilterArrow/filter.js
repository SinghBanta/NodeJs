//Example using without Filter function

const input=[1,2,3,4,5,6,7];

const newArr=[];

for(let i=0;i<input.length;i++){
    if(input[i] % 2 == 0){
        newArr.push(input[i]);
    }
}
console.log(newArr);

//Or using filter function

const number=[1,2,3,4,5,6,7];

function isEven(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}

const result=input.filter(isEven);
console.log(result);
