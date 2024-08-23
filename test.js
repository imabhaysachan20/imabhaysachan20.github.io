const rec = {
    name:"Abhay"
}
function decorator(func) {
    return function(...args) {
        func.call(rec,this.name);
    }
}
function hi(name) {
    console.log("hi",name);
}
const decoratedhi = decorator(hi);
decoratedhi("abhay");