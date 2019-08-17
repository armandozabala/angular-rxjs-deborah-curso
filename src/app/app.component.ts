import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  constructor(){

  }


  ngOnInit(){
    
      of(2,4,6,8).subscribe(console.log);


      from([20,15,10,5])
      .pipe()
      .subscribe(
          item=> console.log(` item ${item}`),
          err => console.error(`error ${err}`),
          () => console.log(`complete`)
      );



      of('Apple','Mango','Pears')
      .subscribe(
         fruits => console.log(`fruit ${fruits}`),
         err => console.log(`error with fruits`),
         () => console.log(`No more fruits`)
      );
  }
}
