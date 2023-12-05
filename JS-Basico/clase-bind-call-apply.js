const owner = 'Lucy';
const addres = '123 Avenue';

function dogGreeting (owner, address){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}
const newHouse = {
    dogName: 'Coconut'
}

dogGreeting.call(newHouse, owner, addres);

const necessaryValues = [owner, addres];
dogGreeting.apply(newHouse, necessaryValues);

const bindingWithBind = dogGreeting.bind(newHouse, owner, addres);
bindingWithBind();
