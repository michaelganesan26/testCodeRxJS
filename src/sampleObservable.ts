//This is a sample of using a cold observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as colors from 'colors';


Observable.of(2,3,4,5,6,7,8,9).subscribe((x)=>{
   //let us delay the code
   setTimeout(()=>{
    console.log(`wow this is really cool! =>${x} ${new Date().toTimeString()}`);
    console.log(x);
   },3000);

});

const rxArray:Observable<any> = Observable.of(1,2,3,4);

rxArray.subscribe((x)=>{
    console.log(x);
});



const rx: Observable<string> = Observable.create((observer: any) => {
    setTimeout(() => {
        observer.next("RXJS");
        observer.complete();
    }, 3000);
});


rx.subscribe((x) => {
    console.log(`Your value is: ${x}`);

});

console.log(colors.magenta('Observable process started!'));

