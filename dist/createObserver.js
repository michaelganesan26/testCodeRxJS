"use strict";
//This is an example of creating an observable
//Do not import the entire library, this is a total waste of memory
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const colors = require("colors");
const observable = Observable_1.Observable.create((observer) => {
    //push items
    observer.next("Smion");
    observer.next("Jen");
    observer.next("sergi");
    observer.next("Michael Ganesan");
    observer.complete(); // list is done
});
//subscribe to the list
observable.subscribe((x) => {
    console.log(x);
}, (error) => {
    console.log(`An error has occured with the stream ${error}`);
}, () => {
    console.log(colors.magenta("Process completed"));
});
