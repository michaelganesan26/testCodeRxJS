"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//This is a sample of using a cold observable
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
Observable_1.Observable.of(2, 3, 4, 5, 6, 7, 8, 9).subscribe((x) => {
    //let us delay the code
    setTimeout(() => {
        console.log(`wow this is really cool! =>${x} ${new Date().toTimeString()}`);
        console.log(x);
    }, 3000);
});
const rxArray = Observable_1.Observable.of(1, 2, 3, 4);
rxArray.subscribe((x) => {
    console.log(x);
});
const rx = Observable_1.Observable.create((observer) => {
    setTimeout(() => {
        observer.next("RXJS");
        observer.complete();
    }, 3000);
});
rx.subscribe((x) => {
    console.log(`Your value is: ${x}`);
});
console.log('Observable process started!');
