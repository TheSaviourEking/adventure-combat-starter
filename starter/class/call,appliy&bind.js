// const book = {
//     title: 'The dream',
//     author: 'Saviour Eking'
// }

// function info(yearOfRelease, ) {
//     console.log(`${this.title} was written by ${this.author} and was released in ${yearOfRelease}`);
// }

// // info.call(book, 123);
// // info.apply(book, [123]);
// const infoOfBook = info.bind(book, 123);
// infoOfBook();

let name = {
    firstname: 'Saviour',
    lastname: 'Eking'
}

let printName = function () {
    console.log(`${this.firstname} ${this.lastname}`);
}

// let printMyName = printName.bind(name);
// printMyName();

Function.prototype.myBind = function (...args){
    let obj = this;
    return function (...args2) {
        console.log(obj, '-------------------------');
        obj.apply(args[0], [...args, ...args2]);
    }
}

let printMyName2 = printName.myBind(name);
printMyName2();
