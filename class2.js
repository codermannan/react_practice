const nums = [1,2,3,4];
function doublearray(){
    const dbl = [];

    // for(let i=0;i<=nums.length;i++){
    //     dbl.push(nums[i]*2);
    // }
    
    // for(num of nums){
    //     dbl.push(num*2);
    // }
    // return dbl;

    const dblmn = nums.map(num => num *2)

    return dblmn;
}
console.log(doublearray());


function findElm(recArr){
    return recArr.find((elm) => elm >2);
}

console.log(findElm(nums));
console.log('-----------filter----------');
const filter = (recArray) => {
    return recArray.filter( (elm) => elm>2)
}
console.log(filter(nums));

console.log('-----------destructering----------');
const person = {
    'firstname' : 'abdul mannan',
    'number' : '01814724520',
    'nid' : '75107777777777'
}

// const {firstname,nid} = person;

// console.log(firstname);
// console.log(nid);

console.log('-----------rest operator----------');
const {firstname,...restvalues} = person;
console.log(firstname);
console.log(restvalues);
console.log(restvalues.nid);

console.log('-----------spread operator----------');

const newpersonobj = {
    ...person,
    'profession' : 'Programmer',
    'country' : 'Bangladesh'
}

console.log(newpersonobj);

console.log('-----------array operator----------');
const arr = [1,2,3,4];
const [num1,,num3,...resval] = arr;
console.log(num3);

const newarray = [
    ...arr,
    5,
    6,
    7
]

console.log(newarray);

console.log('-----------api call----------');

//callback
//promise
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then( response => response.json())
.then(json => console.log(json))
//.then(err => console.log(err))

//const {title,id} = data_promise;
//console.log(json);

//async
async function run(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data =  await res.json()
    console.log(data)
}
run();

console.log('-----------class----------');

class Person {
    //name = 'mannna'
    //age  = 34
    constructor(mname,mage){
        this.name = mname;
        this.age = mage
    }
    shoinfo(){
        return this.name + '-' + this.age
    }
}

const objper = new Person('abdul mannan',45);
console.log(objper.name);
console.log(objper.shoinfo())