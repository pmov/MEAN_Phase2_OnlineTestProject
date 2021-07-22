import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'welcome-app';
  id:number=56;
  age:number=40;
  name:string="Sam A";

  dis():string{
    return `welcome to angular ${this.name}`;
  }
 
}
