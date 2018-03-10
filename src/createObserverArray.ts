//Create an observable from Array
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

const myData: Array<string> = ["Adria", "Julian", "Jen", "Sergi"];

Observable.from(myData).subscribe((x:string)=>{
   console.log(`Next: ${x}`);
},
(error)=>{
    console.log(`Error: ${error}`);   

},()=>{
    console.log('Array Completed the Process()');
});


