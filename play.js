const person = {
    name: 'peyman',
    age: 32,
    greet() {
        console.log('hi my name is ' + this.name);
    }
}

console.log(person);

//REST operator - Rest operator is when you can provide as many arugments as you want and the function will treat the arguments as an array. will return an array. 
const toArray = (...args) => {
    //return [arg1, arg2, arg3];
    return args;
}
console.log(toArray(1,2,4, 5, 6))//calling the funciton with a REST opeartor. it can have as many arguments as you want. 


//Destructuring syntax - is when a function only cares for certain properties on an object to save memory when the function is called. 
const printName = ({ name} )=> {
    console.log(name);
}
printName(person)//we are passing in the entire "person" object, but the function destructures the object by ({}) adding curly braces and the name of the properties you are wanting to use within that function. 
const { name, age } = person; //destructuring the person object. you are destructuring the person object to constants called name and age. 

const hobbies = ['sports','cooking']
const [hobby1,hobby2] = hobbies;//destructing an array. 
console.log(hobby1,hobby2)//

//callbacks on async code
const fetchdata = callback =>{
    setTimeout(()=>{
        console.log('here');
        callback('Done');
    }, 3000)
}

setTimeout(()=>{
    fetchdata((text)=>{
        console.log(text);
    })
}, 2000)

//Promises with same functions as above
const fetchdata2 = () =>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('here');
            //callback('Done');
            resolve('Done');
        }, 3000)
    })
    return promise;
}

setTimeout(()=>{
    // fetchdata((text)=>{
    //     console.log(text);
    // })
    fetchdata2().then((text)=>{
        console.log(text);
        return fetchdata2();
    }).then((text2)=>{
        console.log(text2);
    })
}, 2000) 