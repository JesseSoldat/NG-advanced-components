import { Component, Input, Directive, ElementRef, OnInit } from '@angular/core';

@Component({
	selector: '[message]',
	host: {
		'class': 'ui-message'
	},
	template: `
	<div class="header">
	 {{header}}
	</div>
	<p>
		<ng-content></ng-content>
	</p>
	`
})

export class Message implements OnInit {
	@Input() header: string;

	ngOnInit(): void {
		console.log('header', this.header);
	}
}

@Component({
	selector: 'content-projection-app',
	template: `
	<div message header="My Message">
		This is my message
	</div>
	`
})
export class ContentProjectionApp {}