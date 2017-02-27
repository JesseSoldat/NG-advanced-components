import { Component, Input, Directive, NgModule, ElementRef, OnInit } from '@angular/core';
let heroesData = [
	{
		name: 'Dr.Strange',
		joined: 'Joined in 1976',
		details: 'Three former parapsychology professors set up shop as a unique ghost removal service.',
		friends: '22 Friends',
		message: 'I love Dr.Strange'
	},
		{
		name: 'Captain America',
		joined: 'Joined in 1956',
		details: 'Three former parapsychology professors set up shop as a unique ghost removal service.',
		friends: '122 Friends',
		message: 'I love Captain America!'

	},
		{
		name: 'The Hulk',
		joined: 'Joined in 1986',
		details: 'Three former parapsychology professors set up shop as a unique ghost removal service.',
		friends: '2 Friends',
		message: 'I love The Hulk'

	}
];

interface IHeroes {
    name: string;
    joined: string;    
    details: string;
    friends: string;
    message: string;
}

@Component({
	selector: 'host',
	template: `
	<div class="ui card" >
		<div class="content">
			<a class="header">Dr.Strange</a>
			<div class="meta">
				<span class="date">Joined in 1976</span>
			</div>
			<div class="description">
        Three former parapsychology professors
        set up shop as a unique ghost removal
        service.
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        22 Friends
      </a>
    </div>
	</div>
	`
})

export class Host implements OnInit {
	heroes;

	constructor(){
		this.heroes = heroesData;
	}

	ngOnInit(){
		// console.log(this.heroes);
		
	}
}
//-----------------------------------------------------
@Directive({
	selector: '[popup]',
	exportAs: 'popup',
	host: {
		'(click)': 'onClick()'
	}
})
class Popup {
	@Input() message: string;

	// constructor(private el: ElementRef){
	// 	console.log(this.el);
	// }

	// ngOnInit(): void {
	// 	console.log('message: ', this.message);
	// }
	onClick(): void {
		alert(this.message);
	}
}
//-----------------------------------------------------
@Component ({
	selector: 'hero',
	template: `
	<div ngFor="let s of super">
	 {{s}}
	</div>
	`
})
class Hero implements OnInit {
	@Input() heroes;
	super;

	constructor(){
		this.super = ['Batman','Superman','Wonder Woman'];

	}

	ngOnInit(){

		// console.log(this.heroes);
	}
}
//-----------------------------------------------------


@Component({
	selector: 'host-app',
	template: `
	<div class="ui grid">
		<div class="two column row" >

			<div class="column">
				<host popup message="Clicked me!" #p1="popup"></host>
				<button (click)="p1.onClick()" class="ui primary button">
					Click Me!
				</button>
			</div>

			<div class="column">
				<host popup message="Hello from JLab" #p2="popup"></host>
				<button (click)="p2.onClick()" class="ui primary button">
					Click Me!
				</button>
			</div>
		</div>
	</div>
	<hero [heroes]="heroes"></hero>

	`
})

export class HostApp {
	heroes;

	constructor(){
		this.heroes = heroesData;
		
	}
}

@NgModule({
	declarations: [
		Host,
		Hero,
		HostApp,
		Popup
	],
	exports: [
		HostApp

	]
})

export class HostAppModule {}