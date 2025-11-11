const EventEmitter = require('events');
const event = new EventEmitter();
event.on('greet',(name)=>{
    console.log(`Hello, ${name}`);
});
event.on('farewell',(name)=>{
    console.log(`GoodBye, ${name}`);
});
const userAction = (action,name)=>{
    event.emit(action,name);
};
const simulateAction = () =>{
    userAction('greet','Alice');
    userAction('farewell','Bob');
};
module.exports= simulateAction