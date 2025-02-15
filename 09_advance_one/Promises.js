// padding, fullfilled, rejected
const promiseOne = new Promise(function(resolve, rejected){
  setTimeout(function(){
    console.log('Asyn tassk is completed');
    resolve()
  }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve, rejected){
  setTimeout(function(){
    console.log("Asyn task 2");
    resolve()
    
  }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const PromiseThree = new Promise(function(resolve, rejected){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@gn"})
    },1000)
}).then(function(user){
    console.log(user);
    
})