"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Create an observable from Array
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
const myData = ["Adria", "Julian", "Jen", "Sergi"];
Observable_1.Observable.from(myData).subscribe((x) => {
    console.log(`Next: ${x}`);
}, (error) => {
    console.log(`Error: ${error}`);
}, () => {
    console.log('Array Completed the Process()');
});
