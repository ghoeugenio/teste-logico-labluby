console.log(`Questao 1) [${um(3,'a')}]`);
console.log(`Questao 2) [${dois([1,2,3,4])}]`);
console.log(`Questao 3) [${tres([null, false, 1,2,'', undefined])}]`);
console.log(`Questao 4) ${quatro([["c",2],["d",4]])}`);
console.log(`Questao 5) {${cinco([5,4,3,2,5], 5,3)}}`);
console.log(`Questao 6) [${seis([1,2,3,3,2,4,5,4,7,3])}]`);
console.log(`Questao 7) ${sete([1,2,3,4,],[1,2,3,4])}`);
console.log(`Questao 8) [${oito([1, 2, [3], [4, 5]])}]`);
console.log(`Questao 9) ${nove([1, 2, 3, 4, 5], 2)}`);
console.log(`Questao 10) [${dez([6, 8], [8, 9])}]`);

function um(size, variable){
    var array = [];
    for(let i = 0; i < size; i++){
        array.push(variable);
    }
    return array;
}

function dois(array){
    var inversearray = [];
    var n = array.length;
    for(let i = 0; i < n; i++){
        inversearray[i] = array[n - i - 1];
    }
    return inversearray;
}

function tres(array){

    array = array.filter((item)=>{
        return (item !== '')});

    array = array.filter((item)=>{
        return (item !== false)});
    
    array = array.filter((item)=>{
        return (item !== undefined)});
    
    array = array.filter((item)=>{
        return (item !== null)});
    
    array = array.filter((item)=>{
        return (item !== 0)});
    
    return array;
}

function quatro(array){
    array = array.reduce((acumulator, [key, value]) => {
        acumulator[key] = value;
         return acumulator;    
    },{});
    return JSON.stringify(array);
}

function cinco(array, ...props){
    
    for(let i = 0; i < props.length; i++){
        array = array.filter((item) => {
            return (item !== props[i]);
        })
    }

    return array;
}

function seis(array){
    
    var newArray = array.filter((item, i) => array.indexOf(item) === i);
    return newArray;
}

function sete(array1, array2){
    if(array1.sort().join(',') === array2.sort().join(',')){
        return true;
    }
    else {
        return false;
    }
}

function oito(array){

    var newArray = array.reduce((list, sub) => list.concat(sub), []);
    return newArray;
}

function nove(array, size){
    
    var newArray = [];
    var parteArray = [];
    var n = array.length;
    for(let i = 0; i < n; i+=size){
        parteArray = array.slice(i, i + size);
        newArray.push(parteArray);
    }

    return JSON.stringify(newArray);
}

function dez(array1, array2){

    var newArray = [];

    array1 = array1.filter(item => array2.includes(item));
    newArray = array1.filter((item, i) => array1.indexOf(item) === i);

    return newArray;
}