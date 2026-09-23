//------------------------------------------------Promises------------------------------------------------------------------
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("this is complete");
        resolve()
    },0);
});
promiseOne.then(function(){
    console.log("consumed"); 
});


//Example 2 (.then and .catch)
const NewProm = new Promise((resolve, reject) => {
    let condition = true;
    if(!condition){
        resolve({name: "dev", id: 456})
    }else{
        reject('ERRR')
    }
});

NewProm.then((user)=>{
    console.log(user);
    return user.name
}).catch((error)=>{
    console.log(`This is your ${error}`);
});
    
//example 3 (.then and .catch)
const bymyself = new Promise((resolve, reject) => {
    let ispower = false;
    if(ispower){
        resolve(`charging....`)
    }else{  
        reject(`there is no power`)
    }
});

bymyself
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
});

// Async Await syntax....(with try and catch)
// Basically async and await is only 2nd way for consuming promise, in short alternate way of '.then' & '.catch'.
const Promisetwo = new Promise((resolve, reject) => {
    let condition = false;
    if(!condition){
        resolve(`db is connnected`)
    }else{
        reject(`db is not connected`)
    }
});

async function cPromisTwo() {
    try{
        const response = await Promisetwo;
        console.log(response);
        
    }catch(err){
        console.log(err);
    }
}

cPromisTwo();