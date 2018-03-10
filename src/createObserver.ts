//This is an example of creating an observable
//Do not import the entire library, this is a total waste of memory

import { Observable } from 'rxjs/Observable';


import * as colors from 'colors';

const observable = Observable.create((observer:any) =>{
   //push items
   observer.next("Smion");
   observer.next("Jen");
   observer.next("sergi");
   observer.next("Michael Ganesan");
   observer.complete(); // list is done
});


//subscribe to the list
observable.subscribe((x:any)=>{
     console.log(x);

},(error:any)=>{
  console.log(`An error has occured with the stream ${error}`);
},
()=>{
   console.log(colors.magenta("Process completed"));

});



