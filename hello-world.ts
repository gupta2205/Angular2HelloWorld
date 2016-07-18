import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';


/*
  Placing this annotations above our
  class turns that into an Angular component!
  selector: It defines name of component
            which can be use to refer in html file. 
  template : This specifies the angular component
	     what to be displayed while its rendered.
  {{}} : The name property inside the {{}} defines the data
	 binding that component has.
*/
@Component ({
	selector : 'HelloWorld'
	template : `
	<h1> Hello {{name}} </h1>
	<button (click)="OnClickEvent()" > Click Here ! </button> `
})

class HelloWorld {
	//instance varialble : raleted to class 
	name : string 
	constructor(){
		this.name = "Angular 2 ! "
	}

	OnClickEvent() {
		this.name = "dear, Congrats ! you won a free world trip "
	}
}

/*
Angular creates the 
instance of component 
*/
bootstrap(HelloWorld);