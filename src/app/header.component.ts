import {Component} from "@angular/core";

@Component({
    selector:"app-header",
    template:`
    <div>
    <h2>The header component</h2>
    <span>{{info}}</span>
    </div>`,
    styles:["h2{color:blue}","span{color:orange}"]
})

export class HeaderComponent {
    info:string= "This is header component";
}